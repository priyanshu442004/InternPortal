import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    memberID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: String,
    mobile: String,
    role: String,
    gender: String,
}, { timestamps: true });

export const Member = mongoose.model('members', memberSchema , 'members');