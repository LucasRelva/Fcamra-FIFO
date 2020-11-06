const express = require ('express')
const routes =  require ('../guards/routes')

require('./dbconnection')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8000, () => {
    console.log('Servidor aberto na porta: 8000')
})