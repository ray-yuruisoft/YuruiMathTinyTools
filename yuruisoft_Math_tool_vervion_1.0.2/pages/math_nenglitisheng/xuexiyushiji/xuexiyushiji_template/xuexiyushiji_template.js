var app = getApp();
Page({
  data:{
     load_data:{
         "text_content":"",
         "gif_url":""
       },
       view_txt_show:1,
       view_daizhi_zuo_show:0,
       view_daizhi_you_show:0,
       view_gongshi_show:0,
       current_id:null,
       daizhi:'A',
  },
SJ_CZ:function(){
  wx.navigateTo({
    url: '/pages/math_nenglitisheng/2renyouxi/2renyouxi?NLTS_XXSJ_id='+this.data.current_id+'&NLTS_id=1',
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
},
daizhi:function(){
  if(this.data.daizhi == 'A')
    {
        this.setData({
          daizhi : 'B'
          })
    }
    else
    {
        this.setData({
          daizhi : 'A'
        })
    }
if(this.data.view_daizhi_zuo_show == 0 && this.data.view_daizhi_you_show == 0)
{
  this.setData({
    view_daizhi_zuo_show:1,
    view_daizhi_you_show:0,
    view_txt_show:0,
    view_gongshi_show:0
   })
}
else if(this.data.view_daizhi_zuo_show == 1 && this.data.view_daizhi_you_show == 0)
{
  this.setData({
    view_daizhi_zuo_show:0,
    view_daizhi_you_show:1,

    view_txt_show:0,
    view_gongshi_show:0
   })
}
else{
  this.setData({
    view_daizhi_zuo_show:1,
    view_daizhi_you_show:0,

    view_txt_show:0,
    view_gongshi_show:0
   })
}
},
gongshi:function(){
  if(this.data.view_gongshi_show != 1)
  {
    this.setData({
      view_daizhi_zuo_show:0,
      view_daizhi_you_show:0,
      view_txt_show:0,
      view_gongshi_show:1
    })
  }
},
wenzi:function(){
  if(this.data.view_txt_show != 1){
    this.setData({
      view_daizhi_zuo_show:0,
      view_daizhi_you_show:0,
      view_txt_show:1,
      view_gongshi_show:0
    })
  }
},
  onLoad:function(options){
    var that = this ;
      wx.getSystemInfo({
          success: function(res) {
            that.setData({
              windowHeight : res.windowHeight
            })
          }
      })  
   this.setData({
     current_id:options.id
   })
   var that = this ; 
    wx.showToast({
      title: '下载中',
      icon: 'loading',
      duration: 10000
    })


    app.ajax.reqPOST('/Mathtool/Abilitydeal', {
      "id": options.id
    }, function (res) {
      if (!res) {
        console.log("失败！")
        return
      }
      that.setData({
        txt_data: res.txt_data,
        url_gongshi: res.url_gongshi,
        url_daizhi_left: res.url_daizhi_left,
        url_daizhi_right: res.url_daizhi_right,
      })
      wx.hideToast();
    });


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