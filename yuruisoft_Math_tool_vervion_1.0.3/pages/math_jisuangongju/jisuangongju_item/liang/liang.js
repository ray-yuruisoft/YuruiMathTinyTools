var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/liang/liang'
    }
  },
  data:{
_data:[
      {
        "titel":"升(l)",
        "input_data":null
      },
      {
        "titel":"立方米(m³)",
        "input_data":null
      },
      {
        "titel":"立方英寸(in³)",
        "input_data":null
      },
      {
        "titel":"立方英尺(ft³)",
        "input_data":null
      },
      {
        "titel":"立方码(yd³)",
        "input_data":null
      },
      {
        "titel":"加仑(美国)(gal)",
        "input_data":null
      },
      {
        "titel":"加仑(英国)(gal)",
        "input_data":null
      }
    ]
    },
user_input0:function(options) //升(l)
{
  if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = options.detail.value;
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[2].input_data = rpn.mul(options.detail.value,61.0237);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.0353147);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.00130795);
      this.data._data[5].input_data = rpn.mul(options.detail.value,0.264172);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.219969);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input1:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[1].input_data = options.detail.value;
      this.data._data[2].input_data = rpn.mul(options.detail.value,61023.7);
      this.data._data[3].input_data = rpn.mul(options.detail.value,35.3147);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1.30795);
      this.data._data[5].input_data = rpn.mul(options.detail.value,264.172);
      this.data._data[6].input_data = rpn.mul(options.detail.value,219.969);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input2:function(options)
{
 if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.016);
      this.data._data[1].input_data = rpn.mul(options.detail.value,1.6e-5);
      this.data._data[2].input_data = options.detail.value;
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.000565035);
      this.data._data[4].input_data = rpn.mul(options.detail.value,2.09272e-5);
      this.data._data[5].input_data = rpn.mul(options.detail.value,0.00422675);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.00351951);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,28.317);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.028317);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1728.01);
      this.data._data[3].input_data = options.detail.value;
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.0370372);
      this.data._data[5].input_data = rpn.mul(options.detail.value,7.48056);
      this.data._data[6].input_data = rpn.mul(options.detail.value,6.22887);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input4:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,764.555);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.764555);
      this.data._data[2].input_data = rpn.mul(options.detail.value,46656);
      this.data._data[3].input_data = rpn.mul(options.detail.value,27);
      this.data._data[4].input_data = options.detail.value;
      this.data._data[5].input_data = rpn.mul(options.detail.value,201.974);
      this.data._data[6].input_data = rpn.mul(options.detail.value,168.179);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input5:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,3.785);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.003785);
      this.data._data[2].input_data = rpn.mul(options.detail.value,230.975);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.133666);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.00495059);
      this.data._data[5].input_data = options.detail.value;
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.832584);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input6:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_liang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,4.546);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.004546);
      this.data._data[2].input_data = rpn.mul(options.detail.value,277.414);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.16054);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.00594594);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.20093);
      this.data._data[6].input_data = options.detail.value;
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