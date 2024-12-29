import { Carasouel } from "../model/carasouelSchema.js"


export const getCarasouelImages = async (req, res, next) => {


    try {
        const carasouelImages = await Carasouel.find();

        res.json(carasouelImages)
    }
     catch (error) {
        next(error)
    }

}
