Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/xianxinfangcheng/xianxinfangcheng'
    }
  },
data:{
    _a1_value:null,
    _b1_value:null,
    _c1_value:null,   
    _a2_value:null,
    _b2_value:null,
    _c2_value:null,  
    error:false,
    result_1:'',
    result_2:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_fangchengqiujie_xianxinfangchengzhu.png"
  },
  _a1_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _a1_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_a1_value:e.detail.value});
  }
},
  _b1_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _b1_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_b1_value:e.detail.value});
  }
},
  _c1_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _c1_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_c1_value:e.detail.value});
  }
},
_a2_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _a2_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_a2_value:e.detail.value});
  }
},
  _b2_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _b2_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_b2_value:e.detail.value});
  }
},
  _c2_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _c2_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_c2_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._a1_value != null && this.data._a1_value !='' && this.data._b1_value != null && this.data._b1_value !='' && this.data._c1_value != null && this.data._c1_value !='' && this.data._a2_value != null && this.data._a2_value !='' && this.data._b2_value != null && this.data._b2_value !='' && this.data._c2_value != null && this.data._c2_value !='')
  {                
    var a1=Number(this.data._a1_value),a2=Number(this.data._a2_value),b1=Number(this.data._b1_value),b2=Number(this.data._b2_value),c1=Number(this.data._c1_value),c2=Number(this.data._c2_value);
    var _result_2 =(a1*c2-a2*c1)/(a1*b2-a2*b1);
    var _result_1 =(b1*c2-b2*c1)/(b1*a2-b2*a1);
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