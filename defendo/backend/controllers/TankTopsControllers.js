import { TankTops } from "../model/TankTopschema.js";


export const getTankTopsDetails = async (req, res, next) => {


    try {
        const TankTopsDetails = await TankTops.find();

        res.json(TankTopsDetails)
    }
     catch (error) {
        next(error)
    }

}

export const getTankTopsDetailsById = async (req, res, next) => {

    try {
      const TankTopsId = req.params.id; 
  
      const TankTopsDetails = await TankTops.findById(TankTopsId);
  
      if (!TankTopsDetails) {
        return res.status(404).json({ error: "TankTops not found" });
      }
  
      res.json(TankTopsDetails);
    } catch (error) {
      next(error);
    }
  };

  export const addTankTopsDetails = async (req, res, next) => {

    const TankTopsDetails = req.body;

    try {
        await TankTops.create(TankTopsDetails)
        res.json({ message: "Product has been uploaded",  TankTopsDetails })
    }
     catch (error) {
        next(error)
    }

}
export const deleteTankTopsDetails = async (req, res, next) => {

  const { id } = req.params;

  try {
      await TankTops.findByIdAndDelete(id)
      res.json({ message: "Product has been Deleted" })

  }
  catch (error) {
      next(error)
  }

}