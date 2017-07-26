var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/zhongliang/zhongliang'
    }
  },
  data:{
    _data:[
      {
        "titel":"克(g)",
        "input_data":null
      },
      {
        "titel":"公斤(kg)",
        "input_data":null
      },
      {
        "titel":"吨(t)",
        "input_data":null
      },
      {
        "titel":"毫克(mg)",
        "input_data":null
      },
      {
        "titel":"微克(μg)",
        "input_data":null
      },
      {
        "titel":"盎司(oz)",
        "input_data":null
      },
      {
        "titel":"英镑(lb)",
        "input_data":null
      }
      ,
      {
        "titel":"克拉",
        "input_data":null
      }
      ,
      {
        "titel":"斯",
        "input_data":null
      }
      ,
      {
        "titel":"盎司(金衡)ozt",
        "input_data":null
      }
    ]
  },
user_input0:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = options.detail.value;
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.000001);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1000000);
      this.data._data[5].input_data = rpn.mul(options.detail.value,0.035274);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.00220462);
      this.data._data[7].input_data = rpn.mul(options.detail.value,5);
      this.data._data[8].input_data = rpn.mul(options.detail.value,6.85218e-5);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.0321507);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input1:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[1].input_data = options.detail.value;
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1000000);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1000000000);
      this.data._data[5].input_data = rpn.mul(options.detail.value,35.274);
      this.data._data[6].input_data = rpn.mul(options.detail.value,2.20462);
      this.data._data[7].input_data = rpn.mul(options.detail.value,5000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,0.0685218);
      this.data._data[9].input_data = rpn.mul(options.detail.value,32.1507);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input2:function(options)
{
 if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1000000);
      this.data._data[1].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[2].input_data = options.detail.value;
      this.data._data[3].input_data = rpn.mul(options.detail.value,1000000000);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1e+12);
      this.data._data[5].input_data = rpn.mul(options.detail.value,35274);
      this.data._data[6].input_data = rpn.mul(options.detail.value,2204.62);
      this.data._data[7].input_data = rpn.mul(options.detail.value,5000000);
      this.data._data[8].input_data = rpn.mul(options.detail.value,68.5218);
      this.data._data[9].input_data = rpn.mul(options.detail.value,32150.7);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.000001);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.000000001);
      this.data._data[3].input_data = options.detail.value;
      this.data._data[4].input_data = rpn.mul(options.detail.value,1000);
      this.data._data[5].input_data = rpn.mul(options.detail.value,3.5274e-5);
      this.data._data[6].input_data = rpn.mul(options.detail.value,2.20462e-6);
      this.data._data[7].input_data = rpn.mul(options.detail.value,0.005);
      this.data._data[8].input_data = rpn.mul(options.detail.value,6.85218e-8);
      this.data._data[9].input_data = rpn.mul(options.detail.value,3.21507e-5);
  }
    this.setData({
      _data : this.data._data
    })
},

user_input4:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.000001);
      this.data._data[1].input_data = rpn.mul(options.detail.value,1e-9);
      this.data._data[2].input_data = rpn.mul(options.detail.value,1e-12);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.001);
      this.data._data[4].input_data = options.detail.value;
      this.data._data[5].input_data = rpn.mul(options.detail.value,3.5274e-8);
      this.data._data[6].input_data = rpn.mul(options.detail.value,2.20462e-9);
      this.data._data[7].input_data = rpn.mul(options.detail.value,0.000005);
      this.data._data[8].input_data = rpn.mul(options.detail.value,6.85218e-11);
      this.data._data[9].input_data = rpn.mul(options.detail.value,3.21507e-8);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input5:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,28.3495);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.0283495);
      this.data._data[2].input_data = rpn.mul(options.detail.value,2.83495e-5);
      this.data._data[3].input_data = rpn.mul(options.detail.value,28349.5);
      this.data._data[4].input_data = rpn.mul(options.detail.value,2.83495e+7);
      this.data._data[5].input_data = options.detail.value;
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.0625);
      this.data._data[7].input_data = rpn.mul(options.detail.value,141.748);
      this.data._data[8].input_data = rpn.mul(options.detail.value,0.00194256);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.911458);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input6:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,453.592);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.453592);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.000453592);
      this.data._data[3].input_data = rpn.mul(options.detail.value,453592);
      this.data._data[4].input_data = rpn.mul(options.detail.value,4.53592e+8);
      this.data._data[5].input_data = rpn.mul(options.detail.value,16);
      this.data._data[6].input_data = options.detail.value;
      this.data._data[7].input_data = rpn.mul(options.detail.value,2267.96);
      this.data._data[8].input_data = rpn.mul(options.detail.value,0.031081);
      this.data._data[9].input_data = rpn.mul(options.detail.value,14.5833);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input7:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,0.2);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.0002);
      this.data._data[2].input_data = rpn.mul(options.detail.value,2e-7);
      this.data._data[3].input_data = rpn.mul(options.detail.value,200);
      this.data._data[4].input_data = rpn.mul(options.detail.value,200000);
      this.data._data[5].input_data = rpn.mul(options.detail.value,0.00705479);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.000440925);
      this.data._data[7].input_data = options.detail.value;
      this.data._data[8].input_data = rpn.mul(options.detail.value,1.37044e-5);
      this.data._data[9].input_data = rpn.mul(options.detail.value,0.00643015);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input8:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,14593.9);
      this.data._data[1].input_data = rpn.mul(options.detail.value,14.5939);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.0145939);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1.45939e+7);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1.45939e+10);
      this.data._data[5].input_data = rpn.mul(options.detail.value,514.785);
      this.data._data[6].input_data = rpn.mul(options.detail.value,32.14);
      this.data._data[7].input_data = rpn.mul(options.detail.value,72969.5);
      this.data._data[8].input_data = options.detail.value;
      this.data._data[9].input_data = rpn.mul(options.detail.value,469.205);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input9:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_zhongliang(this);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,31.1035);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.0311035);
      this.data._data[2].input_data = rpn.mul(options.detail.value,3.11035e-5);
      this.data._data[3].input_data = rpn.mul(options.detail.value,31103.5);
      this.data._data[4].input_data = rpn.mul(options.detail.value,3.11035e+7);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.09714);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.0685714);
      this.data._data[7].input_data = rpn.mul(options.detail.value,155.517);
      this.data._data[8].input_data = rpn.mul(options.detail.value,0.00213127);
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