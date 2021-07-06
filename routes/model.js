const { Router } = require('express')
const {
    modelGet,
    modelPost,
    modelPut,
    modelPatch,
    modelDelete } = require('../controllers/model')

const router = Router();

router.get('/', modelGet)
router.post('/', modelPost)
router.put('/:id', modelPut)
router.delete('/:id', modelDelete)
router.patch('/:id', modelPatch)

module.exports = router;
