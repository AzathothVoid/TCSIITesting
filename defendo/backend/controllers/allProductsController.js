import { Bracelets } from "../model/braceletsSchema.js";
import {Rings} from "../model/ringsSchema.js"
import {Chains} from "../model/chainsSchema.js"
import {NewReleases} from "../model/newReleasesSchema.js"
import {LimitedDrops} from "../model/limitedDropsSchema.js"

 
export const getAllProductsBySearch = async (req, res, next) => {

        try {
          
          const search = req.query.search || "";
      
          let braceletDetails = await Bracelets.find({
      
            "$or": [
              { name: { $regex: search, $options: "i" } },
              { price: { $regex: search, $options: "i" } }
            ]
          })
          let ringDetails = await Rings.find({
      
            "$or": [
              { name: { $regex: search, $options: "i" } },
              { price: { $regex: search, $options: "i" } }
            ]
          })
          let chainDetails = await Chains.find({
      
            "$or": [
              { name: { $regex: search, $options: "i" } },
              { price: { $regex: search, $options: "i" } }
            ]
          })
          let newReleaseDetails = await NewReleases.find({
      
            "$or": [
              { name: { $regex: search, $options: "i" } },
              { price: { $regex: search, $options: "i" } }
            ]
          })
          let limitedDropDetails = await LimitedDrops.find({
      
            "$or": [
              { name: { $regex: search, $options: "i" } },
              { price: { $regex: search, $options: "i" } }
            ]
          })
          
          res.json({
            braceletDetails,
            ringDetails,
            chainDetails,
            newReleaseDetails,
            limitedDropDetails
          })
         
        }
        catch (error) {
          next(error)
        }
      
      
      }


