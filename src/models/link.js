import mongoose, {Schema} from "mongoose";

const linkSchema = new Schema({
    label: String,
    link: String,
},{
    timestamps: true,
    collection: "Links",
})

const Link = mongoose.models.Link || mongoose.model("Link", linkSchema)

export default Link
