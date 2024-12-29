import { LimitedDrops } from "../model/limitedDropsSchema.js";


export const getLimitedDropsDetails = async (req, res, next) => {


    try {
        const limitedDropsDetails = await LimitedDrops.find();

        res.json(limitedDropsDetails)
    }
     catch (error) {
        next(error)
    }

}
export const getLimitedDropsDetailsById = async (req, res, next) => {

    try {
      const limitedDropId = req.params.id; 
  
      const limitedDropsDetails = await LimitedDrops.findById(limitedDropId);
  
      if (!limitedDropsDetails) {
        return res.status(404).json({ error: "product not found" });
      }
  
      res.json(limitedDropsDetails);
    } catch (error) {
      next(error);
    }
  };

  export const addLimitedDropsDetails = async (req, res, next) => {

    const limitedDropsDetails = req.body;

    try {
        await LimitedDrops.create(limitedDropsDetails)
        res.json({ message: "Product has been uploaded",  limitedDropsDetails })
    }
     catch (error) {
        next(error)
    }

}
export const deleteLimitedDropsDetails = async (req, res, next) => {

    const { id } = req.params;

    try {
        await LimitedDrops.findByIdAndDelete(id)
        res.json({ message: "Product has been Deleted" })

    }
    catch (error) {
        next(error)
    }

}