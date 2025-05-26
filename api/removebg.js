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

    await new Promise((resolve, reject) => {
        busboy.on("file", (fieldname, file, info) => {
        fileName = info.filename || "image.png";
        file.on("data", (data) => {
            fileBuffer = Buffer.concat([fileBuffer, data]);
        });
        file.on("end", resolve);
        });
        busboy.on("error", reject);
        req.pipe(busboy);
    });

    if (!fileBuffer.length) {
        return res.status(400).json({ error: "Nenhum arquivo recebido." });
    }

    // Limite de tamanho extra (opcional)
    if (fileBuffer.length > 4 * 1024 * 1024) {
        return res.status(413).json({ error: "Arquivo muito grande (máx 4MB)" });
    }

    const formData = new FormData();
    const ext = fileName.split('.').pop();
    const mimeType = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";
    formData.append("image_file", fileBuffer, {
        filename: fileName,
        contentType: mimeType
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
        return res.status(400).send(errorText);
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        res.setHeader("Content-Type", "image/png");
        res.send(buffer);
    } catch (err) {
        res.status(500).send("Erro interno");
    }
}