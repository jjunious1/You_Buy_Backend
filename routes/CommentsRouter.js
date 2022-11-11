const router = require('express').Router()
const controller = require('../controllers/CommentsControllers')
const middleware = require('../middleware')

router.get('/', controller.GetComments)
router.get('/:id', controller.GetCommentsById)
router.put('/:id', controller.UpdateComment)
router.post('/', controller.CreateComments)
router.delete('/:id', controller.DeleteComment)
module.exports = router
