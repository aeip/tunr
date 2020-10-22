require('dotenv').config()
const express = require('express')
const {PORT} = process.env
const cors = require('cors')
const corsOptions = require('./config/cors')
const {NODE_ENV} = process.env
const morgan = require('morgan')
const app = express()


NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({hello: "Hello World!"})
})

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})