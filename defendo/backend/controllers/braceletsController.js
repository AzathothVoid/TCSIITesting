import { Bracelets } from '../model/braceletsSchema.js'


export const getBraceletDetails = async (req, res, next) => {


  try {
    // const page = parseInt(req.query.page) - 1 || 0;
    // const limit = parseInt(req.query.limit) || 5;
    // const search = req.query.search || "";

    // // let sort = req.query.sort || "_id"

    // // req.query.sort ? (sort = req.query.sort.split(",")) : (sort[sort])

    // // let sortBy = {};

    // // if (sort[1]) {
    // //   sortBy[sort[0]] = sort[1]
    // // } else {
    // //   sortBy[sort[0]] = "asc"
    // // }

    // let braceletDetails = await Bracelets.find({

    //   "$or": [
    //     { name: { $regex: search, $options: "i" } },
    //     { price: { $regex: search, $options: "i" } }
    //   ]
    // })
      
    //   .skip(page * limit)
    //   .limit(limit)


    // let total = await Bracelets.countDocuments({ name: { $regex: search, $options: "i" } })

    // let pageCount = Math.ceil(total / limit)

    // res.json({
    //   braceletDetails,
    //   total,
    //   page: page + 1,
    //   limit,
    //   pageCount
    // })
    const braceletDetails = await Bracelets.find();

    res.json(braceletDetails)
  }
  catch (error) {
    next(error)
  }


}
export const getBraceletDetailsById = async (req, res, next) => {

  try {
    const braceletId = req.params.id;

    const braceletDetails = await Bracelets.findById(braceletId);

    if (!braceletDetails) {
      return res.status(404).json({ error: "bracelet not found" });
    }

    res.json(braceletDetails);
  } catch (error) {
    next(error);
  }
};

export const addBraceletDetails = async (req, res, next) => {
  
  const braceletDetails = req.body;

  try {
    await Bracelets.create(braceletDetails)
    res.json({ message: "Product has been uploaded", braceletDetails })
  }
  catch (error) {
    next(error)
  }

}

export const deleteBraceletDetails = async (req, res, next) => {

  const { id } = req.params;

  try {
    await Bracelets.findByIdAndDelete(id)
    res.json({ message: "Product has been Deleted" })

  }
  catch (error) {
    next(error)
  }

}




