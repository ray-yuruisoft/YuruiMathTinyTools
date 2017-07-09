var rpn = require("../../../../utils/fudianshu_bug.js")
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/jisuangongju_item/shudu/shudu'
    }
  },
data:{
_data:[
      {
        "titel":"千米每小时(km/h)",
        "input_data":null
      },
      {
        "titel":"英里每小时(mi/h)",
        "input_data":null
      },
      {
        "titel":"米每秒(m/s)",
        "input_data":null
      },
      {
        "titel":"英尺每秒(ft/s)",
        "input_data":null
      },
      {
        "titel":"海里每小时",
        "input_data":null
      },
      {
        "titel":"光速(c)",
        "input_data":null
      },
      {
        "titel":"分钟每千米(min/km)",
        "input_data":null
      }
      ,
      {
        "titel":"分钟每海里(min/mi)",
        "input_data":null
      }
    ]
    },

user_input0:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = options.detail.value;
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.621372);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.277778);
      this.data._data[3].input_data = rpn.mul(options.detail.value,0.911345);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.539958);
      this.data._data[5].input_data = rpn.mul(options.detail.value,9.26568e-10);
      this.data._data[6].input_data = rpn.mul(options.detail.value,60);
      this.data._data[7].input_data = rpn.mul(options.detail.value,96.5606);
  }
    this.setData({
      _data : this.data._data
    })
},

user_input1:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1.60934);
      this.data._data[1].input_data = options.detail.value;
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.44704);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1.46667);
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.868977);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.49116e-9);
      this.data._data[6].input_data = rpn.mul(options.detail.value,37.2823);
      this.data._data[7].input_data = rpn.mul(options.detail.value,60);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input2:function(options)
{
 if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,3.6);
      this.data._data[1].input_data = rpn.mul(options.detail.value,2.23694);
      this.data._data[2].input_data = options.detail.value;
      this.data._data[3].input_data = rpn.mul(options.detail.value,3.28084);
      this.data._data[4].input_data = rpn.mul(options.detail.value,1.94385);
      this.data._data[5].input_data = rpn.mul(options.detail.value,3.33564e-9);
      this.data._data[6].input_data = rpn.mul(options.detail.value,16.6667);
      this.data._data[7].input_data = rpn.mul(options.detail.value,26.8224);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input3:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1.09728);
      this.data._data[1].input_data = rpn.mul(options.detail.value,0.681818);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.3048);
      this.data._data[3].input_data = options.detail.value;
      this.data._data[4].input_data = rpn.mul(options.detail.value,0.592484);
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.0167e-9);
      this.data._data[6].input_data = rpn.mul(options.detail.value,54.6807);
      this.data._data[7].input_data = rpn.mul(options.detail.value,88);
  }
    this.setData({
      _data : this.data._data
    })
},

user_input4:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1.852);
      this.data._data[1].input_data = rpn.mul(options.detail.value,1.15078);
      this.data._data[2].input_data = rpn.mul(options.detail.value,0.514444);
      this.data._data[3].input_data = rpn.mul(options.detail.value,1.68781);
      this.data._data[4].input_data = options.detail.value;
      this.data._data[5].input_data = rpn.mul(options.detail.value,1.716e-9);
      this.data._data[6].input_data = rpn.mul(options.detail.value,32.3974);
      this.data._data[7].input_data = rpn.mul(options.detail.value,52.1386);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input5:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,1.07925e+9);
      this.data._data[1].input_data = rpn.mul(options.detail.value,6.70617e+8);
      this.data._data[2].input_data = rpn.mul(options.detail.value,299792458);
      this.data._data[3].input_data = rpn.mul(options.detail.value,9.83571e+8);
      this.data._data[4].input_data = rpn.mul(options.detail.value,5.8275e+8);
      this.data._data[5].input_data = options.detail.value;
      this.data._data[6].input_data = rpn.mul(options.detail.value,5.5594e-8);
      this.data._data[7].input_data = rpn.mul(options.detail.value,8.94699e-8);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input6:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,60);
      this.data._data[1].input_data = rpn.mul(options.detail.value,37.2823);
      this.data._data[2].input_data = rpn.mul(options.detail.value,16.6667);
      this.data._data[3].input_data = rpn.mul(options.detail.value,54.6807);
      this.data._data[4].input_data = rpn.mul(options.detail.value,32.3974);
      this.data._data[5].input_data = rpn.mul(options.detail.value,5.5594e-8);
      this.data._data[6].input_data = options.detail.value;
      this.data._data[7].input_data = rpn.mul(options.detail.value,1.60934);
  }
    this.setData({
      _data : this.data._data
    })
},
user_input7:function(options)
{
  if(options.detail.value == "")
      rpn.set_null_(this,8);
  else
  {
      this.data._data[0].input_data = rpn.mul(options.detail.value,96.5606);
      this.data._data[1].input_data = rpn.mul(options.detail.value,60);
      this.data._data[2].input_data = rpn.mul(options.detail.value,26.8224);
      this.data._data[3].input_data = rpn.mul(options.detail.value,88);
      this.data._data[4].input_data = rpn.mul(options.detail.value,52.1386);
      this.data._data[5].input_data = rpn.mul(options.detail.value,8.94699e-8);
      this.data._data[6].input_data = rpn.mul(options.detail.value,0.621371);
      this.data._data[7].input_data = options.detail.value;
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