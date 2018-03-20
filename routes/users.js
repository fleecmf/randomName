var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var User = require('../models/user');

//同一的返回格式
var responseData;

router.use(function(req,res,next){
  responseData={
    code:0,
    message:''
  };
  next();
});

/* GET users listing. */
/**
 * 注册
 * 注册用户
 */
router.post('/toRegister', userController.register);



module.exports = router;
