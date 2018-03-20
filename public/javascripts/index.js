$(function () {
  var $username = $('#username');
  var $pwd = $('#password');

  $('#registerBtn').click(function () {
    $.ajax({
      type: 'post',
      url: '/users/toRegister',
      data: {
        username: $username.val(),
        password: $pwd.val()
      },
      dataType: 'json',
      success: function (res) {
        console.log(res);
      }
    })
  })
});