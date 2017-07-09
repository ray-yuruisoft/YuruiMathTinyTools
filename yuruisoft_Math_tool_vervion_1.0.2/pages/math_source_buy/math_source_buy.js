// pages/list/list.js  
var app = getApp();

var pageNum = 1; // 当前页数  
var searchTitle = ""; // 搜索关键字  
var msgListKey = ""; // 文章列表本地缓存key  

/**  
 * post 请求加载文章列表数据   
 * "page" ：页数  
 * "pageSize" ：每页数量  
 * "search_LIKE_title" ：以文章标题模糊查询 ，格式为 "search_LIKE_实体类属性"  
 */
var loadMsgData = function (that) {
  msgListKey = "msgList" + pageNum;


  // 获取上一页数据  
  var allMsg = that.data.msgList;
  app.ajax.req('/itdragon/findAll', {
    "page": pageNum,
    "pageSize": 6,
    "search_LIKE_title": searchTitle
  }, function (res) {
    // 拼接当前页数据，不能直接 allMsg.push(res);   
    for (var i = 0; i < res.length; i++) {
      allMsg.push(res[i]);
    }
    // 赋值并隐藏加载的icon  
    that.setData({
      msgList: allMsg,
    });

    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新

    // 缓存列表页面  
    wx.setStorageSync(msgListKey, allMsg);
  });
  // 页数加一  
  pageNum++;
}

Page({
  data: {
    msgList: [], // 存储文章列表信息  
    searchLogList: [], // 存储搜索历史记录信息   
    inputShowed: false, // 搜索输入框是否显示  
    inputVal: "", // 搜索的内容  
    searchLogShowed: false // 是否显示搜索历史记录  
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  

    var that = this;
    // 如果缓存中有值，先从缓存中读取  
    var info = wx.getStorageSync(msgListKey);
    if (info) {
      that.setData({
        msgList: info
      });
    } else {
      loadMsgData(that);
    }
  },
  onReady: function () {
    // 页面渲染完成  
  },
  onShow: function () {
    // 页面显示  
  },

  // 下拉刷新数据 
  onPullDownRefresh: function () {


    wx.showNavigationBarLoading() //在标题栏中显示加载

    var that = this;
    // 刷新的准备工作，想将页数设置为一，然后清空文章列表信息，定位在距顶部为0的地方  
    pageNum = 1;
    that.setData({
      msgList: []
    });
    // 加载数据  
    loadMsgData(that);
  },

  // 上拉加载数据   
  onReachBottom: function () {
    var that = this;
    loadMsgData(that);
  },


  // 显示搜索输入框和搜索历史记录  
  showInput: function () {
    var that = this;
    if ("" != wx.getStorageSync('searchLog')) {
      that.setData({
        inputShowed: true,
        searchLogShowed: true,
        searchLogList: wx.getStorageSync('searchLog')
      });
    } else {
      that.setData({
        inputShowed: true,
        searchLogShowed: true
      });
    }
  },

  // 显示搜索历史记录  
  searchLogShowed: function () {
    var that = this;
    if ("" != wx.getStorageSync('searchLog')) {
      that.setData({
        searchLogShowed: true,
        searchLogList: wx.getStorageSync('searchLog')
      });
    } else {
      that.setData({
        searchLogShowed: true
      });
    }
  },

  // 点击 搜索 按钮后 隐藏搜索记录，并加载数据  
  searchData: function () {
    var that = this;
    that.setData({
      msgList: [],
      searchLogShowed: false
    });
    pageNum = 1;
    loadMsgData(that);
    // 搜索后将搜索记录缓存到本地  
    if ("" != searchTitle) {
      var searchLogData = that.data.searchLogList;
      searchLogData.push(searchTitle);
      wx.setStorageSync('searchLog', searchLogData);
    }
  },

  // 点击叉叉icon 清除输入内容，同时清空关键字，并加载数据  
  clearInput: function () {
    var that = this;
    that.setData({
      msgList: [],
      inputVal: ""
    });
    searchTitle = "";
    pageNum = 1;
    loadMsgData(that);
  },

  // 输入内容时 把当前内容赋值给 查询的关键字，并显示搜索记录  
  inputTyping: function (e) {
    var that = this;
    // 如果不做这个if判断，会导致 searchLogList 的数据类型由 list 变为 字符串  
    if ("" != wx.getStorageSync('searchLog')) {
      that.setData({
        inputVal: e.detail.value,
        searchLogList: wx.getStorageSync('searchLog')
      });
    } else {
      that.setData({
        inputVal: e.detail.value,
        searchLogShowed: true
      });
    }
    searchTitle = e.detail.value;
  },

  // 通过搜索记录查询数据  
  searchDataByLog: function (e) {
    // 从view中获取值，在view标签中定义data-name(name自定义，比如view中是data-log="123" ; 那么e.target.dataset.log=123)  
    searchTitle = e.target.dataset.log;
    var that = this;
    that.setData({
      msgList: [],
      searchLogShowed: false,
      inputVal: searchTitle
    });
    pageNum = 1;
    loadMsgData(that);
  },
  // 清除搜索记录  
  clearSearchLog: function () {
    var that = this;
    wx.removeStorageSync("searchLog");
    that.setData({
      searchLogShowed: false,
      searchLogList: []
    });
  },
  onHide: function () {
    // 页面隐藏  
  },
  onUnload: function () {
    // 页面关闭  
  }
}) 