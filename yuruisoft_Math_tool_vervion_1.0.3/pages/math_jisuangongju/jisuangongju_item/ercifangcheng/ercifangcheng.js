Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/ercifangcheng/ercifangcheng'
    }
  },
data:{
    _a_value:null,
    _b_value:null,
    _c_value:null,   
    error:false,
    result_1:'',
    result_2:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_fangchengqiujie_ericifangcheng.png"
  },
  _a_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _a_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_a_value:e.detail.value});
  }
},
  _b_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _b_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_b_value:e.detail.value});
  }
},
  _c_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _c_value:e.detail.value,
              result_1:'',
              result_2:'',
              error:false
    })
  }
  else
  {
    this.setData({_c_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._a_value != null && this.data._a_value !='' && this.data._b_value != null && this.data._b_value !='' && this.data._c_value != null && this.data._c_value !='')
  {                
      var a = Number(this.data._a_value),b=Number(this.data._b_value),c=Number(this.data._c_value);
      var _result_1=(-b + Math.sqrt(Math.pow(b,2)-4*a*c))/2*a
      var _result_2=(-b - Math.sqrt(Math.pow(b,2)-4*a*c))/2*a
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