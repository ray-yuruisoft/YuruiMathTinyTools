Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/math_jisuangongju'
    }
  },
  data:{
     life:[],
     back_ground_images:getApp().data.servsers+"/images/back_ground_images/back_ground.png"
  },
  my_touchtap:function(e){
   wx.navigateTo({
    url: e.currentTarget.dataset.url
   })
  },
  onLoad:function(options){
    if(options.id == "danweizhuanhuan")
    {
      this.setData({
      life :[
                  {"title":"长度",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/changdu/changdu",
                    "back_ground_color":"rgba(75,214,183,0.5)"
                  },
                  {"title":"区域",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/quyu/quyu",
                   "back_ground_color":"rgba(255,129,254,0.5)" 
                  },
                  {"title":"量",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/liang/liang",
                   "back_ground_color":"rgba(143,202,255,0.5)" 
                  },
                  {"title":"重量",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/zhongliang/zhongliang",
                   "back_ground_color":"rgba(162,140,255,0.5)" 
                  },
                  {"title":"时间",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/shijian/shijian",
                    "back_ground_color":"rgba(255,118,0,0.5)" 
                  },
                  {"title":"速度",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/shudu/shudu",
                   "back_ground_color":"rgba(216,221,0,0.5)" 
                  },
                  {"title":"温度",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/wendu/wendu",
                   "back_ground_color":"rgba(255,78,87,0.5)" 
                  },
                  {"title":"角度",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/jiaodu/jiaodu",
                   "back_ground_color":"rgba(0,255,106,0.5)" 
                   }
      ]
      })    
    }
    else if(options.id == "2dtuxingjisuanqi")
    {
      this.setData({
      life :[
                  {"title":"三角",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/sanjiao/sanjiao",
                   "back_ground_color":"rgba(143,202,255,0.5)"  
                  },
                  {"title":"圆形",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/yuanxin/yuanxin",
                   "back_ground_color":"rgba(162,140,255,0.5)" 
                   },
                  {"title":"扇形",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/shanxin/shanxin",
                   "back_ground_color":"rgba(255,119,51,0.5)" 
                  },
                  {"title":"正多边形",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/zhengduobianxin/zhengduobianxin",
                   "back_ground_color":"rgba(255,129,254,0.5)" 
                  }]
      })
    }    
    else if(options.id == "3dtuxingjisuanqi")
    {
      this.setData({
      life :[
                  {"title":"球",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/qiu/qiu",
                    "back_ground_color":"rgba(143,202,255,0.5)" 
                  },
                  {"title":"圆柱体",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/yuanzhuti/yuanzhuti",
                   "back_ground_color":"rgba(162,140,255,0.5)" 
                  },
                  {"title":"椎体",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/zuiti/zuiti",
                   "back_ground_color":"rgba(255,119,51,0.5)"
                  },
                  {"title":"金字塔",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/jinzita/jinzita",
                   "back_ground_color":"rgba(255,129,254,0.5)"
                  }]
      })
    }
    else if(options.id == "fangchengqiujie")
    {
      this.setData({
      life :[
                  {"title":"二次方程",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/ercifangcheng/ercifangcheng",
                   "back_ground_color":"rgba(143,202,255,0.5)"  
                  },
                  {"title":"线性方程",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/xianxinfangcheng/xianxinfangcheng",
                   "back_ground_color":"rgba(162,140,255,0.5)" 
                  }]
      })
    }
    else if(options.id == "jiexijihe")
    {
      this.setData({
      life :[
                  {"title":"两点间的距离",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/liangdianzhijiandejuli/liangdianzhijiandejuli",
                   "back_ground_color":"rgba(143,202,255,0.5)" 
                  },
                  {"title":"三个顶点的三角区",
                   "url":"/pages/math_jisuangongju/jisuangongju_item/sangedingdiandesanjiaoqu/sangedingdiandesanjiaoqu",
                   "back_ground_color":"rgba(162,140,255,0.5)"
                  }]
      })
    }
    else if(options.id == "zijingyigongju")
    {
            wx.showToast({
              title: '努力开发中',
              icon: 'loading',
              duration: 1000
            })
    }
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