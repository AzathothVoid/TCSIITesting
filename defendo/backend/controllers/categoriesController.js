import { Category } from "../model/categorySchema.js";


export const getCategoryImages = async (req, res, next) => {

    try {
        const CategoryImages = await Category.find();

        res.json(CategoryImages)
    }
     catch (error) {
        next(error)
    }

}
