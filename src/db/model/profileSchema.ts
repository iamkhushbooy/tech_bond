import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
}, { _id: false });
const educationSchema = new mongoose.Schema({
    college: String,
    startYear: String,
    endYear: String,
    degree: String,
    stream: String,
    scoreType: String,
    score: String
}, { _id: false })
const profileSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
    name: String,
    age: String,
    mobile: String,
    skills: [String],
    projects: [projectSchema],
    education: [educationSchema],
    links: [String]
})
export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);