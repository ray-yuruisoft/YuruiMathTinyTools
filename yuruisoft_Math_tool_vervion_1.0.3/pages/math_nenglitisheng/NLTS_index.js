Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_nenglitisheng/NLTS_index'
    }
  },
  data:{
        life: [
                {
                  "title": "学习与实践",
                  "des": "25种心算大法，能助人在10秒内快速作答",
                  "img":"/images/NLTS_1.png",
                  "back_ground_color":"rgba(75,214,183,0.5)"
                },
                {
                  "title": "网络对战",
                  "des": "胜局积1分，负局扣1分，管理界面可查询总分",
                  "img":"/images/NLTS_2.png",
                  "back_ground_color":"rgba(143,202,255,0.5)"
                },
                {
                  "title": "2人游戏",
                  "des": "邀请朋友，面对面的较量吧！",
                  "img":"/images/NLTS_3.png",
                  "back_ground_color":"rgba(162,140,255,0.5)"
                }
              ]
  },
my_touchtap:function(e)
{
  if(e.currentTarget.id == '学习与实践')
  {
    wx.navigateTo({
      url: '/pages/math_nenglitisheng/xuexiyushiji/xuexiyushiji?id=1'
    })
  }
  else if(e.currentTarget.id == '网络对战')
  {
     wx.navigateTo({
      url: '/pages/math_nenglitisheng/xuexiyushiji/xuexiyushiji?id=2'
    })
  }
  else if(e.currentTarget.id == '2人游戏')
  {
    wx.navigateTo({
      url: '/pages/math_nenglitisheng/xuexiyushiji/xuexiyushiji?id=3',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
},
  onLoad:function(options){
    this.setData({
                user_info_local:getApp().globalData.user_info,
                isShowHap: getApp().globalData.isShowHap
              })
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