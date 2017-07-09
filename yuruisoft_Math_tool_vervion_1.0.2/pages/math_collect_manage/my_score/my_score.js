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
                             wx.request({
                               url: getApp().data.servsers +'/score_query.ashx',
                                data: {
                                    rd_session:res.data
                                },
                                method: 'GET', 
                                success: function(res){
                                    that.setData({
                                      score:res.data
                                    })                                
                                },
                                fail:function(res)
                                {

                                }                               
                                })
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