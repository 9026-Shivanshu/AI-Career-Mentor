const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
password: {
  type: String,
  default: "",
},
googleId: {
  type: String,
  default: "",
},

provider: {
  type: String,
  enum: ["local", "google"],
  default: "local",
},
    phone: {
      type: String,
      default: "",
    },

    college: {
      type: String,
      default: "",
    },

    branch: {
      type: String,
      default: "",
    },

    graduationYear: {
      type: Number,
      default: null,
    },

    skills: {
      type: [String],
      default: [],
    },

    resume: {
      type: String,
      default: "",
    },

    atsScore: {
      type: Number,
      default: 0,
    },

    profileImage: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
    resetOTP: {
  type: String,
  default: "",
},

resetOTPExpire: {
  type: Date,
  default: null,
},
resetToken: {
  type: String,
  default: "",
},

resetTokenExpire: {
  type: Date,
  default: null,
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);