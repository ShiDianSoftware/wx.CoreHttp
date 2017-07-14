//CoreHttp 2017.07.14 by Charlin

//定义一个对象
function CoreHttp() { }

//扩展方法
//GET
CoreHttp.get = function (url, params, successClosure, errorClosure) {

  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    data: params,
    header: {
      'content-type': 'application/json'
    },
    method: "GET",
    success: function (res) {
      successClosure(res.data)
    },
    fail: function (e) {
      errorClosure(e)
    }
  })
}

//POST
CoreHttp.post = function (url, params, successClosure, errorClosure) {

  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    data: params,
    header: {
      'content-type': 'application/json'
    },
    method: "POST",
    success: function (res) {
      successClosure(res.data)
    },
    fail: function (e) {
      errorClosure(e)
    }
  })
}

module.exports = CoreHttp
