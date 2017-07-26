var app = getApp();
var time = require("../../../utils/current_time.js")
Page({
  data:{},
  onLoad:function(options){
    this.setData({
          user_info: getApp().globalData.user_info
        })
  },
  onReady:function(){
    this.setData({
      time : time.getNowFormatDate()
    })
var that= this;
wx.getStorage({
                        key: 'rd_session',
                        success: function(res) {

                          app.ajax.reqPOST('/Mathtool/ScoreQuery', {
                            "yuruisoft_session": res.data
                          }, function (res) {
                            if (!res) {
                              console.log("失败！")
                              return
                            }
                            that.setData({
                              score: res.score
                            })  
                          });
                        } 
                })
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