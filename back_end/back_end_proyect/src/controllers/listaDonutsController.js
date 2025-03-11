const { getAllDonuts } = require("../services/listaDonuts")


exports.getAllDonutsController = async (req, res)=> {

    const resUserInfo = await getAllDonuts()

    res.status(200).send({donuts: resUserInfo})

}