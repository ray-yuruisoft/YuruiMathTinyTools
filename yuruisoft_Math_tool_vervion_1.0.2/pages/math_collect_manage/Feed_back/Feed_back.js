var time = require("../../../utils/current_time.js")
Page({
  data:{
    Area_text :""
  },
  local:{},
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
  submit : function(){
    var that = this ;
    setTimeout(function(){
          if(that.local.Area_text == "" || that.local.Area_text == null)
        {    
          wx.showToast({
              title: '输入为空',
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
                wx.request({
                      url: getApp().data.servsers+"/Feed_back.ashx",
                      data: {
                        Feed_back_words : that.local.Area_text,
                        Nickname : getApp().globalData.user_info.nickName,
                        current_time : current_time_
                      },
                      method: 'GET', 
                      success: function(res){
                        wx.hideToast();
                        wx.showToast({
                            title: '提交成功，感谢您的意见！',
                            icon: 'success',
                            duration: 1000
                          })
                      },
                      fail: function(res) {
                        // fail
                      },
                      complete: function(res) {
                        // complete
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