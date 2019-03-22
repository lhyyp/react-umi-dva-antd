const router = require('koa-router')();
const Member = require('../controller/c-member');

router.prefix('/member');
router.post('/login',Member.login);     //登录
router.get('/getMenuListByrole',Member.getMenuListByrole);     // 获取该角色下的列表


module.exports = router
