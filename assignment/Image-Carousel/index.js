const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.static("./carousel-assignment"));

app.listen(PORT, () => console.log("Server is now listening on port ${PORT}"));
