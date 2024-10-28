import mongoose, { mongo } from "mongoose"

const certificateSchema=new mongoose.Schema({
    id:{
        type:String,
        require:true
    }
},{timestamps:true});

export const certificate = mongoose.model('certificateID',certificateSchema)