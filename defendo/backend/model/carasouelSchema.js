import mongoose from 'mongoose';

const { Schema } = mongoose

const carasouelSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    url : {
        type : String,
        required : true
    }
})

export const Carasouel =  mongoose.model('carasouel', carasouelSchema)

