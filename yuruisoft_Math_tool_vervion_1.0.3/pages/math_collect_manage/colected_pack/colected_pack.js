Page({
  data:{
    colected_image_Data:[]
  },
  onLoad:function(options){
    var that = this;
    wx.getStorage({
      key: 'colected_data',
      success: function(res){
        that.setData({
          colected_image_Data :res.data
        })
      }
    })
  },
my_longtap:function(e){
  var that = this;
  wx.showModal({
  title: '提示',
  content: '删除该公式吗？',
  success: function(res) {
    if (res.confirm) {
              wx.removeSavedFile({
                filePath: e.target.id,
                success: function(res){
                  var Temp = [];
                  for( var n =0 ;n< that.data.colected_image_Data.length ; n++)
                  {
                    if(that.data.colected_image_Data[n].savedFilePath != e.target.id)
                      Temp.push(that.data.colected_image_Data[n])
                  }
                  that.setData({
                    colected_image_Data:Temp
                  })
                  getApp().globalData.user_storage_data = Temp;
                  wx.setStorage({
                    key: 'colected_data',
                    data: Temp,
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
                fail: function(res) {
                  // fail
                },
                complete: function(res) {
                  // complete
                }
              })
    }
  }
  })
},
mytap:function(e){
  var curTime = e.timeStamp;
  var lastTime = this.data.lastTapDiffTime;
  if(lastTime > 0){
    if(curTime - lastTime < 300){
      var url_data =[];
      for(var n =0; n < this.data.colected_image_Data.length ;n++)
      {
        url_data.push(this.data.colected_image_Data[n].savedFilePath)
      }
      wx.previewImage({
        current:e.currentTarget.id,
        urls:url_data,
        success: function(res){
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }else{

    }
  }else{

  }
this.setData({lastTapDiffTime:curTime});
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