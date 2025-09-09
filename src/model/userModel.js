
//Simulação de um banco de dados em memória
let users = [
    {
        id: 1,
        name: 'Alice',
        email: 'alice@gmail.com'
    },
    {
        id: 2,
        name: 'Sadraque',
        email: 'sadraque@gmail.com'
    },
    {
        id: 3,
        name: 'Josisvaldo',
        email: 'josisvaldo@gmail.com'
    }
]

//Função para buscar todos os usuários
const findAll = () =>{
    return users
}

//Função busacar um usuário por 
const findById = (id) =>{
    return users.find(user => user.id === id)
}

const findByName = (name) => {
    return users.find(user => user.name === name)
}

//Função que adiciona um novo usuário
const create = (newUser) =>{
    const newId = users.length > 0 ? users[users.length -1].id +1 : 1
    const userWithId = {
        id: newId,
        ...newUser
    }
    users.push(userWithId)
    return userWithId
}

//Exportar as funções
module.exports = {
    findAll,
    findById,
    findByName,
    create
}
