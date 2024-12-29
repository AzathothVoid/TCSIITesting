import { FAQs } from "../model/FAQsSchema.js";


export const getFAQs = async (req, res, next) => {

    try {
        const FAQ = await FAQs.find();

        res.json(FAQ)
    }
     catch (error) {
        next(error)
    }

}
