import mongoose, { trusted } from 'mongoose';

const { Schema } = mongoose

const customerReviewsSchema = new Schema({
    email : {
        type: String,
    },
    customerName : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    rating : {
        type : String,
    }
})

export const CustomerReviews =  mongoose.model('customerReview', customerReviewsSchema)