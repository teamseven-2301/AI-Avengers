const router = require('express').Router();
const {
  models: { Role },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const roles = await Role.findAll({
      include: {
        all: true,
      },
    });
    res.json(roles);
  } catch (err) {
    next(err);
  }
});

router.get('/:settingID', async (req, res, next) => {
  try {
    const roles1 = await Role.findAll({
      where: {
        settingId: req.params.settingID,
      },
      include: {
        all: true,
      },
    });
    res.json(roles1);
  } catch (err) {
    next(err);
  }
});
