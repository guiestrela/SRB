// api/removebg.js
export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }

    const formData = new FormData();
    const buffers = [];
    req.on("data", chunk => buffers.push(chunk));
    req.on("end", async () => {
        formData.append("image_file", Buffer.concat(buffers), "image.png");
        formData.append("size", "auto");

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: { "X-Api-Key": process.env.REMOVE_BG_KEY, ...formData.getHeaders() },
        body: formData,
    });

    if (!response.ok) {
        const errorText = await response.text();
        return res.status(400).send(errorText);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
});
}