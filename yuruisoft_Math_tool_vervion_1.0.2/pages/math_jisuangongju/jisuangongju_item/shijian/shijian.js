var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/shijian/shijian'
    }
  },
data:{
_data:[
      {
        "titel":"年",
        "input_data":null
      },
      {
        "titel":"月",
        "input_data":null
      },
      {
        "titel":"周",
        "input_data":null
      },
      {
        "titel":"日",
        "input_data":null
      },
      {
        "titel":"小时(h)",
        "input_data":null
      },
      {
        "titel":"分(min)",
        "input_data":null
      },
      {
        "titel":"秒(s)",
        "input_data":null
      }
      ,
      {
        "titel":"毫秒(ms)",
        "input_data":null
      }
      ,
      {
        "titel":"微秒(μs)",
        "input_data":null
      }
      ,
      {
        "titel":"十年",
        "input_data":null
      }
      ,
      {
        "titel":"百年",
        "input_data":null
      }
      ,
      {
        "titel":"千年",
        "input_data":null
      }
    ]
    },
user_input0:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = options.detail.value;
      this.data._data[1].input_data = rpn.mul(options.detail.value,12);
      this.data._data[2].input_data = rpn.mul(options.detail.value,52.1775);
      this.data._data[3].input_data = rpn.mul(options.detail.value,365.243);
      this.data._data[4].input_data = rpn.mul(options.detail.value,8765.82);
      this.data._data[5].input_data = rpn.mul(options.detail.value,525949);
      this.data._data[6].input_data = rpn.mul(options.detail.value,31556952);
      this.data._data[7].input_data = rpn.mul(options.detail.value,2147483647);
      this.data._data[8].input_data = rpn.mul(options.detail.value,3.1557e+13);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.1);
      this.data._data[10].input_data = rpn.mul(options.detail.value,0.01);
      this.data._data[11].input_data = rpn.mul(options.detail.value,0.001);
  }
    this.setData({
      _data : this.data._data
    })
},

user_input1:function(options) //立方米(m³)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.083333);
      this.data._data[1].input_data = options.detail.value;
      this.data._data[2].input_data = rpn.mul(options.detail.value,4.28571);
      this.data._data[3].input_data = rpn.mul(options.detail.value,30);
      this.data._data[4].input_data = rpn.mul(options.detail.value,720);
      this.data._data[5].input_data = rpn.mul(options.detail.value,43200);
      this.data._data[6].input_data = rpn.mul(options.detail.value,2592000);
      this.data._data[7].input_data = rpn.mul(options.detail.value,2147483647);
      this.data._data[8].input_data = rpn.mul(options.detail.value,2.592e+12);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.0083333);
      this.data._data[10].input_data = rpn.mul(options.detail.value,0.00083333);
      this.data._data[11].input_data = rpn.mul(options.detail.value,8.21372e-5);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input2:function(options)
{
 if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.0191653);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.233333);
      this.data._data[2].input_data = options.detail.value;
      this.data._data[3].input_data = rpn.mul(options.detail.value,7);
      this.data._data[4].input_data = rpn.mul(options.detail.value,168);
      this.data._data[5].input_data = rpn.mul(options.detail.value,10080);
      this.data._data[6].input_data = rpn.mul(options.detail.value,604800);
      this.data._data[7].input_data = rpn.mul(options.detail.value,604800000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,6.048e+11);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.00191653);
      this.data._data[10].input_data = rpn.mul(options.detail.value,0.000191653);
      this.data._data[11].input_data = rpn.mul(options.detail.value,1.91653e-5);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.00273791);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.0333333);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.142857);
      this.data._data[3].input_data = options.detail.value;
      this.data._data[4].input_data = rpn.mul(options.detail.value,24);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1440);
      this.data._data[6].input_data = rpn.mul(options.detail.value,86400);
      this.data._data[7].input_data = rpn.mul(options.detail.value,86400000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,8.64e+10);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.0002737791);
      this.data._data[10].input_data = rpn.mul(options.detail.value,2.73791e-5);
      this.data._data[11].input_data = rpn.mul(options.detail.value,2.73791e-6);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input4:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.000114079);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.00138889);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.00595238);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.0416667);
      this.data._data[4].input_data = options.detail.value;
      this.data._data[5].input_data = rpn.mul(options.detail.value,60);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3600);
      this.data._data[7].input_data = rpn.mul(options.detail.value,3600000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,3.6e+9);
      this.data._data[9].input_data = rpn.mul(options.detail.value,1.14079e-5);
      this.data._data[10].input_data = rpn.mul(options.detail.value,1.14079e-6);
      this.data._data[11].input_data = rpn.mul(options.detail.value,1.14079e-7);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input5:function(options) //加仑(美国)(gal)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1.90132e-6);
      this.data._data[1].input_data = rpn.mul(options.detail.value,2.31481e-5);
      this.data._data[2].input_data = rpn.mul(options.detail.value,9.92063e-5);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.000694444);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.0166667);
      this.data._data[5].input_data = options.detail.value;
      this.data._data[6].input_data = rpn.mul(options.detail.value,60);
      this.data._data[7].input_data = rpn.mul(options.detail.value,60000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,60000000);
      this.data._data[9].input_data = rpn.mul(options.detail.value,1.90132e-7);
      this.data._data[10].input_data = rpn.mul(options.detail.value,1.90132e-8);
      this.data._data[11].input_data = rpn.mul(options.detail.value,1.90132e-9);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input6:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,3.16887e-8);
      this.data._data[1].input_data = rpn.mul(options.detail.value,3.85802e-7);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1.65344e-6);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1.15741e-5);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.000277778);
      this.data._data[5].input_data = rpn.mul(options.detail.value,0.0166667);
      this.data._data[6].input_data = options.detail.value;
      this.data._data[7].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,1000000);
      this.data._data[9].input_data = rpn.mul(options.detail.value,3.16887e-9);
      this.data._data[10].input_data = rpn.mul(options.detail.value,3.16887e-10);
      this.data._data[11].input_data = rpn.mul(options.detail.value,3.16887e-11);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input7:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,3.16887e-11);
      this.data._data[1].input_data = rpn.mul(options.detail.value,3.85802e-10);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1.65344e-9);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1.15741e-8);
      this.data._data[4].input_data = rpn.mul(options.detail.value,2.77778e-7);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.66667e-5);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[7].input_data = options.detail.value;
      this.data._data[8].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[9].input_data = rpn.mul(options.detail.value,3.16887e-12);
      this.data._data[10].input_data = rpn.mul(options.detail.value,3.16887e-13);
      this.data._data[11].input_data = rpn.mul(options.detail.value,3.16887e-14);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input8:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,3.16887e-14);
      this.data._data[1].input_data = rpn.mul(options.detail.value,3.85802e-13);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1.65344e-12);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1.15741e-11);
      this.data._data[4].input_data = rpn.mul(options.detail.value,2.77778e-10);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.66667e-8);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.000001);
      this.data._data[7].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[8].input_data = options.detail.value;
      this.data._data[9].input_data = rpn.mul(options.detail.value,3.16887e-15);
      this.data._data[10].input_data = rpn.mul(options.detail.value,3.16887e-16);
      this.data._data[11].input_data = rpn.mul(options.detail.value,3.16887e-17);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input9:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,10);
      this.data._data[1].input_data = rpn.mul(options.detail.value,120);
      this.data._data[2].input_data = rpn.mul(options.detail.value,521.775);
      this.data._data[3].input_data = rpn.mul(options.detail.value,3652.43);
      this.data._data[4].input_data = rpn.mul(options.detail.value,87658.2);
      this.data._data[5].input_data = rpn.mul(options.detail.value,5259492);
      this.data._data[6].input_data = rpn.mul(options.detail.value,315569520);
      this.data._data[7].input_data = rpn.mul(options.detail.value,2147483647);
      this.data._data[8].input_data = rpn.mul(options.detail.value,3.1557e+14);
      this.data._data[9].input_data = options.detail.value;
      this.data._data[10].input_data = rpn.mul(options.detail.value,0.1);
      this.data._data[11].input_data = rpn.mul(options.detail.value,0.01);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input10:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,100);
      this.data._data[1].input_data = rpn.mul(options.detail.value,1200);
      this.data._data[2].input_data = rpn.mul(options.detail.value,5217.75);
      this.data._data[3].input_data = rpn.mul(options.detail.value,36524.25);
      this.data._data[4].input_data = rpn.mul(options.detail.value,876582);
      this.data._data[5].input_data = rpn.mul(options.detail.value,52594920);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.1557e+9);
      this.data._data[7].input_data = rpn.mul(options.detail.value,2147483647);
      this.data._data[8].input_data = rpn.mul(options.detail.value,3.1557e+15);
      this.data._data[9].input_data = rpn.mul(options.detail.value,10);
      this.data._data[10].input_data = options.detail.value;
      this.data._data[11].input_data = rpn.mul(options.detail.value,0.1);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input11:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,12);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[1].input_data = rpn.mul(options.detail.value,12000);
      this.data._data[2].input_data = rpn.mul(options.detail.value,52177.5);
      this.data._data[3].input_data = rpn.mul(options.detail.value,365242.5);
      this.data._data[4].input_data = rpn.mul(options.detail.value,8765820);
      this.data._data[5].input_data = rpn.mul(options.detail.value,525949200);
      this.data._data[6].input_data = rpn.mul(options.detail.value,3.1557e+10);
      this.data._data[7].input_data = rpn.mul(options.detail.value,21474836470);
      this.data._data[8].input_data = rpn.mul(options.detail.value,3.1557e+16);
      this.data._data[9].input_data = rpn.mul(options.detail.value,100);
      this.data._data[10].input_data = rpn.mul(options.detail.value,10);
      this.data._data[11].input_data = options.detail.value;
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