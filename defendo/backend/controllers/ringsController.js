import { Rings } from "../model/ringsSchema.js";


export const getRingDetails = async (req, res, next) => {


    try {
        const ringDetails = await Rings.find();

        res.json(ringDetails)
    }
     catch (error) {
        next(error)
    }

}

export const getRingDetailsById = async (req, res, next) => {

    try {
      const ringId = req.params.id; 
  
      const ringDetails = await Rings.findById(ringId);
  
      if (!ringDetails) {
        return res.status(404).json({ error: "Ring not found" });
      }
  
      res.json(ringDetails);
    } catch (error) {
      next(error);
    }
  };

  export const addRingDetails = async (req, res, next) => {

    const ringDetails = req.body;

    try {
        await Rings.create(ringDetails)
        res.json({ message: "Product has been uploaded",  ringDetails })
    }
     catch (error) {
      console.error('Error adding ring details to the database:', error);
        next(error)
    }

}
export const deleteRingDetails =  async (req, res, next) => {

  const { id } = req.params;

  try {
      await Rings.findByIdAndDelete(id)
      res.json({ message: "Product has been Deleted" })

  }
  catch (error) {
      next(error)
  }

}