var __keysColor = [];
var __mindKeys = [];
function initColors(colors){
    __keysColor = colors;
}
function initMindKeys(keys){
    __mindKeys = keys;
}
function init(that, barHeight, keys, isShowKey, isShowHis, callBack) {
    var temData = {};
    var view = {
        barHeight: barHeight,
        isShow: false
    }
    if(typeof(isShowKey) == 'undefined'){
        view.isShowSearchKey = true;
    }else{
        view.isShowSearchKey = isShowKey;
    }
    if(typeof(isShowHis) == 'undefined'){
        view.isShowSearchHistory = true;
    }else{
        view.isShowSearchHistory = isShowHis;
    }
    temData.keys = keys;
    wx.getSystemInfo({
        success: function(res) {
            var wHeight = res.windowHeight;
            view.seachHeight = wHeight-barHeight+200;
            temData.view = view;
            that.setData({
                wxSearchData: temData,
            });
        }
    })
    if (typeof (callBack) == "function") {
        callBack();
    }
     getHisKeys(that);
}
function wxSearchInput(e, that, callBack){
    var temData = that.data.wxSearchData;
    var text = e.detail.value;
    var mindKeys = [];
    temData.value = text;
    temData.mindKeys = mindKeys;
    if(e.detail.cursor != 0)
    {
        var key_data_Temp = e.detail.value;
    }
wx.request({
  url: getApp().data.servsers+'/search_key.ashx',
  data: {search_key : key_data_Temp},
  method: 'GET', 
  success: function(res){
      if(res.data.Search_data.length == 1 && res.data.Search_data[0].key == '0')
      {
        return;
      }
      else
      {
        var Temp = null;
        if(res.data.Search_data.length <=getApp().globalData.amount_remind_key)
        {
            Temp = res.data.Search_data.length
        }
        else
        {
            Temp = getApp().globalData.amount_remind_key
        }
        for(var i = 0 ; i< Temp; i++)
        {
            temData.mindKeys.push(res.data.Search_data[i].key);
        }
        that.setData({
            wxSearchData:temData
            });
      }
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})
}
function wxSearchFocus(e, that, callBack) {
    var temData = that.data.wxSearchData;
    temData.view.isShow = true;
    temData.keys =  getApp().globalData.changyong_Search_key;
    temData.view.isShowSearchKey= getApp().globalData.isShowKey;
    temData.view.isShowSearchHistory= getApp().globalData.isShowHis;
    that.setData({
        wxSearchData: temData
    });
    if (typeof (callBack) == "function") {
        callBack();
    }
}
function wxSearchBlur(e, that, callBack) {
    var temData = that.data.wxSearchData;
    temData.value = e.detail.value;
    that.setData({
        wxSearchData: temData
    });
    if (typeof (callBack) == "function") {
        callBack();
    }
}
function wxSearchHiddenPancel(that){
    var temData = that.data.wxSearchData;
    temData.view.isShow = false;
    that.setData({
        wxSearchData: temData
    });
}
function wxSearchKeyTap(e, that, callBack) {
    var temData = that.data.wxSearchData;
    temData.value = e.target.dataset.key;
    that.setData({
        wxSearchData: temData
    });
    if (typeof (callBack) == "function") {
        callBack();
    }
}
function getHisKeys(that) {
    var value = [];
    try {
        value = wx.getStorageSync('wxSearchHisKeys')
        if (value) {
            var temData = that.data.wxSearchData;
            temData.his = value;
            that.setData({
                wxSearchData: temData
            });
        }
    } catch (e) {
    }
    
}
function wxSearchAddHisKey(that) {
    wxSearchHiddenPancel(that);
    var text = that.data.wxSearchData.value;
    if(typeof(text) == "undefined" || text.length == 0){return;}
    var value = wx.getStorageSync('wxSearchHisKeys');
    if(value){
        if(value.indexOf(text) < 0){
            value.unshift(text);
        }
        wx.setStorage({
            key:"wxSearchHisKeys",
            data:value,
            success: function(){
                getHisKeys(that);
            }
        })
    }else{
        value = [];
        value.push(text);
        wx.setStorage({
            key:"wxSearchHisKeys",
            data:value,
            success: function(){
                getHisKeys(that);
            }
        })
    }
 wx.navigateTo({
                  url:'/pages/math_index/formula/formula?name=Search_index&id='+that.data.wxSearchData.value
                });
}
function wxSearchDeleteKey(e,that) {
    var text = e.target.dataset.key;
    var value = wx.getStorageSync('wxSearchHisKeys');
    value.splice(value.indexOf(text),1);
    wx.setStorage({
        key:"wxSearchHisKeys",
        data:value,
        success: function(){
            getHisKeys(that);
        }
    })
}
function wxSearchDeleteAll(that){
    wx.removeStorage({
        key: 'wxSearchHisKeys',
        success: function(res) {
            var value = [];
            var temData = that.data.wxSearchData;
            temData.his = value;
            that.setData({
                wxSearchData: temData
            });
        } 
    })
}
module.exports = {
    init: init,
    initColor: initColors,
    initMindKeys: initMindKeys,
    wxSearchInput: wxSearchInput,
    wxSearchFocus: wxSearchFocus,
    wxSearchBlur: wxSearchBlur,
    wxSearchKeyTap: wxSearchKeyTap,
    wxSearchAddHisKey:wxSearchAddHisKey,
    wxSearchDeleteKey:wxSearchDeleteKey,
    wxSearchDeleteAll:wxSearchDeleteAll,
    wxSearchHiddenPancel:wxSearchHiddenPancel
}