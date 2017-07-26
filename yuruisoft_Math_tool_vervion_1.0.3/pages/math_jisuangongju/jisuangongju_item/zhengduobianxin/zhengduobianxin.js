Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/zhengduobianxin/zhengduobianxin'
    }
  },
data:{
    _N_value:null,
    _a_value:null,
    bian_N_value:null,
    _r_value:null,
    error:false,
    result:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_2dtuxingjisuanqi_zhengduobianxing.png"
  },
  _N_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _N_value:e.detail.value,
              bian_N_value:null,
              _r_value:null,
              result:'',
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
              bian_N_value:null,
              _r_value:null,
              result:'',
              error:false
    })
  }
  else{
      this.setData({
              _a_value:e.detail.value
    })
  }
},
bian_N_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              bian_N_value:e.detail.value,
              _N_value:null,
              _a_value:null,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({ban_r_value:e.detail.value});
  }
},
_r_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _r_value:e.detail.value,
              _N_value:null,
              _a_value:null,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_d_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._N_value != null && this.data._N_value !='' && this.data._a_value != null && this.data._a_value !=''   )
  {                
      var hudu = Math.PI/Number(this.data._N_value);
      var _result = Math.pow(Number(this.data._a_value),2)*Number(this.data._N_value)/(4*Math.tan(hudu)); 
      this.setData({
          result:_result,
          error:false
      })
  }
  else if(this.data.bian_N_value != null && this.data.bian_N_value !='' && this.data._r_value != null && this.data._r_value !='')
  {
    var _hudu = 2*Math.PI/Number(this.data.bian_N_value)
    var _result =  Math.pow(Number(this.data._r_value),2)*Number(this.data.bian_N_value)*Math.sin(_hudu)/2;
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