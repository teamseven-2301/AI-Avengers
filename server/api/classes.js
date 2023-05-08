const router = require('express').Router()
const { models: { Class }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const classes = await Class.findAll()
    res.json(classes)
  } catch (err) {
    next(err)
  }
})

router.get('/:classId', async (req, res, next) => {
  try {
    const chosenClass = await Class.findOne({
      where: {
      id: req.params.classId,
    }
  }
)
    res.json(chosenClass)
  } catch (err) {
    next(err)
  }
})
