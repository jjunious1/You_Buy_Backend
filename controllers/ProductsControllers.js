const { Products, User, Comment } = require('../models')

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

const GetProductsById = async (req, res) => {
  try {
    let productId = parseInt(req.params.id)
    const comment = await Products.findByPk(productId, {
      include: [
        {
          model: Comment,
          as: 'review',
          attributes: ['name', 'description'],
          where: { id: productId }
        }
      ]
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

// const GetComments = async (req, res) => {
//   try {
//     let productId = parseInt(req.params.id)
//     let comments = await Products.findAll({
//       where: { id: productId },
//       include: [
//         { model: Comment, as: 'review', attributes: ['name', 'description'] }
//       ]
//     })
//     res.send(comments)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetProducts,
  GetProductsById
}
