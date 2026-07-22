const express = require("express");

const router = express.Router();

const { createContact } = require("../controllers/contactController");

// POST Contact Message
router.post("/", createContact);

module.exports = router;