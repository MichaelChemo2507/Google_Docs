const express = require('express');
const router = express.Router();
module.exports = router;

const UsersController = require('../controllers/users')

router.get('/', [UsersController.getAllUsers], (req, res) => {
})
router.get('/:id', [UsersController.getById], (req, res) => {
})
router.post('/', [UsersController.addUser], (req, res) => {
})
