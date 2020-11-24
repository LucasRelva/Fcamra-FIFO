module.exports =
    function(io) {

        io.sockets.on('connection', (socket) => {
            console.log('Um novo usuário se conectou: ' + socket.id)
            socket.emit('welcome', {title: 'Bem vindo', msg: 'Você se conectou com sucesso!'})
        })

    }


