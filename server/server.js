const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const heroRoutes = require('./routes/heroes')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__superhero_DB__')
console.log('fun message aslkdfkasdfkljhsadkfhsdf')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.get('/hello', (req, res) => {
  res.json({msg: 'hello'})
})

app.use('/', heroRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
