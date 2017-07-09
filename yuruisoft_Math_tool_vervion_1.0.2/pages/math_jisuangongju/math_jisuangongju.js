Page({
    onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/math_jisuangongju'
    }
  },
    data:{
        life: [
        {
          "title": "科学计算器",
          "des": "三角函数，科学记数法，次方与开方，自由输入等",
          "img":"/images/jsgj_index_item_1.png",
          "back_ground_color":"rgba(46,177,231,0.5)"
        },
        {
          "title": "单位转换",
          "des": "长度，区域，量，质量，时间，速度，温度，角度，一键转换",
          "img":"/images/jsgj_index_item_2.png",
          "back_ground_color":"rgba(255,119,51,0.5)"
        },
        {
          "title": "2D图形计算器",
          "des": "三角，圆形，扇形，正多边形",
          "img":"/images/jsgj_index_item_3.png",
          "back_ground_color":"rgba(75,214,183,0.5)"
        },
        {
          "title": "3D图形计算器",
          "des": "球，圆柱体，椎体，金字塔",
          "img":"/images/jsgj_index_item_4.png",
          "back_ground_color":"rgba(162,140,255,0.5)"
        },
        {
          "title": "方程求解",
          "des": "二次方程，线性方程组",
          "img":"/images/jsgj_index_item_5.png",
          "back_ground_color":"rgba(0,255,106,0.5)"
        },
        {
          "title": "解析几何",
          "des": "两点之间的距离，三个顶点的三角区",
          "img":"/images/jsgj_index_item_6.png",
          "back_ground_color":"rgba(255,78,87,0.5)"
        },
        {
          "title": "自定义工具",
          "des": "可以保存的自定义工具（开发中...）",
          "img":"/images/jsgj_index_item_7.png",
          "back_ground_color":"rgba(143,202,255,0.5)"
        }
      ],
        AK:'hWtYHdhw2fIwi9PWsWX09IVmGtLVp2UG',
        city:'',
        lifeImgBaseUrl: '../assets/img/',
        lifeImg: ['cloth.png','car.png','medicine.png','sport.png','uv.png']
    },
        my_touchtap:function(e)
        {
            if(e.currentTarget.id =="科学计算器")
            {
                wx.navigateTo({
                  url: "/pages/math_jisuangongju/kexuejisuan/kexuejisuan"
                })
            }
            else if(e.currentTarget.id =="单位转换")
            {
               wx.navigateTo({
                  url: "/pages/math_jisuangongju/daohang_template/daohang_template?id=danweizhuanhuan"
                })
            }
            else if(e.currentTarget.id =="2D图形计算器")
            {
               wx.navigateTo({
                  url: "/pages/math_jisuangongju/daohang_template/daohang_template?id=2dtuxingjisuanqi"
                })
            }
            else if(e.currentTarget.id =="3D图形计算器")
            {
               wx.navigateTo({
                  url: "/pages/math_jisuangongju/daohang_template/daohang_template?id=3dtuxingjisuanqi"
                })
            }
            else if(e.currentTarget.id =="方程求解")
            {
               wx.navigateTo({
                  url: "/pages/math_jisuangongju/daohang_template/daohang_template?id=fangchengqiujie"
                })
            }
            else if(e.currentTarget.id =="解析几何")
            {
               wx.navigateTo({
                  url: "/pages/math_jisuangongju/daohang_template/daohang_template?id=jiexijihe"
                })
            }
            else if(e.currentTarget.id =="自定义工具")
            {
               wx.navigateTo({
                  url: "/pages/math_jisuangongju/daohang_template/daohang_template?id=zijingyigongju"
                })
            }
        },
    onLoad: function(e) {
        this.setData({
                user_info_local:getApp().globalData.user_info,
                isShowHap: getApp().globalData.isShowHap
              })
    },
    loadCity: function (latitude, longitude, AK, callback) {
        var that = this;
        var url = 'https://api.map.baidu.com/geocoder/v2/?location=' + latitude + ',' + longitude + '&output=json&ak=' + AK;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                var city = res.data.result.addressComponent.city;
                that.setData({city :city});
                callback && callback(city, AK);
            }
        })
    },
    loadWeather: function (city, AK) {
        var that  = this;
        var url = 'https://api.map.baidu.com/telematics/v3/weather?location=' + city + '&output=json&ak=' + AK;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                for(var i = 0, max = res.data.results[0].index.length; i< max; i++) {
                    res.data.results[0].index[i].img = that.data.lifeImgBaseUrl + that.data.lifeImg[i];
                }
                that.setData({
                });
            }
        })
    },
})