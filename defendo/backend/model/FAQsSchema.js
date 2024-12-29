import mongoose from 'mongoose';

const { Schema } = mongoose

const FAQsSchema = new Schema({
    categoryName : {
        type: String,
    },
    question : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    },
})

export const FAQs =  mongoose.model('FAQ', FAQsSchema)