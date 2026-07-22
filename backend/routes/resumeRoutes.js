
const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");
const {
    uploadResume,
    getResumeHistory
} = require("../controllers/resumeController");
// Upload Resume API

router.post(
    "/upload",
    authMiddleware,
    upload.single("resume"),
    uploadResume
);
router.get(
    "/history",
    authMiddleware,
    getResumeHistory
);
module.exports = router;