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

const GetCommentsInProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.id)
    const comment = await Products.findOne({ where: { ownerId: productId } })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProducts,
  GetCommentsInProduct
}
