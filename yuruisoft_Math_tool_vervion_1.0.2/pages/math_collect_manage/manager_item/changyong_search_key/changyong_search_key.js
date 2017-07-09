Page({
  data:{},
  local:{},
  delete_input: function(e){
    this.local.delete_input=e.detail.value
  },
  insert_number :function(e){
    this.local.insert_number=e.detail.value
  },
  search_key :function(e){
    this.local.search_key = e.detail.value
  },
  delete_button : function(e){
    var changyong_search_key = this.data.changyong_search_key;
    if(this.local.delete_input != undefined)
      changyong_search_key.splice(this.local.delete_input,1);
    else
      changyong_search_key.splice(0,1);
    this.setData({
      changyong_search_key:changyong_search_key
    })
    getApp().globalData.changyong_Search_key = changyong_search_key;
  },
  confirm_button : function(e){
    if(this.local.search_key != undefined)
    {
      var changyong_search_key = this.data.changyong_search_key;
      if(this.local.insert_number != undefined)
      {
        changyong_search_key.splice(this.local.insert_number,0,this.local.search_key)
      }
      else
      {
        changyong_search_key.splice(0,0,this.local.search_key)
      }
      this.setData({
         changyong_search_key:changyong_search_key
        })
      getApp().globalData.changyong_Search_key = changyong_search_key;
    }
  },
  clear: function(){
    this.setData({
      changyong_search_key : []
    })
    getApp().globalData.changyong_Search_key = [];
  },
  save :function(){
    var that =this;
          wx.showToast({
          title: '保存中',
          icon: 'loading',
          duration: 10000
        })
    wx.setStorage({
      key: 'changyong_Search_key',
      data: that.data.changyong_search_key,
      success: function(res){
         wx.hideToast();
         wx.showToast({
          title: '保存成功',
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
  },
  onLoad:function(options){
    this.setData({
      changyong_search_key : getApp().globalData.changyong_Search_key
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