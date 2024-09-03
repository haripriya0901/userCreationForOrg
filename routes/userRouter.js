const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.getAllUsers);
router.post('/', userController.createUsers);
router.get('/:id',userController.getUserById);
router.delete('/:id',userController.deleteUser);

router.put('/:id',userController.updateUser);
router.patch('/:id',userController.updateUser);



module.exports=router;