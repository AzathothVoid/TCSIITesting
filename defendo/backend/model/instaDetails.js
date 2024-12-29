import mongoose from 'mongoose';

const { Schema } = mongoose

const instaDetailsSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    url : {
        type : String,
        required : true
    }
})

export const InstaDetail =  mongoose.model('instaDetail', instaDetailsSchema)