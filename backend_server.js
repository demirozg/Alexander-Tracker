const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Fixed start time: March 1, 2025 00:00:00 UTC
const FIXED_START_TIME = new Date('2025-03-01T00:00:00Z').getTime();

// API Endpoint
app.get("/api/start-time", (req, res) => {
    res.json({ startTime: FIXED_START_TIME });
});

// Root Route to Avoid "Cannot GET"
app.get("/", (req, res) => {
    res.send("Server is running! Use /api/start-time");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});