import mongoose from 'mongoose';

const { Schema } = mongoose

const allProducts = new Schema({
    name : {
        type: String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    img2 : {
        type : String,
        required : true
    },
    quantity : {
        type : String
    },
    description : {
        type : String
    },
    variants : {
        type : Array
    },
    colors : { 
        type : Array
    }

})

export const AllProducts =  mongoose.model('AllProduct', allProducts)

