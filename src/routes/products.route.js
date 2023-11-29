const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', function (req, res) {
    res.send('Hola Mundo');
});
/*router.post('/', productsController.create);
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.patch('/:id', productsController.update);
router.delete('/:id', productsController.delete);*/

module.exports = router;