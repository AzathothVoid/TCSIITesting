import { Shirts } from "../model/shirtSchema.js";


export const getShirtDetails = async (req, res, next) => {


    try {
        const ShirtDetails = await Shirts.find();

        res.json(ShirtDetails)
    }
     catch (error) {
        next(error)
    }

}

export const getShirtDetailsById = async (req, res, next) => {

    try {
      const ShirtId = req.params.id; 
  
      const ShirtDetails = await Shirts.findById(ShirtId);
  
      if (!ShirtDetails) {
        return res.status(404).json({ error: "Shirt not found" });
      }
  
      res.json(ShirtDetails);
    } catch (error) {
      next(error);
    }
  };

  export const addShirtDetails = async (req, res, next) => {

    const ShirtDetails = req.body;

    try {
        await Shirts.create(ShirtDetails)
        res.json({ message: "Product has been uploaded",  ShirtDetails })
    }
     catch (error) {
        next(error)
    }

}
export const deleteShirtDetails = async (req, res, next) => {

  const { id } = req.params;

  try {
      await Shirts.findByIdAndDelete(id)
      res.json({ message: "Product has been Deleted" })

  }
  catch (error) {
      next(error)
  }

}