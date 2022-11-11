const { UserProducts } = require('../models')

const GetSales = async (req, res) => {
  try {
    const products = await UserProducts.findAll({})
    res.send(products)
  } catch (error) {
    throw error
  }
}

// const GetWishList = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }

const Sell = async (req, res) => {
  try {
    const sellItem = await UserProducts.create({})
    res.send(sellItem)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSales,
  Sell
}
