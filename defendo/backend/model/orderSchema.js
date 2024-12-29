import mongoose from 'mongoose';

const { Schema } = mongoose

const orderSchema = new Schema({
    firstName : {
        type: String,
        required : [true, 'Please enter your First name']
    },
    lastName : {
        type : String,
        required : [true,'Please enter your Last name']
    },
    email : {
        type : String,
        required : [true , 'Please enter you Email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid Email address']
    },
    address : {
        type: String,
        required : true
    },
    country : {
        type: String,
    },
    city : {
        type: String,
        required : true
    },
    zip : {
        type: String,
    },
    phoneNumber : {
        type: String,
        required : true
    },
    orderNotes : {
        type: String,
    },
    products : [
        {
            id: {type : String},
            Name : {type : String, required : true},
            price : {type : String, required : true},
            quantity : {type : String, required : true},
            size : {type : String, required : true},
            itemPrice : {type : String, required : true}
        },
    ],
    total : { type : String, required : true }
},
{ timestamps : true}
);

export const Order =  mongoose.model('Order', orderSchema)

