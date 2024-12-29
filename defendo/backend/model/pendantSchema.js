import mongoose from 'mongoose';

const { Schema } = mongoose

const pendantsSchema = new Schema({
    name : {
        type: String,
        
    },
    price : {
        type : String,
        
    },
    img: {
        type: [String],
        
    },
    description : {
        type : String
    },
    quantity : {
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

export const Pendants =  mongoose.model('pendant', pendantsSchema)

