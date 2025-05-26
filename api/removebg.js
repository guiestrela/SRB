import Busboy from "busboy";
import FormData from "form-data";

export const config = {
    api: { bodyParser: false },
    };

    export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }

    const busboy = Busboy({ headers: req.headers });
    let fileBuffer = Buffer.alloc(0);
    let fileName = "image.png";
    let originalMimeType = "application/octet-stream"; // To store the original mime type

    try {
        await new Promise((resolve, reject) => {
            busboy.on("file", (fieldname, file, info) => {
                fileName = info.filename || "image.png";
                originalMimeType = info.mimeType || "application/octet-stream"; // Capture original mimeType

                file.on("data", (data) => {
                    fileBuffer = Buffer.concat([fileBuffer, data]);
                });
                // No specific action on file 'end' if 'finish' resolves the promise.
                file.on("error", reject); // Reject promise if a file stream errors
            });

            busboy.on("error", reject); // Reject promise on busboy errors
            busboy.on("finish", resolve); // Resolve promise when all parts are parsed

            req.pipe(busboy);
        });
    } catch (uploadError) {
        console.error("Error during file upload processing with Busboy:", uploadError);
        return res.status(400).json({ error: "Erro ao processar o arquivo enviado.", details: uploadError.message });
    }

    if (!fileBuffer.length) {
        return res.status(400).json({ error: "Nenhum arquivo recebido." });
    }

    let finalMimeType = originalMimeType; // This is info.mimeType || "application/octet-stream"

    // If originalMimeType is generic or potentially unreliable (e.g. client didn't send one),
    // try to infer a more specific MIME type from the filename for supported image types.
    if (originalMimeType === "application/octet-stream" || !originalMimeType) {
        const ext = fileName.split('.').pop().toLowerCase();
        if (ext === "jpg" || ext === "jpeg") {
            finalMimeType = "image/jpeg";
        } else if (ext === "png") {
            finalMimeType = "image/png";
        } else if (ext === "webp") {
            finalMimeType = "image/webp";
        } else if (ext === "bmp") {
            finalMimeType = "image/bmp";
        } else if (ext === "tiff" || ext === "tif") {
            finalMimeType = "image/tiff";
        }
        // If extension doesn't match known types, finalMimeType remains as it was (e.g., application/octet-stream)
    }

    // Log what's being used for the API call
    console.log(`Preparing to send to remove.bg (Base64 strategy): filename='${fileName}', clientMimeType='${originalMimeType}', finalMimeTypeForAPI='${finalMimeType}', bufferLength=${fileBuffer.length}`);
    // Log API key presence (masked)
    console.log(`Using API Key: ${process.env.REMOVE_BG_KEY ? process.env.REMOVE_BG_KEY.substring(0, 4) + '...' : 'NOT SET'}`);

    const formData = new FormData();

    // Convert the file buffer to a Base64 string
    const imageBase64 = fileBuffer.toString('base64');

    // Append the Base64 string using the 'image_file_b64' parameter
    formData.append("image_file_b64", imageBase64);

    formData.append("size", "auto");

    try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
            "X-Api-Key": process.env.REMOVE_BG_KEY,
        },
        body: formData,
        });

        if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error from remove.bg API: ${response.status}`, errorText);
        return res.status(400).send(errorText);
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        res.setHeader("Content-Type", "image/png");
        res.send(buffer);
    } catch (err) {
        console.error("Internal server error:", err);
        res.status(500).json({ error: "Erro interno do servidor.", details: err.message });
    }
}
