import mongoose from "mongoose";

const InternSchema = new mongoose.Schema({
  internID: {
      type: String,
      required: true,
      unique: true
    },
  status:{
    type: String,
  } , 
    password: {
      type: String,
      required: true
    },
    forename: {
      type: String,
      required: true
    },
    contactNo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: Date,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    performance: {
      type: String,
      required: false
    }
  }, { timestamps: true });
  
  
  export const Intern = mongoose.models.Intern || mongoose.model('Intern', InternSchema);