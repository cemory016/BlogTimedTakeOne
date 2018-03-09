const express = require('express')
const Creature = require ('../db/schema')
const router = express.Router({mergeParams: true})

router.get('/', (req, res)=> {
    Creature.find().then((creatures) => {
        res.jason(creatures)
    }).catch((err) => {
        console.log(err)
    })
})

outer.get('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      const creature = await Creature.findById(creatureId)
      res.json(creature)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
    finally {
        console.log("this is messed up")
    }
  })
  router.post('/', async (req, res) => {
    try {
      const newCreature = req.body
      const savedCreature = await Creature.create(newCreature)
      res.json(savedCreature)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })
  router.put('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      const updatedCreature = req.body
      const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
      res.json(savedCreature)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })
  router.delete('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      await Creature.findByIdAndRemove(creatureId)
      res.json({
        msg: 'Successfully Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })