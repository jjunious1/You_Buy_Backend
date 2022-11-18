const { Comment, Products } = require('../models')

//Used to get all comments and be displayed in profile

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: Products, as: 'review', attributes: ['name', 'ownerId'] }
      ]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

//Used to create comments('message') on specific product page and send to seller
const CreateComments = async (req, res) => {
  try {
    let commentBody = {
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComments
}
