import { CustomerReviews } from "../model/customerReviewsSchema.js";


export const getCustomerReviews = async (req, res, next) => {

    try {
        const customerReviews = await CustomerReviews.find();

        res.json(customerReviews)
    }
     catch (error) {
        next(error)
    }

}
export const getCustomerReviewsById = async (req, res, next) => {

    try {
      const CustomerReviewsId = req.params.id;
  
      const customerReviews = await CustomerReviews.findById(CustomerReviewsId);
  
      if (!customerReviews) {
        return res.status(404).json({ error: "Review not found" });
      }
  
      res.json(customerReviews);
    } catch (error) {
      next(error);
    }
  };
  
  export const addCustomerReview = async (req, res, next) => {
  
    const customerReviews = req.body;
  
    try {
      await CustomerReviews.create(customerReviews)
      res.json({ message: "Product has been uploaded", customerReviews })
    }
    catch (error) {
      next(error)
    }
  
  }
  
  export const deleteCustomerReviews = async (req, res, next) => {
  
    const { id } = req.params;
  
    try {
      await CustomerReviews.findByIdAndDelete(id)
      res.json({ message: "Review has been Deleted" })
  
    }
    catch (error) {
      next(error)
    }
  
  }
