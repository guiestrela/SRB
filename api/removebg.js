import FormData from "form-data";

export const config = {
    api: {
    bodyParser: false, // Importante para lidar com FormData manualmente
    },
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
}

  // Parse multipart form data manual (simples para um arquivo só)
const busboy = await import("busboy");
const bb = busboy.default({ headers: req.headers });
let fileBuffer = Buffer.alloc(0);
let fileName = "";

await new Promise((resolve, reject) => {
    bb.on("file", (name, file, info) => {
    fileName = info.filename;
    file.on("data", (data) => {
        fileBuffer = Buffer.concat([fileBuffer, data]);
    });
    file.on("end", () => resolve());
    });
    bb.on("error", reject);
    req.pipe(bb);
});

const API_KEY = "3B5aj2hNsKU97SaWiWoBDuDA";
const formData = new FormData();
formData.append("image_file", fileBuffer, fileName);
formData.append("size", "auto");

try {
    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
        "X-Api-Key": API_KEY,
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