// pages/detail/detail.js
var app = getApp();
Page({
  data: {
    msgDetail: {},
    hidden: true,
    EmailisRight: true
  },
  local: {},
  VEmail: function (e) {//正则验证Email
    if (!(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(e.detail.value))) {
      this.setData({
        EmailisRight: false
      })
    }
    else {
      this.setData({
        EmailisRight: true
      })
      this.local.Email = e.detail.value;
    }
  },
  ConfirmPay: function (e) {//确认支付

    if (this.data.EmailisRight && this.local.Email) {
      var that = this;
      wx.getStorage({
        key: 'rd_session',
        success: function (res) {

          app.ajax.reqPOST('/Mathtool/SourceBuyPay', {
            "yuruisoft_session": res.data,
            "id": that.data.msgDetail.id,
            "Email": that.local.Email
          }, function (res) {
            if (!res) {
              console.log("失败！")
              return
            }
            wx.requestPayment({
              timeStamp: res.timeStamp,
              nonceStr: res.nonceStr,
              package: res.package,
              signType: 'MD5',
              paySign: res.paySign,
              success: function (res) {
                // success
                console.log(res);
                if (res.errMsg == 'requestPayment:ok')//回调成功以后发起发送邮件的请求
                {
                  app.ajax.reqPOST('/Mathtool/SourceBuySendEmail', {
                    "id": that.data.msgDetail.id
                  }, function (res) {
                    if (!res) {
                      console.log("失败！")
                      return
                    }
                    console.log("成功！");
                  })
                }
              },
              fail: function (res) {
                // fail
                console.log(res);
              },
              complete: function (res) {
                // complete
              }
            });
          }
          )
        },
        fail: function (res) {

        },
        complete: function (res) {
          // complete
        }
      })
    }
  },

  TestEmail: function (e) {//测试邮件能否顺利到达用户处
    if (this.data.EmailisRight && this.local.Email) {
      var that = this;
      wx.getStorage({
        key: 'EmailTest',
        success: function (res) {
          if (res.data == true) {
            wx.showToast({
              title: '测试邮件不能重复发送',
              icon: 'success',
              duration: 1000,
            })
          }
        },
        fail: function () {

          app.ajax.reqPOST('/Mathtool/SourceBuyTestEmail', {
            "Email": that.local.Email
          }, function (res) {
            if (!res) {
              console.log("失败！")
              return
            }
            wx.showToast({
              title: '邮件已发送，请到邮箱接收',
              icon: 'success',
              duration: 1000,
            })
            wx.setStorage({
              key: 'EmailTest',
              data: true
            })
          }
          )
        }
      })
    }
    else{
      wx.showToast({
        title: '邮件输入不正确！',
        icon: 'success',
        duration: 1000,
      })
    }
  },
  onLoad: function (options) {
    var that = this;
    var msgDetailKey = "msgDetail" + options.id;
    that.setData({
      hidden: false
    });
    var info = wx.getStorageSync(msgDetailKey);
    if (info) {
      that.setData({
        msgDetail: info,
        hidden: true
      });
    } else {
      app.ajax.reqPOST('/Mathtool/SourceBuyFindOne', {
        id: options.id
      }, function (res) {
        that.setData({
          msgDetail: res,
          hidden: true
        });
        wx.setStorageSync(msgDetailKey, res);
      });
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})