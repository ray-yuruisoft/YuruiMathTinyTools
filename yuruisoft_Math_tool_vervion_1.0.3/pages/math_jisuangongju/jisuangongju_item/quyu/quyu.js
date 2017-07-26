var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/quyu/quyu'
    }
  },
data:{
    _data:[
      {
        "titel":"平方千米(km²)",
        "input_data":null
      },
      {
        "titel":"公顷(ha)",
        "input_data":null
      },
      {
        "titel":"英亩",
        "input_data":null
      },
      {
        "titel":"平方米(m²)",
        "input_data":null
      },
      {
        "titel":"平方厘米(cm²)",
        "input_data":null
      },
      {
        "titel":"平方毫米(mm²)",
        "input_data":null
      },
      {
        "titel":"平方英里(mi²)",
        "input_data":null
      },
      {
        "titel":"平方码(yd²)",
        "input_data":null
      },
      {
        "titel":"平方尺(ft²)",
        "input_data":null
      },
      {
        "titel":"平方英寸(in²)",
        "input_data":null
      }
    ]
  },
user_input0:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = options.detail.value;
      this.data._data[1].input_data = rpn.mul(options.detail.value,100);
      this.data._data[2].input_data = rpn.mul(options.detail.value,247.105);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1000000);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1e+10);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1e+12);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.386102);
      this.data._data[7].input_data = rpn.mul(options.detail.value,1.19599e+6);
      this.data._data[8].input_data = rpn.mul(options.detail.value,1.07639e+7);
      this.data._data[9].input_data = rpn.mul(options.detail.value,1.55e+9);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input1:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.01);
      this.data._data[1].input_data = options.detail.value;
      this.data._data[2].input_data = rpn.mul(options.detail.value,2.47105);
      this.data._data[3].input_data = rpn.mul(options.detail.value,10000);
      this.data._data[4].input_data = rpn.mul(options.detail.value,100000000);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1e+10);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.00386102);
      this.data._data[7].input_data = rpn.mul(options.detail.value,11959.9);
      this.data._data[8].input_data = rpn.mul(options.detail.value,107639);
      this.data._data[9].input_data = rpn.mul(options.detail.value,1.55e+7);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input2:function(options)
{
 if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.00404686);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.404686);
      this.data._data[2].input_data = options.detail.value;
      this.data._data[3].input_data = rpn.mul(options.detail.value,4046.86);
      this.data._data[4].input_data = rpn.mul(options.detail.value,4.04686e+7);
      this.data._data[5].input_data = rpn.mul(options.detail.value,4.04686e+9);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.0015625);
      this.data._data[7].input_data = rpn.mul(options.detail.value,4840);
      this.data._data[8].input_data = rpn.mul(options.detail.value,43560);
      this.data._data[9].input_data = rpn.mul(options.detail.value,6.27264e+6);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.000001);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.0001);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.000247105);
      this.data._data[3].input_data = options.detail.value;
      this.data._data[4].input_data = rpn.mul(options.detail.value,10000);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1000000);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.86102e-7);
      this.data._data[7].input_data = rpn.mul(options.detail.value,1.19599);
      this.data._data[8].input_data = rpn.mul(options.detail.value,10.7639);
      this.data._data[9].input_data = rpn.mul(options.detail.value,1550);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input4:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.0000000001);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.00000001);
      this.data._data[2].input_data = rpn.mul(options.detail.value,2.47105e-8);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.0001);
      this.data._data[4].input_data = options.detail.value;
      this.data._data[5].input_data = rpn.mul(options.detail.value,100);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.86102e-11);
      this.data._data[7].input_data = rpn.mul(options.detail.value,0.000119599);
      this.data._data[8].input_data = rpn.mul(options.detail.value,0.00107639);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.155);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input5:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1e-12);
      this.data._data[1].input_data = rpn.mul(options.detail.value,1e-10);
      this.data._data[2].input_data = rpn.mul(options.detail.value,2.47105e-10);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.000001);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.01);
      this.data._data[5].input_data = options.detail.value;
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.86102e-13);
      this.data._data[7].input_data = rpn.mul(options.detail.value,1.19599e-6);
      this.data._data[8].input_data = rpn.mul(options.detail.value,1.07639e-5);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.00155);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input6:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,2.58999);
      this.data._data[1].input_data = rpn.mul(options.detail.value,258.999);
      this.data._data[2].input_data = rpn.mul(options.detail.value,640);
      this.data._data[3].input_data = rpn.mul(options.detail.value,2.58999e+6);
      this.data._data[4].input_data = rpn.mul(options.detail.value,2.58999e+10);
      this.data._data[5].input_data = rpn.mul(options.detail.value,2.58999e+12);
      this.data._data[6].input_data = options.detail.value;
      this.data._data[7].input_data = rpn.mul(options.detail.value,3097600);
      this.data._data[8].input_data = rpn.mul(options.detail.value,27878400);
      this.data._data[9].input_data = rpn.mul(options.detail.value,4.01449e+9);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input7:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,8.36127e-7);
      this.data._data[1].input_data = rpn.mul(options.detail.value,8.36127e-5);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.000206611);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.836127);
      this.data._data[4].input_data = rpn.mul(options.detail.value,8361.27);
      this.data._data[5].input_data = rpn.mul(options.detail.value,836127);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.2283e-7);
      this.data._data[7].input_data = options.detail.value;
      this.data._data[8].input_data = rpn.mul(options.detail.value,9);
      this.data._data[9].input_data = rpn.mul(options.detail.value,1296);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input8:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,9.2903e-8);
      this.data._data[1].input_data = rpn.mul(options.detail.value,9.2903e-6);
      this.data._data[2].input_data = rpn.mul(options.detail.value,2.29568e-5);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.092903);
      this.data._data[4].input_data = rpn.mul(options.detail.value,929.03);
      this.data._data[5].input_data = rpn.mul(options.detail.value,92903);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.587e-8);
      this.data._data[7].input_data = rpn.mul(options.detail.value,0.111111);
      this.data._data[8].input_data = options.detail.value;
      this.data._data[9].input_data = rpn.mul(options.detail.value,144);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input9:function(options)
{
  if(options.detail.value == "")
    rpn.set_null_quyu(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,6.45e-10);
      this.data._data[1].input_data = rpn.mul(options.detail.value,6.45e-8);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1.59383e-7);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.000645);
      this.data._data[4].input_data = rpn.mul(options.detail.value,6.45);
      this.data._data[5].input_data = rpn.mul(options.detail.value,645);
      this.data._data[6].input_data = rpn.mul(options.detail.value,2.49036e-10);
      this.data._data[7].input_data = rpn.mul(options.detail.value,0.000771414);
      this.data._data[8].input_data = rpn.mul(options.detail.value,0.00694272);
      this.data._data[9].input_data = options.detail.value;
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