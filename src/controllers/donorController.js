import donorService from "../services/donorService";


const createDonor = async(req, res, next)=>{
    const userBody = req.body;
    const result = await donorService.createDonor(userBody)
    res.status(200, json({
        success: true,
        result
    }))

}

export default donorControllers = {
    createDonor
}