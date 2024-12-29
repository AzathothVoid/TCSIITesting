import mongoose from 'mongoose';

const { Schema } = mongoose

const categorySchema = new Schema({
    name : {
        type: String,
        required : true
    },
    url : {
        type : String,
        required : true
    }
})

export const Category =  mongoose.model('category', categorySchema)