import { InstaDetail } from "../model/instaDetails.js";


export const getInstaDetails = async (req, res, next) => {

    try {
        const instaDetails = await InstaDetail.find();

        res.json(instaDetails)
    }
     catch (error) {
        next(error)
    }

}
