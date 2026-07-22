const Interview = require("../models/interview");

// =========================================
// Save Interview Result
// =========================================

exports.saveInterview = async (req, res) => {

    try {

        const {

            name,

            branch,

            interviewType,

            difficulty,

            questionsAnswered,

            score,

            confidence,

            communication,

            grammar,

            feedback

        } = req.body;

        const interview = await Interview.create({

            user: req.user.id,

            name,

            branch,

            interviewType,

            difficulty,

            questionsAnswered,

            score,

            confidence,

            communication,

            grammar,

            feedback

        });

        res.status(201).json({

            success: true,

            message: "Interview saved successfully.",

            interview

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

// =========================================
// Get Logged In User Interview History
// =========================================

exports.getMyInterviews = async (req, res) => {

    try {

        const interviews = await Interview.find({

            user: req.user.id

        })

        .select("-__v")

        .sort({

            createdAt: -1

        });

        res.status(200).json({

            success: true,

            total: interviews.length,

            interviews

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};