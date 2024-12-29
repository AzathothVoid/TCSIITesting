import { WarrantyDetails } from '../model/warrantyDetailsSchema.js'


export const getWarrantyDetails = async (req, res, next) => {

    try {
        const warrantyDetails = await WarrantyDetails.find();

        res.json(warrantyDetails)
    }
     catch (error) {
        next(error)
    }

}
