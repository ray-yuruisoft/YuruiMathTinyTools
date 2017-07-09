Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/shanxin/shanxin'
    }
  },
  data:{
    _r_value:null,
    _a_value:null,
    ban_r_value:null,
    _b_value:null,
    error:false,
    result_1:'',
    result_2:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_2dtuxingjisuanqi_sanxing.png"
  },
_r_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _r_value:e.detail.value,
              ban_r_value:null,
              _b_value:null,
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
_a_value : function(e){
  if(e.detail.value!=null  && e.detail.value !='')
  {
    this.setData({
              _a_value:e.detail.value,
              ban_r_value:null,
              _b_value:null,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else{
      this.setData({
              _a_value:e.detail.value
    })
  }
},
ban_r_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              ban_r_value:e.detail.value,
              _r_value:null,
              _a_value:null,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({ban_r_value:e.detail.value});
  }
},
_b_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _b_value:e.detail.value,
              _r_value:null,
              _a_value:null,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_d_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._r_value != null && this.data._r_value !='' && this.data._a_value != null && this.data._a_value !=''   )
  {                
      var _result_1 = 2*Math.PI*Number(this.data._r_value)*Number(this.data._a_value)/360;
      var _result_2 = Math.PI*Math.pow(Number(this.data._r_value),2)*Number(this.data._a_value)/360; 

      this.setData({
          result_1:_result_1,
          result_2:_result_2,
          error:false
      })
  }
  else if(this.data.ban_r_value != null && this.data.ban_r_value !='' && this.data._b_value != null && this.data._b_value !='')
  {
      var _result_1 = Math.PI*this.data._b_value/2;
      var _result_2 = this.data._b_value;
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