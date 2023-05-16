const router = require("express").Router();
const {
  models: { Setting },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const settings = await Setting.findAll({
      include: {
        all: true
        },
    });
    res.json(settings);
  } catch (err) {
    next(err);
  }
});

// o: remove if not being used

//incase specific item is needed

// router.get("/:settingId", async (req, res, next) => {
//   try {
//     const setting = await Setting.findOne({
//       where: {
//         id: req.params.settingId,
//       },
//       include: {
//          all: true
//         }
//     });
//     res.json(setting);
//   } catch (err) {
//     next(err);
//   }
// });
