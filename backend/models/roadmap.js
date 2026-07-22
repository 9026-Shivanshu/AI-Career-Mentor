const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },

    career: {

        type: String,

        required: true

    },

    progress: {

        type: Number,

        default: 0

    },

    completedSteps: {

        type: [String],

        default: []

    },

    createdAt: {

        type: Date,

        default: Date.now

    }

});

module.exports =
mongoose.models.Roadmap ||
mongoose.model("Roadmap", roadmapSchema);