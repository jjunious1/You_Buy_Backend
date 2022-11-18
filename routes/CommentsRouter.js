const router = require('express').Router()
const controller = require('../controllers/CommentsControllers')

router.get('/', controller.GetComments)
// router.get('/:id', controller.GetCommentsById)
// router.put('/:id', controller.UpdateComment)
router.post('/:id', controller.CreateComments)
// router.delete('/:id', controller.DeleteComment)
module.exports = router
