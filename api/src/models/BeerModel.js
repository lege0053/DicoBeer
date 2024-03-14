import mongoose from "mongoose";

const BeerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: "Beer's name is required"
        },
        description: {
            type: String,
            required: "Beer's description is required"
        },
        url: {
            type: String,
            required: "photo's url is required",
            default: "/default_img.png"
        },
        degree: {
            type: Number,
            required: "Beer's degree is required"
        },
        type: {
            type: String,
            required: "Beer's type is required"
        },
    },
    { timestamps: true }
);
export default mongoose.model("beers", BeerSchema);