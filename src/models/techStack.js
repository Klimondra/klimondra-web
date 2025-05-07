import mongoose, {Schema} from "mongoose";

const techStackSchema = new Schema({
    label: String,
    color: String,
    icon: {
        lib: String,
        name: String,
    },
},{
    timestamps: true,
    collection: "Technologies",
})

const Technologies = mongoose.models.Technologies || mongoose.model("Technologies", techStackSchema)

export default Technologies