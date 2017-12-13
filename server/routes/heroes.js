const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')

Router.route('/api/heroes')
  .get((req, res) => {
    SuperHero.find((err, superHeroes) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', results: superHeroes})
      }
    })
  })

Router.route('/api/heroes')
  .post((req, res) => {
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

Router.route('/api/heroes/:heroId')
  .get((req, res) => {
    const heroId = req.params.heroId
    SuperHero.findById({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({ msg: 'SUCCESS', hero })
      }
    })
  })

Router.route('/api/heroes/:heroId')
  .delete((req, res) => {
    const deleteHero = req.params.heroId
    SuperHero.remove({_id: deleteHero}, (err, hero) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', hero})
      }
    })
  })

module.exports = Router
