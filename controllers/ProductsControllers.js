const { Products, User } = require('../models')

const GetProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: [{ model: User, as: 'owner', attributes: ['name', 'email'] }]
    })
    res.send(products)
  } catch (error) {
    throw error
  }
}

const GetOneInProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.id)
    const comment = await Products.findOne({ where: { id: productId } })
    res.send(comment)
  } catch (error) {
    throw error
  }
}
// for building database
const createProduct = async (req, res) => {
  try {
    const newProducts = await Products.bulkCreate(req.body)
    res.send(newProducts)
  } catch (error) {
    throw error
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.body
    const product = await Products.update(req.body, {
      where: { id: id },
      returning: true
    })
    res.send(product)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProducts,
  GetOneInProduct,
  createProduct,
  updateProduct
}
