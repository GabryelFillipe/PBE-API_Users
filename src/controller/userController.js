
const userModel = require('../model/userModel')

//Controlador para listar todos os usuários
const getAllUsers = (req,res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

const getUserById = (req,res) => {
    
    //Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id)

    const user = userModel.findById(id)

    if(user){
        //Responder com o status code de 200 (Sucesso!) 
        //e devolver os dados do usuário em JSON
        res.status(200).json(user) 
    }else{
        res.status(404).json({mensagem: `Usuário ${id} não encontrado no banco de dados`})
    }
}

const getUserByName = (req,res) => {
    
    //Pegando o id que foi enviado na requisição
    const name = (req.params.name)

    const user = userModel.findByName(name)

    if(user){
        //Responder com o status code de 200 (Sucesso!) 
        //e devolver os dados do usuário em JSON
        res.status(200).json(user) 
    }else{
        res.status(404).json({mensagem: `Usuário ${name} não encontrado no banco de dados`})
    }
}

const createUser = (req,res) => {

    // Pegando os dados que veio do body da Requisição
    const {name,email} = req.body

    //Verificar se foram enviados
    if(!name || !email){
        return res.status(400).json({message: "Nome e email são obrigatorios"})
    }
    const newUser = userModel.create({name, email})
    res.status(201).json(newUser)
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    createUser
}