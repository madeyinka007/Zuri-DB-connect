/**
 * CRUD App with Database
 * Developed by @heisenberg on 07/05/2021
 */

const express = require('express')
require('dotenv').config()
const client = require('./database/connector')
//DB Connect
client.MongoDB();

//Initialize express
const app = express()

//Initialize middlewares
app.use(express.json())
app.use(require('./routes'))

app.listen(process.env.PORT, () => {
    console.log(`App is running on http://localhost:${process.env.PORT}`)
})


