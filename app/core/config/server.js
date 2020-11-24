const express = require ('express')
const routes =  require ('../guards/routes')

require('./dbconnection')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const socket = require('../components/socket')(io)

app.io = io

app.use(express.json())
app.use(routes)

server.listen(8000, () => {
    console.log('Servidor aberto na porta: 8000')
})