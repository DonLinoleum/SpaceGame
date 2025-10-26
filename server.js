import express from "express";
import path from "path";

const app = express();
const distPath = path.join(import.meta.dirname, "dist");

app.use(express.static(distPath));
app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 3001;
const HOST = "127.0.0.1";
app.listen(PORT, HOST, () => {
  console.log(`server starts on - ${HOST}:${PORT}`);
});
