import { NewReleases } from "../model/newReleasesSchema.js";


export const getNewReleasesDetails = async (req, res, next) => {


    try {
        const newReleasesDetails = await NewReleases.find();

        res.json(newReleasesDetails)
    }
    catch (error) {
        next(error)
    }

}
export const getNewReleasesDetailsById = async (req, res, next) => {

    try {
        const newReleasesId = req.params.id;

        const newReleasesDetails = await NewReleases.findById(newReleasesId);

        if (!newReleasesDetails) {
            return res.status(404).json({ error: "product not found" });
        }

        res.json(newReleasesDetails);
    } catch (error) {
        next(error);
    }
};

export const addNewReleasesDetails = async (req, res, next) => {

    const newReleasesDetails = req.body;

    try {
        await NewReleases.create(newReleasesDetails)
        res.json({ message: "Product has been uploaded", newReleasesDetails })
    }
    catch (error) {
        next(error)
    }

}
export const deleteNewReleasesDetails = async (req, res, next) => {

    const { id } = req.params;

    try {
        await NewReleases.findByIdAndDelete(id)
        res.json({ message: "Product has been Deleted" })

    }
    catch (error) {
        next(error)
    }

}
