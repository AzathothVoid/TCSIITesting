import mongoose from 'mongoose';

const { Schema } = mongoose

const chainsSchema = new Schema({
    name : {
        type: String,
        
    },
    price : {
        type : String,
        
    },
    img: {
        type: [String],
        
    },
    quantity : {
        type : String
    },
    description : {
        type : String
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
    productId : {
        type : String
    }

})

export const Chains =  mongoose.model('chain', chainsSchema)

