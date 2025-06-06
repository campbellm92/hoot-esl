const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      //   "https://www.mattdev.it/", eventual url of site
      //   "https://mattdev.it", eventual url of site
    ],
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
