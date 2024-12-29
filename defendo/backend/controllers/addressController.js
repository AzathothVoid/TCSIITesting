import {Address} from '../model/addressSchema.js'


export const addAddress = async (req, res, next) => {

    const address = req.body;

    try {
        await Address.create(address)
        res.json({ message: "Adress has been Saved",  address })
    }
     catch (error) {
        next(error)
    }

}

export const deleteAddress = async (req, res) => {
    const { id } = req.params;

    await Address.findByIdAndDelete(id)

    res.json({ message: "Address has been Deleted" })
}

export const editAddress = async (req, res) => {
    const { id } = req.params;
    const address = req.body

    await Todo.findByIdAndUpdate(id, address)

    res.json({ message: "address has been Updated" })
}

export const getAddressbyId = async (req, res) => {

    const address = await Address.find()

    res.json({ address })
}