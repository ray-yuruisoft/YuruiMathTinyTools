Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/jinzita/jinzita'
    }
  },
data:{
    _D_value:null,
    _h_value:null,
    error:false,
    result:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_3dtuxingjisuanqi_jinzita.png"
  },
  _D_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _D_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_r_value:e.detail.value});
  }
},
  _h_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _h_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_h_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._D_value != null && this.data._D_value !='' && this.data._h_value != null && this.data._h_value !='')
  {                
      var _result = Number(this.data._D_value)*Number(this.data._h_value)/3;
      this.setData({
          result:_result,
          error:false
      })
  }
  else 
  {
       this.setData({
        error:true
      })
  }
},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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