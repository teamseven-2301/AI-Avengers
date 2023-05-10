const router = require('express').Router()
const { models: { Class }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const classes = await Class.findAll({
      include: {
        all: true
        },
    })
    res.json(classes)
  } catch (err) {
    next(err)
  }
})


router.get('/:settingID', async (req, res, next) => {
  try {
    // o: role?
    const classes1 = await Class.findAll({
      where: {
      settingId: req.params.settingID,
    },
      include: {
        all: true
        },
  }
)
    res.json(classes1)
  } catch (err) {
    next(err)
  }
})
