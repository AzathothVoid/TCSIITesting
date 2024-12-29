import { Chains } from '../model/chainsSchema.js'


export const getChainDetails = async (req, res, next) => {


    try {
        const ChainDetails = await Chains.find();

        res.json(ChainDetails)
    }
     catch (error) {
        next(error)
    }

}
export const getChainDetailsById = async (req, res, next) => {

    try {
      const chainId = req.params.id; 
  
      const ChainDetails = await Chains.findById(chainId);
  
      if (!ChainDetails) {
        return res.status(404).json({ error: "Chain not found" });
      }
  
      res.json(ChainDetails);
    } catch (error) {
      next(error);
    }
  };

  export const addChainDetails = async (req, res, next) => {

    const ChainDetails = req.body;

    try {
        await Chains.create(ChainDetails)
        res.json({ message: "Product has been uploaded",  ChainDetails })
    }
     catch (error) {
        next(error)
    }

}
export const deleteChainDetails = async (req, res, next) => {

  const { id } = req.params;

  try {
      await Chains.findByIdAndDelete(id)
      res.json({ message: "Product has been Deleted" })

  }
  catch (error) {
      next(error)
  }

}