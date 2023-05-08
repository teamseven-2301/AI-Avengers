const router = require("express").Router();
const {
  models: { Setting },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const settings = await Setting.findAll();
    res.json(settings);
  } catch (err) {
    next(err);
  }
});

router.get("/:settingId", async (req, res, next) => {
  try {
    const setting = await Setting.findOne({
      where: {
        id: req.params.settingId,
      },
    });
    res.json(setting);
  } catch (err) {
    next(err);
  }
});
