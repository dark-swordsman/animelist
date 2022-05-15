import express from "express";
const server = express();

const port = 6969;

server.listen(port, () => console.log(`Server running on: ${port}`));
