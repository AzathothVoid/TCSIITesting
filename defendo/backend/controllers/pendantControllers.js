import { Pendants } from "../model/pendantSchema.js";


export const getPendantDetails = async (req, res, next) => {


    try {
        const pendantDetails = await Pendants.find();

        res.json(pendantDetails)
    }
     catch (error) {
        next(error)
    }

}
export const getPendantDetailsById = async (req, res, next) => {

    try {
      const pendantId = req.params.id; 
  
      const pendantDetails = await Pendants.findById(pendantId);
  
      if (!pendantDetails) {
        return res.status(404).json({ error: "Pendant not found" });
      }
  
      res.json(pendantDetails);
    } catch (error) {
      next(error);
    }
  };

  export const addPendantDetails = async (req, res, next) => {

    const pendantDetails = req.body;

    try {
        await Pendants.create(pendantDetails)
        res.json({ message: "Product has been uploaded",  pendantDetails })
    }
     catch (error) {
        next(error)
    }

}
export const deletePendantDetails = async (req, res, next) => {

  const { id } = req.params;

  try {
      await Pendants.findByIdAndDelete(id)
      res.json({ message: "Product has been Deleted" })

  }
  catch (error) {
      next(error)
  }

}