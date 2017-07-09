var tc = require("../../../../utils/time_change.js")
Page({
  data:{
    fileList_Data : [],
    delete_list:[],
    checked_set:false,
  },
   my_local_data:{
    name_list:[]
   },
  onLoad:function(options){  
    var that = this ; 
    wx.getSavedFileList({
      success: function(res){
          var keys = [];
          var temp = res.fileList;
          wx.getStorage({
            key: 'colected_data',
            success: function(res){              
                      for( var i = 0 ; i < temp.length ; i ++)
                      {
                        temp[i].chang_time = tc.time_change(temp[i].createTime);
                        temp[i].box_checked = false;
                        for(var n = 0; n < res.data.length;n++)
                        {
                          if(res.data[n].savedFilePath == temp[i].filePath)
                          {
                            temp[i].url_name = res.data[n].name;
                          }
                        }
                      }
                      that.setData({
                        fileList_Data : temp
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
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })

  },
clear_all_showModal:function(){
    if(this.data.fileList_Data.length == 0)
    {
      return;
    }
    var that = this;
    wx.showModal({
    title: '警告',
    content: '将清空所有内容？',
    success: function(res) {
      if (!res.confirm) {
        return;
      }
      else{
        wx.setStorage({
          key: 'colected_data',
          data: [],
          success: function(res){
            getApp().globalData.user_storage_data = [];
            tc.clear_all_data(that);
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
delete_showModal :function(){
  if(this.data.delete_list.length == 0)
  {
    return;
  }
  var that = this;
  wx.showModal({
  title: '提示',
  content: '是否删除所选内容？',
  success: function(res) {
    if (!res.confirm) {
      return;
    }
    else{

      wx.getStorage({
        key: 'colected_data',
        success: function(res){
          tc.delete_data(that,res.data);   
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
  checkboxChange : function(e){
  var temp = e.detail.value;
  var input = this.data.fileList_Data;
  for(var k = 0 ; k < input.length ; k++)
  {
    input[k].box_checked = false ;
  }
  var count = input.length;
    for( var j = 0 ; j < temp.length ; j++)
    {
      for( var n = 0 ; n < input.length ; n++)
      {
        if(temp[j] == input[n].filePath)
        {
           input[n].box_checked = true;
        }
      }
    }
  this.setData({
    delete_list:e.detail.value,
    fileList_Data:input
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