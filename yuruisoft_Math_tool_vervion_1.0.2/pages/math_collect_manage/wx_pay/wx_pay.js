var rpn = require("../../../utils/fudianshu_bug.js")
Page({
  data:{},
  pay_button:function(){
    if(this.data._r_value != null && this.data._r_value !=''&& this.data._r_value != 0)
      {
        var total_fee = Math.floor(rpn.mul(this.data._r_value,100));
                      wx.getStorage({
                      key: 'rd_session',
                      success: function(res){                   
                          wx.request({                            
                              url: getApp().data.servsers+"/weixin_pay.ashx",
                              data: {
                                rd_session:res.data,
                                total_fee:total_fee.toString(),
                                wx_body:'support'
                                    },
                                    method: 'GET', 
                                    success: function(res){
                                      wx.requestPayment({
                                        timeStamp: res.data.timeStamp,
                                        nonceStr: res.data.nonceStr,
                                        package: res.data.package,
                                        signType: 'MD5',
                                        paySign: res.data.paySign,
                                        success: function(res){
                                          // success
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
                                      // fail
                                    },
                                    complete: function(res) {
                                      // complete
                                    }
                                  })
                      },
                      fail: function(res) {
                      
                      },
                      complete: function(res) {
                        // complete
                      }
                    })       
      }  
  },
  _r_value : function(e){
    if(e.detail.value != null && e.detail.value !='')
    {
      this.setData({
                _r_value:e.detail.value           
      })
    }
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