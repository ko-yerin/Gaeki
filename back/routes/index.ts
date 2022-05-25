var express = require('express');
var router = express.Router();
const SettingRouter = require('./setting/settingRouter');
const RankingRouter = require('./ranking/rankingRouter');
const infoRouter = require('./game/gameRouter');

// const gameRouter = require('./game/gameRouter');
// const marketRouter = require('./market/marketRouter');

router.use('/setting', SettingRouter);
router.use('/ranking', RankingRouter);
router.use('/info', infoRouter);
// router.use('/game');
// router.use('/market');

module.exports = router;
