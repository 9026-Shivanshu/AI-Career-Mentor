const Roadmap = require("../models/roadmap");

// ======================================
// Save Career Roadmap
// ======================================

exports.saveRoadmap = async (req, res) => {

    try {

        const { career } = req.body;

        let roadmap = await Roadmap.findOne({

            user: req.user.id

        });

        if (roadmap) {

            roadmap.career = career;

            await roadmap.save();

            return res.status(200).json({

                success: true,

                message: "Career updated successfully.",

                roadmap

            });

        }

        roadmap = await Roadmap.create({

            user: req.user.id,

            career

        });

        res.status(201).json({

            success: true,

            message: "Career saved successfully.",

            roadmap

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};

// ======================================
// Get Current Roadmap
// ======================================

exports.getRoadmap = async (req, res) => {

    try {

        const roadmap = await Roadmap.findOne({

            user: req.user.id

        });

        res.status(200).json({

            success: true,

            roadmap

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};

// ======================================
// Update Progress
// ======================================

exports.updateProgress = async (req, res) => {

    try {

        const { progress } = req.body;

        const roadmap = await Roadmap.findOneAndUpdate(

            {

                user: req.user.id

            },

            {

                progress

            },

            {

                new: true

            }

        );

        res.status(200).json({

            success: true,

            roadmap

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};