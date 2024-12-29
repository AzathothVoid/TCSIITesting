import mongoose from 'mongoose';

const { Schema } = mongoose

const addressSchema = new Schema({
    firstName : {
        type: String,
        required : [true, 'Please enter your First name']
    },
    lastName : {
        type : String,
        required : [true,'Please enter your Last name']
    },
    phone : {
        type : String,
        required : [true , 'Please enter you Phone number']
    },
    address : {
        type: String,
        required : [true , 'Please enter your Complete Adrress']
    },
    city : {
        type: String,
        required : [true , 'Please enter your city']
    },
    country : {
        type : String
    },
    zipCode : {
        type : String
    }


},{
    timestamps : true
})

export const Address =  mongoose.model('adress', addressSchema)