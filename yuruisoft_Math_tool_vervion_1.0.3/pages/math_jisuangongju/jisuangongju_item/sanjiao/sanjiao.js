var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/sanjiao/sanjiao'
    }
  },
  data:{
    _h_value:null,
    _b_value:null,
    bian_a_value:null,
    bian_b_value:null,
    bian_c_value:null,
    error:false,
    result:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_2dtuxingjisuanqi_sanjiao.png"
  },
_h_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _h_value:e.detail.value,
              bian_a_value:null,
              bian_b_value:null,
              bian_c_value:null,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_h_value:e.detail.value});
  }
},
_b_value : function(e){
  if(e.detail.value!=null  && e.detail.value !='')
  {
    this.setData({
              _b_value:e.detail.value,
              bian_a_value:null,
              bian_b_value:null,
              bian_c_value:null,
              result:'',
              error:false
    })
  }
  else{
      this.setData({
              _b_value:e.detail.value
    })
  }
},
bian_a_value : function(e){
  if(e.detail.value!=null  && e.detail.value !='')
  {
    this.setData({
            bian_a_value:e.detail.value,
            _h_value:null,
            _b_value:null,
            result:'',
            error:false
    })
  }
  else{
     this.setData({
            bian_a_value:e.detail.value
    })
  }
},
bian_b_value : function(e){

 if(e.detail.value!=null  && e.detail.value !='')
 {
      this.setData({
            bian_b_value:e.detail.value,
            _h_value:null,
            _b_value:null,
            result:'',
            error:false
    })
 }
 else{
   this.setData({
            bian_b_value:e.detail.value
    })
 }
},
bian_c_value : function(e){
  if(e.detail.value!=null  && e.detail.value !='')
 {
     this.setData({
            bian_c_value:e.detail.value,
            _h_value:null,
            _b_value:null,
            result:'',
            error:false
     })
 }
 else{
    this.setData({
            bian_c_value:e.detail.value
     })
 }
},
click_jisuan: function(){

  if(this.data._h_value != null && this.data._h_value !='' && this.data._b_value != null && this.data._b_value != '')
  {                
    var _result =rpn.div(rpn.mul(Number(this.data._h_value),Number(this.data._b_value)),2);
      this.setData({
          result:_result,
          error:false
      })
  }
  else if(this.data.bian_a_value != null && this.data.bian_a_value != '' && this.data.bian_b_value != null &&this.data.bian_b_value != '' && this.data.bian_c_value !=null && this.data.bian_c_value !='')
  {
      var a = Number(this.data.bian_a_value),b = Number(this.data.bian_b_value),c = Number(this.data.bian_c_value) 
      var s = 1/2*(a+b+c);
      var _result = Math.sqrt(s*(s-a)*(s-b)*(s-c));
      console.log("_result"+Math.sqrt(s*(s-a)*(s-b)*(s-c)))
      if(isNaN(_result))
      {
         this.setData({
           error:true,
           result:"无效值"
           })
      }
      else{
        this.setData({
            result:_result,
        })
      }
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