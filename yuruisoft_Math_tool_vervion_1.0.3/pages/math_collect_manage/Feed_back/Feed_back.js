var app = getApp();
var time = require("../../../utils/current_time.js")
Page({
  data:{
    phoneNumisRight:true,
    QQisRight:true,
    EmailisRight:true,
    wordsNum:0
  },
  local:{},
  wordsControl:function(e)
  {
    this.setData({
      wordsNum: e.detail.value.length 
    })     
  },
  VphoneNum: function (e) {//正则验证手机号码

    if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(e.detail.value))) {
      this.setData({
        phoneNumisRight : false
      })
     }
     else
     {
      this.setData({
        phoneNumisRight: true
      })
      this.local.phoneNum = e.detail.value;
     }
  },
  VQQ: function (e) {//正则验证手机号码

    if (!(/[1-9][0-9]{4,}/.test(e.detail.value))) {
      this.setData({
        QQisRight: false
      })
    }
    else {
      this.setData({
        QQisRight: true
      })
      this.local.QQ = e.detail.value;
    }
    
  },
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
  bindTextAreaBlur :function(e){
    this.local.Area_text = e.detail.value;
  },
  clear : function(){
    this.setData({
      Area_text : ""
    })
  },
  confirm : function(){
    this.submit();
  },
  submit : function(){//提交表单
    var that = this ;
    setTimeout(function(){
      if (that.local.Area_text == "" || that.local.Area_text == null || !that.data.phoneNumisRight || !that.data.QQisRight || !that.data.EmailisRight)
        {    
          wx.showToast({
              title: '请正确输入',
              icon: 'success',
              duration: 1000
            })
          return;
        }
      if (that.data.wordsNum > 140)
      {
        wx.showToast({
          title: '你的输入已超出140字',
          icon: 'success',
          duration: 1000
        })
        return;
      }

        wx.showModal({
            title: '提示',
            content: '你确定要提交吗？',
            success: function(res) {
              if (res.confirm) {
                wx.showToast({
                  title: '提交中',
                  icon: 'loading',
                  duration: 10000
                })
                var current_time_ =  time.getNowFormatDate();
                

                wx.getStorage({
                  key: 'rd_session',
                  success: function(res) {

                    app.ajax.reqPOST('/Mathtool/FeedBackDeal', {
                      "Feed_back_words": that.local.Area_text,
                      "yuruisoft_session": res.data,
                      "phoneNum": that.local.phoneNum,
                      "QQ": that.local.QQ,
                      "Email": that.local.Email
                    }, function (res) {
                      if (!res) {
                        console.log("失败！")
                        return
                      }
                      if (res.updateDB)
                      {
                        wx.hideToast();
                        wx.showToast({
                          title: '提交成功，感谢您的意见！',
                          icon: 'success',
                          duration: 1000
                        }) 
                      }
                      else
                      {

                        return;
                      }
                                           
                    });
                  },
                  fail:function(res){
                    wx.showToast({
                      title: '用户判断有误',
                      icon: 'success',
                      duration: 1000
                    })
                    return;
                  }
                })

              }
              else
              {
                return;
              }
            }
          })
    },100)
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})