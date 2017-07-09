Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/sangedingdiandesanjiaoqu/sangedingdiandesanjiaoqu'
    }
  },
data:{
    _x1_value:null,
    _y1_value:null,
    _x2_value:null,   
    _y2_value:null,
    _x3_value:null,
    _y3_value:null,  
    error:false,
    result:'',
    images_url:getApp().data.servsers+"/images/jisuangongju/2dtuxingjisuanqi/jisuangongju_jiexijihe_sangedingdiandesanjiaoqu.png"
  },
  _x1_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _x1_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_x1_value:e.detail.value});
  }
},
  _y1_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _y1_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_y1_value:e.detail.value});
  }
},
  _x2_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _x2_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_x2_value:e.detail.value});
  }
},

_y2_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _y2_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_y2_value:e.detail.value});
  }
},
  _x3_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _x3_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_x3_value:e.detail.value});
  }
},
  _y3_value : function(e){
  if(e.detail.value != null && e.detail.value !='')
  {
    this.setData({
              _y3_value:e.detail.value,
              result:'',
              error:false
    })
  }
  else
  {
    this.setData({_y3_value:e.detail.value});
  }
},
click_jisuan: function(){
  if(this.data._x1_value != null && this.data._x1_value !='' && this.data._y1_value != null && this.data._y1_value !='' && this.data._x2_value != null && this.data._x2_value !='' && this.data._y2_value != null && this.data._y2_value !='' && this.data._x3_value != null && this.data._x3_value !='' && this.data._y3_value != null && this.data._y3_value !='')
  {                
    var x1=Number(this.data._x1_value),y1=Number(this.data._y1_value),x2=Number(this.data._x2_value),y2=Number(this.data._y2_value),x3=Number(this.data._x3_value),y3=Number(this.data._y3_value);

    var _result =  Math.abs(1/2*(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))) ;
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