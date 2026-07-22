const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    saveInterview,
    getMyInterviews
} = require("../controllers/interviewController");

// Save Interview Result

router.post("/save", authMiddleware, saveInterview);

// Get Interview History

router.get("/history", authMiddleware, getMyInterviews);

module.exports = router;