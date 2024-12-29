import { JustDropped } from '../model/justDroppedSchema.js'


export const getJustDroppedImages = async (req, res, next) => {
    try {
        const JustDroppedImages = await JustDropped.find();

        res.json(JustDroppedImages)
    }
     catch (error) {
        next(error)
    }

}
