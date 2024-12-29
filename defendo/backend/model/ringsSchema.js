import mongoose from 'mongoose';

const { Schema } = mongoose

const ringsSchema = new Schema({
    name: {
        type: String,
        
    },
    price: {
        type: String,
        
    },
    img: {
        type: [String],
        
    },
    description: {
        type: String
    },
    quantity: {
        type: String
    },
    variants: [
        {
            size: {
                type: String,
                
            },
            stock: {
                type: String,
                
            },
        },
    ],
    colors: {
        type: [String],
        
    },
    productId: {
        type: String
    }


})

export const Rings = mongoose.model('ring', ringsSchema)

