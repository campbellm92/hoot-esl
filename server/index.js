const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));
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

app.get("/api/definition", async (req, res) => {
  const URL = "https://dictionaryapi.com/api/v3/references/learners/json/";
  const KEY = process.env.API_KEY;
  const word = req.query.word;
  try {
    const response = await fetch(`${URL}${word}?key=${KEY}`);
    if (!response.ok) {
      throw new Error("Could not fetch definition.");
    }
    const data = await response.json();
    const firstDefinition =
      data[0]?.def?.[0]?.sseq?.[0]?.[0]?.[1]?.dt?.[0]?.[1];
    res.json({ definition: firstDefinition || "No definition found." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error fetching definition." });
  }
});

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
