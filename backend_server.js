const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Use environment port

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "startTime.json");

// Function to get or set the start time
function getStartTime() {
    if (fs.existsSync(DATA_FILE)) {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        return data.startTime;
    } else {
        const startTime = Date.now();
        fs.writeFileSync(DATA_FILE, JSON.stringify({ startTime }));
        return startTime;
    }
}

// ✅ Correct API Endpoint
app.get("/api/start-time", (req, res) => {
    res.json({ startTime: getStartTime() });
});

// Root Route to Avoid "Cannot GET"
app.get("/", (req, res) => {
    res.send("Server is running! Use /api/start-time");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});