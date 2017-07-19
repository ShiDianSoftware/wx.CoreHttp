var CoreHttp = require('../CoreHttp/CoreHttp.js')
let CoreSVP = require("../CoreSVP/CoreSVP.js")
let CoreIV = require("../CoreIV/CoreIV.js")


//框架定义
function AppHttp() { }

/* 
 * requestType请求指示类型
 * 
 * 0: None
 * 1: SVP
 * 2: StatusView
 * 
 * */


//GET
AppHttp.get = function (vc, url, params, requestType, successClosure, errorClosure) {

  //请求开始处理
  this.requestBegin(vc, requestType)

  let weakSelf = this



  CoreHttp.get(url, params, function (o) { //请求成功回调

    weakSelf.requestComplete(vc, requestType, true, null)
    successClosure(o)
 
  }, function (e) { //请求失败回调

    weakSelf.requestComplete(vc, requestType, false, e)
    errorClosure(e)
   
  });
}

//POST
AppHttp.post = function (vc, url, params, requestType, successClosure, errorClosure) {

  //请求开始处理
  this.requestBegin(vc, requestType)

  let weakSelf = this

  CoreHttp.get(url, params, function (o) { //请求成功回调

    weakSelf.requestComplete(vc, requestType, true, null)
    successClosure(o)

  }, function (e) { //请求失败回调

    weakSelf.requestComplete(vc, requestType, false, e)
    errorClosure(e)

  });
}





//请求开始
AppHttp.requestBegin = function (vc, requestType){

  if (requestType == 0) { //什么都不用做
    
  } else if (requestType == 1) { //CoreSVP

      CoreSVP.showLoading("加载中")

  } else if (requestType == 2) { //CoreIV
  
    CoreIV.showLoadingInVC(vc)
  }
}

//请求结束
AppHttp.requestComplete = function (vc, requestType, isSuccess, msg) {

  if (requestType == 0) { //什么都不用做

  } else if (requestType == 1) { //SVP

    if (isSuccess) { //请求成功

      CoreSVP.dismiss()


    } else { //请求失败

      CoreSVP.dismiss()
   
      setTimeout(function () {
        CoreSVP.showError(msg)
      }, 500)

    }
  } else if (requestType == 2) { //IV
    
    if (isSuccess) { //请求成功

      CoreIV.dismissFromVC(vc)


    } else { //请求失败

    
      setTimeout(function () {
        CoreIV.showErrorInVC(vc, msg)
      }, 500)

    }
  }
}



module.exports = AppHttp