var WxSearch = require(getApp().data.require_message_data)//搜索栏组件引入
Page({
   onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_index/math_index'
    }
  },
  data:{
     search_key:[],
     messages:[//菜单
       {
         title:"几何",
         url:"/images/Index_png_Path/jihe.png",//TODO:这里可以扩展为服务器请求地址
         rightImage:"/images/tip.png"
       },
      {
        title:"代数",
        url:"/images/Index_png_Path/daishu.png",
        rightImage:"/images/tip.png"
      },
      {
        title:"三角学",
        url:"/images/Index_png_Path/sanjiaoxue.png",
        rightImage:"/images/tip.png"
        },
      {
        title:"方程",
        url:"/images/Index_png_Path/fangcheng.png",
        rightImage:"/images/tip.png"
      },
      {
        title:"解析几何",
        url:"/images/Index_png_Path/jiexijihe.png",
        rightImage:"/images/tip.png"
         },
      {
        title:"导数",
        url:"/images/Index_png_Path/daoshu.png",
        rightImage:"/images/tip.png"
        },
      {
        title:"积分",
        url:"/images/Index_png_Path/jifeng.png",
        rightImage:"/images/tip.png"
        },
      {
        title:"矩阵",
        url:"/images/Index_png_Path/juzheng.png",
        rightImage:"/images/tip.png"
        },
      {
        title:"概率和统计学",
        url:"/images/Index_png_Path/gailvhetongjixue.png",
        rightImage:"/images/tip.png"
        }
    ]
  },

  //搜索栏逻辑
wxSearchFn: function(e){
    var that = this
    WxSearch.wxSearchAddHisKey(that);
  },
  wxSearchInput: function(e){
    var that = this
    WxSearch.wxSearchInput(e,that);
  },
  wxSerchFocus: function(e){
    var that = this
    WxSearch.wxSearchFocus(e,that);
  },
  wxSearchBlur: function(e){
    var that = this
    WxSearch.wxSearchBlur(e,that);
  },
  wxSearchKeyTap:function(e){
    var that = this
    WxSearch.wxSearchKeyTap(e,that);
  },
  wxSearchDeleteKey: function(e){
    var that = this
    WxSearch.wxSearchDeleteKey(e,that);
  },
  wxSearchDeleteAll: function(e){
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function(e){
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  bindtap0:function(){
        wx.navigateTo({
                  url:"/pages/math_index/formula/formula?id=几何"
                });
  },
  bindtap1:function(){
          wx.navigateTo({
            url:"/pages/math_index/formula/formula?id=代数"
                  })
  },
  bindtap2:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=三角学"
                })
  },
  bindtap3:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=方程"
                })
  },
  bindtap4:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=解析几何"
                })
  },
  bindtap5:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=导数"
                })
  },
  bindtap6:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=积分"
                })
  },
  bindtap7:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=矩阵"
                })
  },
  bindtap8:function(){
        wx.navigateTo({
          url:"/pages/math_index/formula/formula?id=概率和统计学"
                })
  },
  onLoad:function(options){
    var that = this;
    this.setData({
      isShowHap: getApp().globalData.isShowHap
    })
    wx.getUserInfo({
            success: function(res){
                getApp().globalData.user_info = res.userInfo
                that.setData({
                user_info_local:getApp().globalData.user_info
              })
            }
          })
    WxSearch.init(that,63,getApp().globalData.changyong_Search_key,getApp().globalData.isShowKey,getApp().globalData.isShowHis);

//TODO:这里有个扩展位置，是留给首页图标请求的，可以节省小程序空间，代码已放入变更文件内
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