Page({
  data:{
    messages:[
       {
         title:"收藏夹",
         url:"/images/CM_sc.png",
         rightImage:"/images/tip.png"
       },
      {
        title:"我的排名",
        url:"/images/CM_changpion.png",
        rightImage:"/images/tip.png"
      },
      {
        title:"我的积分",
        url:"/images/CM_jf.png",
        rightImage:"/images/tip.png"
      },
      {
        title:"留言反馈",
        url:"/images/CM_liuyan.png",
        rightImage:"/images/tip.png"
      },
      {
        title:"联系我们",
        url:"/images/CM_contact.png",
        rightImage:"/images/tip.png"
      },
      {
        title:"赞助作者",
        url:"/images/CM_help.png",
        rightImage:"/images/tip.png"
      }
    ]


  },
  bindtap0:function(){
    wx.navigateTo({
      url: '/pages/math_collect_manage/colected_pack/colected_pack',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  bindtap2: function(){
    wx.navigateTo({
      url: '/pages/math_collect_manage/my_score/my_score',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },

  bindtap3 : function(){
      wx.navigateTo({
        url: '/pages/math_collect_manage/Feed_back/Feed_back',
        success: function(res){
          // success
        },
        fail: function(res) {
          // fail
        },
        complete: function(res) {
          // complete
        }
      })
  },
  bindtap4: function(){
        wx.navigateTo({
          url: '/pages/math_collect_manage/contact_us/contact_us',
          success: function(res){
            // success
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
   
  },
  bindtap5 : function(){
    wx.navigateTo({
      url: '/pages/math_collect_manage/wx_pay/wx_pay',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  manager_button:function(){
    wx.navigateTo({
      url:'/pages/math_collect_manage/manager_item/manager_item',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })


  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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