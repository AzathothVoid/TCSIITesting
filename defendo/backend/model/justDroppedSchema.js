import mongoose from 'mongoose';

const { Schema } = mongoose

const justDroppedSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    productId : {
        type : String
    },
    productId2 : {
        type : String
    },
    productId3 : {
        type : String
    }
})

export const JustDropped =  mongoose.model('justDropped', justDroppedSchema)