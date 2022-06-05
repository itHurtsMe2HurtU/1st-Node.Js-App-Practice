const express = require('express')
require('dotenv').config()
const path = require('path')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

const Avinash = { name: 'Avinash Kumar', age: 28, gender: 'male', isOwner: true }
console.log('Avinash Logged-->', Avinash)

app.get('/avinash', (req, res) => {
    res.send(Avinash)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`.toUpperCase())
})