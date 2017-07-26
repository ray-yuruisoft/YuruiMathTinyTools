var app = getApp();
var rpn = require("../../../utils/storage_change.js")//引入缓存管理组件
const ImgLoader = require('../../../img-loader/img-loader.js')//引入图片预加载组件

Page({
  onShareAppMessage: function () {//小程序共享
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_index/math_index'
    }
  },
  data: {//页面渲染所需数据
    page_if: true,
    lastTapDiffTime: 0,
    formulaID: -1,
    result: [],
    url_data: [],
    formula_Contend: [//公式页面菜单
      {
        title: "几何",
      },
      {
        title: "代数",
      },
      {
        title: "三角学",
      },
      {
        title: "方程",
      },
      {
        title: "解析几何",
      },
      {
        title: "导数",
      },
      {
        title: "积分",
      },
      {
        title: "矩阵",
      },
      {
        title: "概率和统计学",
      }
    ]
  },

  /*
   *   ----------------------------------------常按图片触发------------------------------裕睿软件Yuruisoft.com提供
   */
  my_longtap: function (e) {
    if (this.data.result[e.currentTarget.dataset.index].colected) {
      wx.showToast({
        title: '已收藏',
        icon: 'success',
        duration: 1000
      })
      return;
    }
    var that = this;
    wx.showModal({
      title: '提示',
      content: '收藏该公式吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
          })
          //开启下载文件，异步
          wx.downloadFile({
            url: e.currentTarget.id,
            success: function (res) {
              //下载成功后存储文件
              wx.saveFile({
                tempFilePath: res.tempFilePath,
                success: function (res) {
                  //存储成功后，更新缓存
                  var data_ = {}
                  data_.name = e.currentTarget.id
                  data_.savedFilePath = res.savedFilePath
                  var storage_data = [];
                  //先获取缓存信息
                  wx.getStorage({
                    key: 'colected_data',
                    success: function (res) {
                      //缓存获取成功后
                      storage_data = res.data;
                      storage_data.push(data_);
                      //重新设置缓存
                      wx.setStorage({
                        key: "colected_data",
                        data: storage_data,
                        success: function (res) {
                          //缓存设置成功后，需及时更新到页面
                          wx.getStorage({
                            key: 'colected_data',
                            success: function (res) {
                              // 更新页面
                              getApp().globalData.user_storage_data = res.data;
                              that.setData({
                                result: rpn.storage_deal(that.data.result)
                              });
                              var temp = that.data.result.slice(0, that.data.result.length);
                              var Temp = that.data.imgList.slice(0, that.data.imgList.length);
                              for (var i = 0; i < temp.length; i++) {
                                Temp[i].colected = temp[i].colected;
                              }
                              that.setData({
                                imgList: Temp
                              })
                              //完成异步后，关闭提示！
                              wx.hideToast();
                            },
                            fail: function (res) {
                              // fail
                            },
                            complete: function (res) {
                              // complete
                            }
                          })
                        },
                        fail: function (res) {
                          // fail
                        },
                        complete: function (res) {
                          // complete
                        }
                      })
                    }
                  })
                },
                fail: function (res) {
                },
                complete: function (res) {
                  // complete
                }
              })
            },
            fail: function (res) {
              console.log(res)
              wx.showToast({
                title: '网络或其他原因无法下载',
                icon: 'success',
                duration: 2000
              })
            },
            complete: function (res) {
              // complete
            }
          })
        }
      }
    })
  },
  /*
   *   ----------------------------------------点击图片触发------------------------------裕睿软件Yuruisoft.com提供
   */
  mytap: function (e) {
    var curTime = e.timeStamp;
    var lastTime = this.data.lastTapDiffTime;
    if (lastTime > 0) {
      if (curTime - lastTime < 300) {
        wx.previewImage({
          current: e.currentTarget.id,
          urls: this.data.url_data,
          success: function (res) {
            // success
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      } else {//预留TODO:
      }
    } else {//预留TODO:
    }
    this.setData({ lastTapDiffTime: curTime });
  },
  /*
   *   ----------------------------------------页面初始加载------------------------------裕睿软件Yuruisoft.com提供
   */
  onLoad: function (options) {
    //初始化图片预加载组件，并指定统一的加载完成回调
    this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this));
    var that = this;
    this.setData({ formulaID: options.id });
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    
    app.ajax.reqPOST('/Mathtool/Searchdeal', {
        "Searchdata": options.id
      }, function (res) {
        if(!res)
        {
          console.log("失败！")
          return
        }       
        that.LoadPage(that, res); //请求数据完成后，加载页面
      });
  },

  //请求数据完成后，加载页面
  LoadPage: function (that, res) {
    that.setData({
      result: rpn.storage_deal(res.results),
      page_if: res.error,
    });
    for (var a = 0; a < res.results.length; a++)//做预览使用的
    {
      that.data.url_data.push(res.results[a].image_url)
    }


    that.TempData.TempResults = (res.results.length < that.TempData.pageSize) ? res.results : res.results.slice(0, that.TempData.pageSize);//初始页面的数据

    //加载图片，这里使用递归，图片按次序依次下载，图片下完后退出
    that.imgLoader.load(that.TempData.TempResults[0].image_url);
  },

  /*
   *   ----------------------------------------图片缓存组件------------------------------裕睿软件Yuruisoft.com提供
   */
  TempData: {//图片缓存使用----临时数据
    Results_count: 0,//放入图片缓存的计数
    pageNum : 1, // 当前页数 
    pageSize : 6,// 当前页尺寸
    CanonPullUp:false
  },    
  onReachBottom: function () {//上拉----加载数据，依次加载图片   
    if (this.TempData.CanonPullUp) {  
      wx.showNavigationBarLoading(); //在标题栏中显示加载
      this.TempData.CanonPullUp = false;//将上拉加载锁定
      if (this.TempData.pageNum * this.TempData.pageSize < this.data.result.length) {
        this.TempData.pageNum++;
        this.TempData.TempResults = (this.data.result.length < this.data.result.pageSize) ? this.data.result : this.data.result.slice(0, this.TempData.pageSize * this.TempData.pageNum);//初始页面的数据
        //加载图片，这里使用递归，图片按次序依次下载，图片下完后退出
        this.imgLoader.load(this.TempData.TempResults[(this.TempData.pageNum - 1) * this.TempData.pageSize].image_url);   
      }
      else {
        wx.hideNavigationBarLoading(); //完成停止加载
        // wx.showToast({
        //   title: '最后了哈',
        // })
      }
    }
  },
  onPullDownRefresh: function () {//下拉----刷新数据,加载所有图片
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    this.TempData.CanonPullUp = false;
    var that = this;
    this.data.imgList=[];
    this.TempData.Results_count = 0;
    //从第一个排队加载
    this.imgLoader.load(this.data.result[0].image_url, this.imageOnLoadAll.bind(this));
  
  },
  imageOnLoadAll(err, data) {//下拉回调----刷新-加载所有-递归

    console.log('图片加载完成', err, data)
    this.setData({
      imgList: this.getImgListData(this.data.result.slice(this.TempData.Results_count, this.TempData.Results_count + 1))//每次放入一个新的数据
    })

    this.TempData.Results_count++;
    if (this.TempData.Results_count < this.data.result.length) {
      this.imgLoader.load(this.data.result[this.TempData.Results_count].image_url, this.imageOnLoadAll.bind(this));
    }
    else//所有图片加载完毕
    {
      this.TempData.Results_count = 0;
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }
  },
  imageOnLoad(err, data) {//上拉回调----加载-递归
    var start = (this.TempData.pageNum - 1) * this.TempData.pageSize;//定位当前页面起始位置
    console.log('图片加载完成', err, data)

    this.setData({
      imgList: this.getImgListData(this.TempData.TempResults.slice(start + this.TempData.Results_count, start + this.TempData.Results_count + 1))//依次放入1个数据
    })

    this.TempData.Results_count++;//递归推移标志
    if ((this.TempData.Results_count < this.TempData.pageSize) && (this.TempData.TempResults.length > start + this.TempData.Results_count)) {
        this.imgLoader.load(this.TempData.TempResults[start + this.TempData.Results_count].image_url);
    }
    else//所有图片加载完毕
    {
      this.TempData.Results_count = 0;
      this.TempData.CanonPullUp = true;//解锁，允许下次下拉刷新
      wx.hideNavigationBarLoading(); //完成停止加载
    }
  },
  getImgListData(res) {//回调函数调用----数据格式化
    if (this.data.imgList != undefined)
      return this.data.imgList.concat(res.map(item => {
        return {
          _id: item._id,
          colected: item.colected,
          url: item.image_url,
          breviary_url: '../../../images/breviary_images/' + item.image_url.split('/')[item.image_url.split('/').length - 1],//返回缩略图
          loaded: true
        }
      }))
    else
      return res.map(item => {
        return {
          _id: item._id,
          colected: item.colected,
          url: item.image_url,
          breviary_url: '../../../images/breviary_images/' + item.image_url.split('/')[item.image_url.split('/').length - 1],//返回缩略图
          loaded: true
        }
      })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})

