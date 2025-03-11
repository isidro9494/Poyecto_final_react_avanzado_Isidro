
const express = require('express')
const userRouter = require('./src/routes/userRouter')
const listaDonuts = require('./src/routes/listaDonuts')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())


app.use('/user', userRouter)
app.use('/lista', listaDonuts)

const PORT = process.env.PORT  || 3000 

app.listen(PORT, () => {
    console.log(`Servidwden puerto: ${PORT}`);
    
})