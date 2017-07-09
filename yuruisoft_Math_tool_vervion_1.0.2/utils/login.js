function  Login(code,encryptedData,iv,rawData,signature){  
          wx.showToast({
            title: '正在登录',
            icon: 'loading',
            duration: 10000
          });                 
          wx.request({
            url: getApp().data.servsers+"/user_login.ashx",
            data: {
              code:code,
              encryptedData:encryptedData,
              iv:iv,
              raw:rawData,
              signature:signature
            },
            method: 'GET', 
            header: {
              'content-type': 'application/json'
            }, 
            success: function (res) {
              wx.hideToast();
              wx.setStorage({
                key: 'rd_session',
                data: res.data.rd_session,
                success: function(res){
                },
                fail: function(res) {
                  // fail
                },
                complete: function(res) {
                  // complete
                }
              })
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
  }
  module.exports = {
    Login: Login
}