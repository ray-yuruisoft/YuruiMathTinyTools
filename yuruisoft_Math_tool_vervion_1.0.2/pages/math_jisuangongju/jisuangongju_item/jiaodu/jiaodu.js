var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/jiaodu/jiaodu'
    }
  },
data:{
_data:[
      {
        "titel":"度(°)",
        "input_data":null
      },
      {
        "titel":"弧度(rad)",
        "input_data":null
      },
      {
        "titel":"π弧度(πrad)",
        "input_data":null
      },
      {
        "titel":"秒",
        "input_data":null
      }
      ,
      {
        "titel":"分(′)",
        "input_data":null
      }
    ]
    },
    user_input0:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,5);
  else
  {
      this.data._data[0].input_data = options.detail.value;
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.0174533);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.00555556);
      this.data._data[3].input_data = rpn.mul(options.detail.value,3600);
      this.data._data[4].input_data = rpn.mul(options.detail.value,60);
  }
    this.setData({
      _data : this.data._data
    })
},

user_input1:function(options)
{
 if(options.detail.value == "")
      rpn.set_null_(this,5);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,57.2958);
      this.data._data[1].input_data = options.detail.value;
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.31831);
      this.data._data[3].input_data = rpn.mul(options.detail.value,206265);
      this.data._data[4].input_data = rpn.mul(options.detail.value,3437.75);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input2:function(options)
{
 if(options.detail.value == "")
      rpn.set_null_(this,5);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,180);
      this.data._data[1].input_data = rpn.mul(options.detail.value,3.14159);
      this.data._data[2].input_data = options.detail.value;
      this.data._data[3].input_data = rpn.mul(options.detail.value,648000);
      this.data._data[4].input_data = rpn.mul(options.detail.value,10800);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,5);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.000278);
      this.data._data[1].input_data = rpn.mul(options.detail.value,4.85202e-6);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1.54444e-6);
      this.data._data[3].input_data = options.detail.value;
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.01668);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input4:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,5);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.016667);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.000290894);
      this.data._data[2].input_data = rpn.mul(options.detail.value,9.25944e-5);
      this.data._data[3].input_data = rpn.mul(options.detail.value,60);
      this.data._data[4].input_data = options.detail.value;
  }
    this.setData({
      _data : this.data._data
    })
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