function formatTime(date) {//时间格式化
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var rootDocment = 'https://www.itit123.cn';
function req(url, data, cb) {//Post请求
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'POST',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}

function reqPOST(url, data, cb) {//Get请求
  wx.request({
    //url: getApp().data.servsers + url,
    url: "http://localhost:4943" + url,
    data : data,
    method:'POST',
    header: {
      'content-type': 'application/json',
      'yuruisoft': 'www.yuruisoft.com'
    },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}

module.exports = {
  formatTime: formatTime,   //时间格式化
  req: req,                 //Post请求
  reqPOST: reqPOST            //Get请求
}
