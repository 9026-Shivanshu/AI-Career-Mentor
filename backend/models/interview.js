const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {
        type: String,
        required: true
    },

    branch: {
        type: String,
        required: true
    },

    interviewType: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        required: true
    },

    questionsAnswered: {
        type: Number,
        default: 0
    },

    score: {
        type: Number,
        default: 0
    },

    confidence: {
        type: Number,
        default: 0
    },

    communication: {
        type: Number,
        default: 0
    },

    grammar: {
        type: Number,
        default: 0
    },

    feedback: {
        type: String,
        default: ""
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Interview", interviewSchema);