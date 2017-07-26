Page({
  data:{
        messages:[
              {
                title:"公式-搜索历史-开关",
                rightImage:"/images/tip.png"
              },
              {
                title:"公式-常用搜索-开关",
                rightImage:"/images/tip.png"
              },
              {
                title:"标题-跑马灯-开关",
                rightImage:"/images/tip.png"
              },
              {
                title:"收藏图片-详细信息-管理",
                rightImage:"/images/tip.png"
              },
              {
                title:"公式-常用搜索-关键字-管理",
                rightImage:"/images/tip.png"
              },
              {
                title:"公式-搜索-关键字数量-管理",
                rightImage:"/images/tip.png"
              }
            ]
  },
  switch0 : function(e){
    if(e.detail.value == true)
    {
      getApp().globalData.isShowHis = true;
    }
    else
    {
      getApp().globalData.isShowHis = false;
    }

    wx.setStorage({
      key: 'isShowHis',
      data: getApp().globalData.isShowHis,
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
  switch1 : function(e){
    if(e.detail.value == true)
    {
      getApp().globalData.isShowKey = true;
    }
    else
    {
      getApp().globalData.isShowKey = false;

    }
    wx.setStorage({
      key: 'isShowKey',
      data: getApp().globalData.isShowHis,
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
  switch2 : function(e){
    if(e.detail.value == true)
    {
      getApp().globalData.isShowHap = true;
    }
    else
    {
      getApp().globalData.isShowHap = false;
    }
    wx.setStorage({
      key: 'isShowHap',
      data: getApp().globalData.isShowHap,
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
  bindtap3 : function(){
    wx.navigateTo({
      url: '/pages/math_collect_manage/manager_item/picture_list/picture_list',
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
  bindtap4 : function(){
    wx.navigateTo({
      url: '/pages/math_collect_manage/manager_item/changyong_search_key/changyong_search_key',
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
        url: '/pages/math_collect_manage/manager_item/save_picture/save_picture',
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
    var messages = this.data.messages;
    messages[0].checked = getApp().globalData.isShowHis
    messages[1].checked = getApp().globalData.isShowKey
    messages[2].checked = getApp().globalData.isShowHap
    this.setData({
      messages:messages
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