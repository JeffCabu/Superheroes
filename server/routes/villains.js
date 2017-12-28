const express = require('express')
const Router = express.Router()
const Villains = require('../models/Villains')
const Comment = require('../models/Comment')

Router.route('/api/villains')
  .get((req, res) => {
    Villains.find()
      .populate('nemesis')
      .populate('comments')
      .exec((err, villains) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'SUCCESS', villains})
        }
      })
  })

Router.route('/api/villains')
  .post((req, res) => {
    const {name, img, universe, nemesis} = req.body
    const newVillain = {name, img, universe, nemesis}
    Villains(newVillain).save((err, savedPost) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedPost })
      }
    })
  })

Router.route('/api/villains/:villainId/comments')
  .post((req, res) => {
    const {text} = req.body
    const newComment = {text}

    Comment(newComment).save((err, savedComment) => {
      if (err) {
        res.json({ error: err })
      } else {
        Villains.findById({_id: req.params.villainId}, (err, villain) => {
          if (err) {
            res.json({error: err})
          } else {
            villain.comments.push(savedComment._id)
            villain.save((err, updatedVillain) => {
              if (err) {
                res.json({error: err})
              } else {
                res.json({msg: 'Successfully updated Villain', data: updatedVillain})
              }
            })
          }
        })
      }
    })
  })

Router.route('/api/villains/:villainId')
  .get((req, res) => {
    const villainId = req.params.villainId
    Villains.findById({_id: villainId})
      .populate('nemesis')
      .populate('comments')
      .exec((err, villain) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({ msg: `Found: ${villainId}`, villain })
        }
      })
  })

Router.route('/api/villains/:villainId')
  .delete((req, res) => {
    const deleteVillain = req.params.villainId
    Villains.remove({_id: deleteVillain}, (err, villain) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Successfully Deleted: ${villain}`})
      }
    })
  })

Router.route('/api/villains/:villainId')
  .put((req, res) => {
    const editVillainId = req.params.villainId
    Villains.findById({_id: editVillainId}, (err, villain) => {
      if (err) {
        console.log('ERROR retrieving ', err)
        res.json({error: err})
      } else {
        villain.name = req.body.name ? req.body.name : villain.name
        villain.img = req.body.img ? req.body.img : villain.img
        villain.universe = req.body.universe ? req.body.universe : villain.universe
        villain.nemesis = req.body.nemesis ? req.body.nemesis : villain.nemesis

        villain.save((err, updatedVillain) => {
          if (err) {
            console.log('Error saving villain')
            res.json({error: err})
          } else {
            res.json({msg: 'Successfully updtated', villain: updatedVillain})
          }
        })
      }
    })
  })
module.exports = Router
