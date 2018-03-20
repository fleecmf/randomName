var mongoose = require('mongoose');

var userModel = require('../models/user');


var responseData={
  code:0,
  message:''
};

module.exports = {
  register: function(req, res, next) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    if(username==''){
      responseData.code=1;
      responseData.message="用户名为空";
      res.json(responseData);
      return;
    }
    //密码是否为空
    if(password==''){
      responseData.code=2;
      responseData.message="密码为空";
      res.json(responseData);
      return;
    }
    var newUser = new userModel({"username": username,"password": password,"createDate":new Date()});
    console.log(newUser);
    newUser.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log('成功插入数据');
      }
    });
    responseData.message="注册成功";
    res.json(responseData);
  },
  login: function () {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
  }
}