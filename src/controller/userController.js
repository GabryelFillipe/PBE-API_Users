
const userModel = require('../model/userModel')

//Controlador para listar todos os usuários
const getAllUsers = (req,res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

const getUserById = (req,res) => {
    
}

const createUser = (req,res) => {
    const {name,email} = req.body

    if(!name || !email){
        return res.status(400).json({message: "Nome e email são obrigatorios"})
    }
    const newUser = userModel.create({name, email})
    res.status(201).json(newUser)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}