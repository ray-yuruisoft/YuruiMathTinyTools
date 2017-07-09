Page({
  data:{},
  _input : function(e){
      this.setData({
        number_input : e.detail.value
      })   
  },
  save : function(e){
    if(this.data.number_input == undefined)
    {
      wx.showToast({
          title: '输入为空',
          icon: 'success',
          duration: 1000
        })
    }
    else if( Number(this.data.number_input) > 10)
    {
      wx.showToast({
          title: '输入超出',
          icon: 'success',
          duration: 1000
        })
    }
    else
    {
      var that = this;
      wx.showToast({
          title: '保存中',
          icon: 'loading',
          duration: 10000
        })
        getApp().globalData.amount_remind_key = that.data.number_input;
        wx.setStorage({
          key: 'amount_remind_key',
          data: Number(that.data.number_input),
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
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      amount_remind_key : getApp().globalData.amount_remind_key
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