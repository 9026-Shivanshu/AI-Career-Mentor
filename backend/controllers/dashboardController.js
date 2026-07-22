const Resume = require("../models/resume");
const Interview = require("../models/interview");

exports.getDashboardStats = async (req, res) => {

    try {

        const resumes = await Resume.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        const interviews = await Interview.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        const latestResume = resumes.length > 0 ? resumes[0] : null;

        const latestInterview = interviews.length > 0 ? interviews[0] : null;

        res.json({

            success: true,

           resumeScore: latestResume ? latestResume.atsScore : 0,

            atsScore: latestResume ? latestResume.atsScore : 0,

            interviewScore: latestInterview ? latestInterview.score : 0,

            totalInterviews: interviews.length

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