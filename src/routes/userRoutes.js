

const express = require('express')

const router = express.Router()

const userController = require('../controller/userController')

//Criando as rotas da API

//1º Rota para obter todos os usuarios

router.get('/', userController.getAllUsers)

//2º Rota para obter dados de usuarios por ID

// router.get('/:id', userController.getUserById)


//3º Rota para criar usuario

router.post('/', userController.createUser)

module.exports = router