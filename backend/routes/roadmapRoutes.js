const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    saveRoadmap,
    getRoadmap,
    updateProgress
} = require("../controllers/roadmapController");

// Save Career
router.post("/save", authMiddleware, saveRoadmap);

// Get Current Roadmap
router.get("/", authMiddleware, getRoadmap);

// Update Progress
router.put("/progress", authMiddleware, updateProgress);

module.exports = router;