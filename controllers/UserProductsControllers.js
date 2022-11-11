const { UserProducts, Products, User } = require('../models')

const GetSales = async (req, res) => {
  try {
    const products = await Products.findAll({
      where: { ownerId: req.params.id },
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['name', 'email']
        }
      ]
    })
    res.send(products)
  } catch (error) {
    throw error
  }
}

const Sell = async (req, res) => {
  try {
    const { name, description, image, price } = req.body
    const products = await Products.create({
      name,
      description,
      image,
      price,
      ownerId: req.params.id
    })
    res.send(products)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSales,
  Sell
}
