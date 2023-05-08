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

router.get('/:settingId', async (req, res, next) => {
  try {
    let setting = await Setting.findOne({
      where: {
      id: req.params.settingId,
    }
  }
)
    res.send(setting)
  } catch (err) {
    next(err)
  }
})
