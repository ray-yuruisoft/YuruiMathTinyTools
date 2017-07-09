Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/zuiti/zuiti'
    }
  },
data:{
    _r_value:null,
    _h_value:null,
    error:false,
    result_1:'',
    result_2:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_3dtuxingjisuanqi_zhuiti.png"
  },
  _r_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _r_value:e.detail.value,
              result_1:'',
              result_2:'',
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
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_h_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._r_value != null && this.data._r_value !='' && this.data._h_value != null && this.data._h_value !='')
  {                
      var _result_1 = Math.PI*Math.pow(Number(this.data._r_value),2)*Number(this.data._h_value)/3; 
      var s = Math.sqrt(Math.pow(Number(this.data._r_value),2)+Math.pow(Number(this.data._h_value),2))
      var _result_2 = Math.PI*Number(this.data._r_value)*s;
      this.setData({
          result_1:_result_1,
          result_2:_result_2,
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