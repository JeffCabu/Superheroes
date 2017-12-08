const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__superhero_DB__')
console.log('fun message aslkdfkasdfkljhsadkfhsdf')
console.log('fun message aslkdfkasdfkljhsadkfhsdf')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.get('/hello', (req, res) => {
  res.json({msg: 'hello'})
})

app.post('/api/heroes', (req, res) => {
  console.log('fun message aslkdfkasdfkljhsadkfhsdf')
  const {name, superPower, img, universe, nemesis} = req.body
  const newHero = {name, superPower, img, universe, nemesis}

  SuperHero(newHero).save((err, savedPost) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', data: savedPost })
    }
  })
})

app.get('/api/heroes', (req, res) => {
  SuperHero.find((err, superHeroes) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', superHeroes})
    }
  })
})

app.get('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({_id: heroId}, (err, hero) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({ msg: 'SUCCESS', hero })
    }
  })
})

app.delete('/api/heroes/:heroId', (req, res) => {
  const deleteHero = req.params.heroId
  SuperHero.remove({_id: deleteHero}, (err, hero) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', hero})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
