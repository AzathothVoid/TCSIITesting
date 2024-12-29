import mongoose from 'mongoose';

const { Schema } = mongoose

const checkoutSchema = new Schema({
    firstName : {
        type: String,
        required : [true, 'Please enter your First name']
    },
    lastName : {
        type : String,
        required : [true,'Please enter your Last name']
    },
    phoneNumber : {
        type : String,
        required : [true , 'Please enter you Phone number']
    },
    address : {
        type: String,
        required : [true , 'Please enter your Complete Adrress']
    },
    detailedAddress : {
        type: String,
    },
    city : {
        type: String,
        required : [true , 'Please enter your city']
    },
    country : {
        type : String
    },
    postalCode : {
        type : String,
    }
},{
    timestamps : true
})

export const Checkout =  mongoose.model('checkout', checkoutSchema)