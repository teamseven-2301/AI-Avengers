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

//incase specific item is needed

// router.get('/:classId', async (req, res, next) => {
//   try {
//     const chosenClass = await Class.findOne({
//       where: {
//       id: req.params.classId,
//     },
//       include: {
//         all: true
//         },
//   }
// )
//     res.json(chosenClass)
//   } catch (err) {
//     next(err)
//   }
// })
