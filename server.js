
//Importar modulo do express
const express = require('express')

//Importa as rotas de usuários
const userRoutes = require('./src/routes/userRoutes')

//Criar uma aplucação express
const app = express()

// Definir a porta em que o servidor ira escutar
const porta = 8000

//Definir a rota de teste da 
app.get('/',(req,res) => {
    res.send('API de Usuários está funcionando')
})

// Usando as rotas de usuário
app.use('/api/users' , userRoutes)

//Inicia o servidor
app.listen(porta, ()=>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})