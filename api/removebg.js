import Busboy from "busboy";
import FormData from "form-data";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }

    const busboy = Busboy({ headers: req.headers });
    let fileBuffer = Buffer.alloc(0);
    let fileName = "image.png";

    await new Promise((resolve, reject) => {
        busboy.on("file", (fieldname, file, info) => {
            fileName = info.filename || "image.png";
            // It's good practice to clear or re-initialize fileBuffer if this handler
            // could theoretically be called multiple times for a single request,
            // though for 'image_file' we expect one.
            // fileBuffer = Buffer.alloc(0); // Uncomment if needed for multiple file events logic.
            file.on("data", (data) => {
                fileBuffer = Buffer.concat([fileBuffer, data]);
            });
            file.on("error", (err) => { // Handle errors on the file stream itself
                console.error("File stream error:", err);
                reject(err); // Reject the main promise
            });
        });
        busboy.on("finish", resolve);
        busboy.on("error", reject);
        req.pipe(busboy);
    });

    if (!fileBuffer.length) {
        return res.status(400).json({ error: "Nenhum arquivo recebido." });
    }

    const ext = fileName.split('.').pop().toLowerCase();
    let mimeType = "application/octet-stream";
    if (ext === "jpg" || ext === "jpeg") mimeType = "image/jpeg";
    else if (ext === "png") mimeType = "image/png";
    else if (ext === "webp") mimeType = "image/webp";

    const formData = new FormData();
    formData.append("image_file", fileBuffer, { filename: fileName, contentType: mimeType });
    formData.append("size", "auto");

    try {
        // These logs are very helpful for debugging, ensure they are checked.
        console.log("Attempting to remove background for fileName:", fileName);
        console.log("fileBuffer length for API call:", fileBuffer.length);
        // console.log("first bytes for API call:", fileBuffer.slice(0, 10)); // Optional: can be verbose
        console.log("Using REMOVE_BG_KEY:", process.env.REMOVE_BG_KEY ? "Exists" : "MISSING or undefined");

        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
            "X-Api-Key": process.env.REMOVE_BG_KEY,
            // Let fetch set the Content-Type for FormData automatically.
            // ...formData.getHeaders(), // This line is removed
        },
        body: formData,
        });

        if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error from remove.bg API (${response.status}):`, errorText);
        return res.status(response.status < 500 ? 400 : 502).json({ error: "Erro na API do remove.bg", details: errorText });
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        res.setHeader("Content-Type", "image/png");
        res.send(buffer);
    } catch (err) {
        console.error("Erro interno no manipulador removebg:", err);
        res.status(500).json({ error: "Erro interno do servidor", details: err.message });
    }
}