import mongoose from 'mongoose';

const { Schema } = mongoose

const warrantyDetailsSchema = new Schema({
    heading : {
        type: String,
    },
    description : {
        type : String,
    },
    body : {
        type : String,
    },
})

export const WarrantyDetails =  mongoose.model('warrantyDetail', warrantyDetailsSchema)