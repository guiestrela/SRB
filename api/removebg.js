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

    // The old manual mimeType derivation is no longer needed.
    // const ext = fileName.split('.').pop().toLowerCase();
    // ... (old logic was here)

    const formData = new FormData();
    formData.append("image_file", fileBuffer, {
        filename: fileName,
        contentType: originalMimeType, // Use the captured original mimeType
    });
    formData.append("size", "auto");

    try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
            "X-Api-Key": process.env.REMOVE_BG_KEY,
            ...formData.getHeaders(),
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
