var Run = require("/utils/login.js")
var http = require('utils/commonUtil.js')
var wxSearch = require('/utils/IndexSearchInput/wxSearch.js')
//TODO: 标准化注册

App({
  data: {
    servsers: "https://www.yuruisoft.com/MathTool",
    require_message_data: '../../utils/IndexSearchInput/wxSearch.js',
    require_kexuejisuanqi_data: '../../../utils/kexuejisuanqi.js',
    require_fudianshu_bug: '../../../utils/fudianshu_bug.js'
  },
  ajax: {//网络请求函数
    req: http.req,
    reqPOST: http.reqPOST
  },
  com: {//通用组件函数

  },
  globalData: {//全局变量
    user_storage_data: [],
    user_info: {}
  },

  onLaunch: function () {//APP启动时触发
    var that = this;
    wx.getStorage({//1、设置关键字数目
      key: 'amount_remind_key',
      success: function (res) {
        that.globalData.amount_remind_key = res.data;
      },
      fail: function (res) {//默认5个关键字
        wx.setStorage({
          key: 'amount_remind_key',
          data: 5,
          success: function (res) { that.globalData.amount_remind_key = 5; }
        })
      }
    })
    wx.getStorage({//2、设置常用搜素关键字
      key: 'changyong_Search_key',
      success: function (res) {
        that.globalData.changyong_Search_key = res.data;
      },
      fail: function (res) {
        wx.setStorage({//常用搜素默认值
          key: 'changyong_Search_key',
          data: ['几何', '代数', '三角学', '方程', '解析几何'],
          success: function (res) {
            that.globalData.changyong_Search_key = ['几何', '代数', '三角学', '方程', '解析几何'];
          }
        })
      }
    })
    wx.getStorage({//3、设置关键字是否显示
      key: 'isShowKey',
      success: function (res) {
        that.globalData.isShowKey = res.data;
      },
      fail: function (res) {//关键字默认为显示
        wx.setStorage({
          key: 'isShowKey',
          data: true,
          success: function (res) {
            that.globalData.isShowKey = true
          }
        })
      }
    })
    wx.getStorage({//4、设置是否显示搜索历史
      key: 'isShowHis',
      success: function (res) {
        that.globalData.isShowHis = res.data;
      },
      fail: function (res) {//默认显示搜素历史
        wx.setStorage({
          key: 'isShowHis',
          data: true,
          success: function (res) {
            that.globalData.isShowHis = true;
          }
        })
      }
    })
    wx.getStorage({//5、设置是否显示跑马灯
      key: 'isShowHap',
      success: function (res) {
        that.globalData.isShowHap = res.data;
      },
      fail: function (res) {//默认显示
        wx.setStorage({
          key: 'isShowHap',
          data: true,
          success: function (res) {
            that.globalData.isShowHap = true;
          }
        })
      }
    })
    wx.getStorage({//6、设置收藏数据值
      key: 'colected_data',
      success: function (res) {
        that.globalData.user_storage_data = res.data;
      },
      fail: function (res) {
        try {
          wx.setStorageSync('colected_data', [])
        } catch (e) {
        }
      }
    })

    wx.checkSession({//1、检查缓存中的Session值，如果没有就调用发起登录流程函数
      success: function (e) {
        wx.getStorage({//获取Tird_session值
          key: 'rd_session',
          success: function (res) {//发服务端校验
            that.ajax.reqPOST('/Mathtool/Verificationdeal', {
              "yuruisoft_session": res.data
            }, function (res) {
              if (!res || res.error || !res.exist) {
                that.login(that);//服务端对比失败重新登录
              }
            });
          },
          fail: function (res) {//丢失ThirdSession值需重新发起流程
            that.login(that);
          }
        })

        wx.getUserInfo({//checkSession成功以后就可以获取这个值
          success: function (res) {
            that.globalData.user_info = res.userInfo
          }
        })
      },
      fail: function () {//微信检查失败，发起登录流程
        that.login(that);
      }
    })
  },
  login: function (that) {//发起登录流程函数
    wx.login({
      success: function (res) {
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({
            success: function (res2) {
              that.globalData.user_info = res2.userInfo
              Run.Login(code, res2.encryptedData, res2.iv, res2.rawData, res2.signature);
            }
          })
        }
      }
    });
  }
})