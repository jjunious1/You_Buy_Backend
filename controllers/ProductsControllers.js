const { Products } = require('../models')

const GetProducts = async (req, res) => {
  try {
    const products = await Products.findAll({})
    res.send(products)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProducts
}
