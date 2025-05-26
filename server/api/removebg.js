import multer from "multer";
import FormData from "form-data";
import fetch from "node-fetch";

const upload = multer();

export default async function handler(req, res) {
    await new Promise((resolve, reject) => {
        upload.single("image_file")(req, res, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });

    const API_KEY = "3B5aj2hNsKU97SaWiWoBDuDA";
    const formData = new FormData();
    formData.append("image_file", req.file.buffer, req.file.originalname);
    formData.append("size", "auto");

    try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: { "X-Api-Key": API_KEY },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(400).send(errorText);
        }

        const buffer = await response.buffer();
        res.setHeader("Content-Type", "image/png");
        res.send(buffer);
    } catch (err) {
        res.status(500).send("Erro interno");
    }
}