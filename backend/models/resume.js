const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },

    fileName: {

        type: String,

        required: true

    },

    atsScore: {

        type: Number,

        default: 0

    },

    foundSkills: {

        type: [String],

        default: []

    },

    missingSkills: {

        type: [String],

        default: []

    },

    uploadedAt: {

        type: Date,

        default: Date.now

    }

});
module.exports =
    mongoose.models.Resume ||
    mongoose.model("Resume", resumeSchema);