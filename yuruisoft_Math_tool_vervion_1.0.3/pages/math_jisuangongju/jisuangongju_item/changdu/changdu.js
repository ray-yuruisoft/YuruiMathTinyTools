var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/changdu/changdu'
    }
  },
  data:{
    changdu_data:[
      {
        "titel":"米(m)",
        "input_data":null
      },
      {
        "titel":"千米(km)",
        "input_data":null
      },
      {
        "titel":"厘米(cm)",
        "input_data":null
      },
      {
        "titel":"毫米(mm)",
        "input_data":null
      },
      {
        "titel":"微米(μm)",
        "input_data":null
      },
      {
        "titel":"纳米(nm)",
        "input_data":null
      },
      {
        "titel":"寸(in)",
        "input_data":null
      },
      {
        "titel":"英尺(ft)",
        "input_data":null
      },
      {
        "titel":"码(yd)",
        "input_data":null
      },
      {
        "titel":"英里(mi)",
        "input_data":null
      },
      {
        "titel":"海里(NM)",
        "input_data":null
      },
      {
        "titel":"光年",
        "input_data":null
      },
      {
        "titel":"埃(Å)",
        "input_data":null
      }
    ]
  },
user_input0:function(options)
{
  if(options.detail.value == "")
      rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = options.detail.value;
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,0.001);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,100);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,1000);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,1000000);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,1000000000);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,39.3701);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,3.28084);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,1.09361);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,0.000621371);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,0.000539957);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-16);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,1e+10);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input1:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,1000);
      this.data.changdu_data[1].input_data = options.detail.value;
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,100000);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,1000000);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,1000000000);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,1e12);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,39370.1);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,3280.84);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,1093.61);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,0.621371);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,0.539957);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-13);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,1e13);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input2:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,0.01);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,0.00001);
      this.data.changdu_data[2].input_data = options.detail.value;
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,10);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,10000);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,10000000);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,0.393701);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,0.0328084);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,0.0109361);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,6.21371e-6);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,5.39957e-6);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-18);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,100000000);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,0.001);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,0.000001);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,0.1);
      this.data.changdu_data[3].input_data = options.detail.value;
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,1000);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,1000000);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,0.0393701);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,0.00328084);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,0.00109361);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,6.21371e-7);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,5.39957e-7);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-19);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,10000000);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input4:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,0.001);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,0.000001);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,0.1);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,1000);
      this.data.changdu_data[4].input_data = options.detail.value;
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,1000000);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,0.0393701);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,0.00328084);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,0.00109361);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,6.21371e-7);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,5.39957e-7);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-19);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,10000000);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input5:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,1e-9);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,1e-12);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,1e-7);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,0.000001);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,0.001);
      this.data.changdu_data[5].input_data = options.detail.value;
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,3.93701e-8);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,3.28084e-9);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,1.09361e-9);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,6.21371e-13);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,5.39957e-13);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-25);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,10);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input6:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,0.0254);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,2.54e-5);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,2.54);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,25.4);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,25400);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,25400000);
      this.data.changdu_data[6].input_data = options.detail.value;
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,0.0833333);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,0.0277778);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,1.57828e-5);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,1.37149e-5);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,2.68478e-18);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,2.54e+8);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input7:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,0.3048);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,0.0003048);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,30.48);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,304.8);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,304800);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,304800000);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,12);
      this.data.changdu_data[7].input_data = options.detail.value;
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,0.333333);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,0.000189394);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,0.000164579);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,3.22174e-17);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,3.048e+9);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input8:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,0.9144);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,0.0009144);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,91.44);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,914.4);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,914400);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,914400000);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,36);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,3);
      this.data.changdu_data[8].input_data = options.detail.value;
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,0.000568182);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,0.000493737);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,9.66522e-17);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,9.144e+9);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input9:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,1609.34);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,1.60934);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,160934);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,1609344);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,160934400);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,1.60934e+12);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,63360);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,5280);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,1760);
      this.data.changdu_data[9].input_data = options.detail.value;
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,0.868976);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.70108e-13);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,1.60934e+13);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input10:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,1852);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,1.852);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,185200);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,1852000);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,1852000000);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,1.852e+12);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,72913.4);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,6076.12);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,2025.37);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,1.15078);
      this.data.changdu_data[10].input_data = options.detail.value;
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.95757e-13);
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,1.852e+13);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input11:function(options)
{
  if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,9.46073e+15);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,9.46073e+12);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,9.46073e+17);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,9.46073e+18);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,9.46073e+21);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,9.46073e+24);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,3.7247e+17);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,3.10391e+16);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,1.03464e+16);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,5.87863e+12);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,5.10839e+12);
      this.data.changdu_data[11].input_data = options.detail.value;
      this.data.changdu_data[12].input_data = rpn.mul(options.detail.value,9.46073e+25);
  }
    this.setData({
      changdu_data : this.data.changdu_data
    })
},
user_input12:function(options)
{
if(options.detail.value == "")
    rpn.set_null(this);
  else
  {
      this.data.changdu_data[0].input_data = rpn.mul(options.detail.value,1e-10);
      this.data.changdu_data[1].input_data = rpn.mul(options.detail.value,1e-13);
      this.data.changdu_data[2].input_data = rpn.mul(options.detail.value,1e-8);
      this.data.changdu_data[3].input_data = rpn.mul(options.detail.value,1e-7);
      this.data.changdu_data[4].input_data = rpn.mul(options.detail.value,0.0001);
      this.data.changdu_data[5].input_data = rpn.mul(options.detail.value,0.1);
      this.data.changdu_data[6].input_data = rpn.mul(options.detail.value,3.93701e-9);
      this.data.changdu_data[7].input_data = rpn.mul(options.detail.value,3.28084e-10);
      this.data.changdu_data[8].input_data = rpn.mul(options.detail.value,1.09361e-10);
      this.data.changdu_data[9].input_data = rpn.mul(options.detail.value,6.21371e-14);
      this.data.changdu_data[10].input_data = rpn.mul(options.detail.value,5.39957e-14);
      this.data.changdu_data[11].input_data = rpn.mul(options.detail.value,1.057e-26);
      this.data.changdu_data[12].input_data = options.detail.value;
  }
    this.setData({
      changdu_data : this.data.changdu_data
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