Page({
  data:{
    life: [
                {
                  "title": "1、一个位数乘以5",
                  "url":"1"
                },
                {
                  "title": "2、一个位数乘以11",
                  "url":"2"
                },
                {
                  "title": "3、一个位数乘以12-19",
                  "url":"3"
                },
                {
                  "title": "4、一个位数乘以25",
                  "url":"4"
                },
                {
                  "title": "5、一个位数乘以50",
                  "url":"5"
                },
                {
                  "title": "6、乘有十位数一样的两位数",
                  "url":"6"
                },
                {
                  "title": "7、乘两个有十位数一样和个位数的总数是10的两位数",
                  "url":"7"
                },
                {
                  "title": "8、乘两个有个位数一样和十位数的总数是10的两位数",
                  "url":"8"
                },
                {
                  "title": "9、乘两个小于100的数，但是小于100不多",
                  "url":"9"
                },
                {
                  "title": "10、乘两个大于100的数，但是大于100不多",
                  "url":"10"
                },
                {
                  "title": "11、FOIL方法",
                  "url":"11"
                },
                {
                  "title": "12、个数字有尾位数是1的平方",
                  "url":"12"
                },
                {
                  "title": "13、个数字有尾位数是2的平方",
                  "url":"13"
                },
                {
                  "title": "14、个数字有尾位数是3的平方",
                  "url":"14"
                },
                {
                  "title": "15、个数字有尾位数是4的平方",
                  "url":"15"
                },
                {
                  "title": "16、个数字有尾位数是5的平方",
                  "url":"16"
                },
                {
                  "title": "17、个数字有尾位数是6的平方",
                  "url":"17"
                },
                {
                  "title": "18、个数字有尾位数是7的平方",
                  "url":"18"
                },
                {
                  "title": "19、个数字有尾位数是8的平方",
                  "url":"19"
                },
                {
                  "title": "20、个数字有尾位数是9的平方",
                  "url":"20"
                },
                {
                  "title": "21、一个数字的平方(从10-19)",
                  "url":"21"
                },
                {
                  "title": "22、一个数字的平方(从40-49)",
                  "url":"22"
                },
                {
                  "title": "23、一个数字的平方(从50-59)",
                  "url":"23"
                },
                {
                  "title": "24、一个数字的平方(从90-99)",
                  "url":"24"
                },
                {
                  "title": "25、两位数位数的平方",
                  "url":"25"
                }
              ],
      NLTS_id:0,
  },
  my_touchtap:function(e)
  {
    if(this.data.NLTS_id == 1)
    {
      wx.navigateTo({
      url: '/pages/math_nenglitisheng/xuexiyushiji/xuexiyushiji_template/xuexiyushiji_template?id='+e.currentTarget.dataset.url
    })
    }
    else
    {
      wx.navigateTo({
      url: '/pages/math_nenglitisheng/2renyouxi/2renyouxi?NLTS_XXSJ_id='+e.currentTarget.dataset.url+'&NLTS_id='+this.data.NLTS_id
    })
    }
  },
  onLoad:function(options){
    if(options.id == 1)
    {
      this.setData({
        NLTS_id:1
      })
    }
    else if(options.id == 2)
    {
      this.setData({
        NLTS_id:2
      })
    }
    else if(options.id == 3)
    {
      this.setData({
        NLTS_id:3
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