require("dotenv").config();

const db = require ("./db"); // Fixed the import statement

const port = process.env.PORT || 3000; // Provide a default port
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "funcionand" });
});

app.get("/licenseplates", async (req, res) => {
        const licenseplates = await db.selectlicenseplates(); // Fixed the typo here
        res.json(licenseplates);
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
