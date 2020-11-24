const io = require('socket.io-client')

const socket = io.connect('http://localhost:8000')

socket.on('welcome', (data) => {
    console.log(data)
})