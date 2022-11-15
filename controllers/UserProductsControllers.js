const { Products, Comment } = require('../models')

//returns all sale products on home page
const GetSales = async (req, res) => {
  try {
    const products = await Products.findAll({
      where: { ownerId: req.params.id },
      include: [
        {
          model: Comment,
          attributes: ['name', 'description']
        }
      ]
    })
    res.send(products)
  } catch (error) {
    throw error
  }
}

//allows you to see only your products for sell
const NewSell = async (req, res) => {
  try {
    const products = await Products.create(req.body)
    res.send(products)
  } catch (error) {
    throw error
  }
}

// allows you to update sale. Must pass entire information on front-end
const UpdateSale = async (req, res) => {
  try {
    const { saleId } = req.body
    const update = await Products.update(req.body, {
      where: { id: saleId },
      returning: true
    })
    res.send(update)
  } catch (error) {}
}
const DeleteSale = async (req, res) => {
  try {
    const { saleId } = req.body
    let item = await Products.findByPk(saleId)
    await Products.destroy({ where: { id: saleId } })
    res.send({
      message: `Your item for sale ${item.name} has successfully been deleted`
    })
  } catch (error) {}
}

module.exports = {
  GetSales,
  NewSell,
  UpdateSale,
  DeleteSale
}
