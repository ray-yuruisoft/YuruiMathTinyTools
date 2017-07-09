var Run = require("/utils/login.js")
//app.js
var http = require('utils/commonUtil.js')
App({
    data:{
      servsers:"https://www.yuruisoft.com/yuruisoft_XCX/",
      require_message_data:'../../utils/wxSearch.js',
      require_kexuejisuanqi_data:'../../../utils/kexuejisuanqi.js',
      require_fudianshu_bug:'../../../utils/fudianshu_bug.js',
      navigateTo_formula:'/pages/math_index/formula/formula?name=formula&id='
    },
  ajax:{
    req     : http.req,
    reqGet  : http.reqGet
  },
  globalData:{
    user_storage_data:[],
    user_info:{}
  },
  onLaunch: function () {
   var that = this;
   wx.getStorage({
     key: 'amount_remind_key',
     success: function(res){
      that.globalData.amount_remind_key = res.data;
     },
     fail: function(res) {
       wx.setStorage({
         key: 'amount_remind_key',
         data: 5,
         success: function(res){
             that.globalData.amount_remind_key = 5;       
         },
         fail: function(res) {
           // fail
         },
         complete: function(res) {
           // complete
         }
       })
     },
     complete: function(res) {
       // complete
     }
   })
   wx.getStorage({
     key: 'changyong_Search_key',
     success: function(res){
      that.globalData.changyong_Search_key = res.data;
     },
     fail: function(res) {
       wx.setStorage({
         key: 'changyong_Search_key',
         data: ['几何','代数','三角学','方程','解析几何'],
         success: function(res){       
             that.globalData.changyong_Search_key = ['几何','代数','三角学','方程','解析几何'];          
         },
         fail: function(res) {
           // fail
         },
         complete: function(res) {
           // complete
         }
       })
     },
     complete: function(res) {
       // complete
     }
   })
   wx.getStorage({
     key: 'isShowKey',
     success: function(res){
      that.globalData.isShowKey = res.data;
     },
     fail: function(res) {
       wx.setStorage({
         key: 'isShowKey',
         data: true,
         success: function(res){        
             that.globalData.isShowKey = true
         },
         fail: function(res) {
           // fail
         },
         complete: function(res) {
           // complete
         }
       })
     },
     complete: function(res) {
       // complete
     }
   })

   wx.getStorage({
     key: 'isShowHis',
     success: function(res){
      that.globalData.isShowHis = res.data;
     },
     fail: function(res) {
       wx.setStorage({
         key: 'isShowHis',
         data: true,
         success: function(res){        
             that.globalData.isShowHis = true;
         },
         fail: function(res) {
           // fail
         },
         complete: function(res) {
           // complete
         }
       })
     },
     complete: function(res) {
       // complete
     }
   })
     wx.getStorage({
     key: 'isShowHap',
     success: function(res){
      that.globalData.isShowHap = res.data;
     },
     fail: function(res) {
       wx.setStorage({
         key: 'isShowHap',
         data: true,
         success: function(res){        
             that.globalData.isShowHap = true;
         },
         fail: function(res) {
           // fail
         },
         complete: function(res) {
           // complete
         }
       })
     },
     complete: function(res) {
       // complete
     }
   })
    wx.getStorage({
      key: 'colected_data',
      success: function(res){
          that.globalData.user_storage_data = res.data;
      },
      fail: function(res) {
          try {
                  wx.setStorageSync('colected_data',[])
              } catch (e) {    
              }
      },
      complete: function(res) {
        // complete
      }
    })
      wx.checkSession({
        success: function(e){
          wx.getStorage({
            key: 'rd_session',
            success: function(res){
              wx.request({
                url: getApp().data.servsers+"/test_rd_session.ashx",
                data: {
                  rd_session : res.data
                },
                method: 'GET', 
                success: function(res){
                  if(res.data == false)
                    that.login(that);
                },
                fail: function(res) {
                  // fail
                },
                complete: function(res) {
                  // complete
                }
              })              
            },
            fail: function(res) {
              that.login(that);
            },
            complete: function(res) {
              // complete
            }
          })
          wx.getUserInfo({
            success: function(res){
              that.globalData.user_info = res.userInfo
            },
            fail: function(res) {
              // fail
            },
            complete: function(res) {
              // complete
            }
          })

        },
        fail: function(){
            that.login(that);
        }
      })
      },
      login : function(that)
      {
            wx.login({
            success: function (res) {
              if (res.code) {
                var code = res.code;
                wx.getUserInfo({
                  success: function (res2) {
                  that.globalData.user_info = res2.userInfo
                  Run.Login(code,res2.encryptedData,res2.iv,res2.rawData,res2.signature);
                  }
                })
              }
              }
              });
       }

})