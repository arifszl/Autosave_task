import mongoose from "mongoose";

let autoSaveSchema = new mongoose.Schema({
    description:{
        type:String,
        // required:true
    }
})

let AutoSave = mongoose.model("AutoSave",autoSaveSchema)

export default AutoSave;