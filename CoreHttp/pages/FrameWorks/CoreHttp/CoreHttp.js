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
               success: function (o) {
               successClosure(o.data)
               },
               fail: function (e) {
               errorClosure(e)
               }
               })
}

//POST
CoreHttp.post = function (url, params, successClosure, errorClosure) {
    
    let weakSelf = this
    
    wx.request({
               url: url, //仅为示例，并非真实的接口地址
               data: params,
               header: {
               'content-type': 'application/json'
               },
               method: "POST",
               success: function (o) {
               
               weakSelf.handleResult(url, params, true, o.data, successClosure, errorClosure)
               },
               fail: function (e) {
               
               weakSelf.handleResult(url, params, false, e, successClosure, errorClosure)
               }
               })
}

//数据解析: 请根据服务器特点自行解析各自数据
CoreHttp.handleResult = function (url,params,isSuccess, res, successClosure, errorClosure) {
    
    if (isSuccess) {
        
        if (res.code != "200") { //数据请求成功，服务器抛出错误
            
            console.log("数据请求成功，但服务器抛出错误：" + url);
            console.log(params)
            console.log(res)
            
            let errorMsg = res.desc
            errorClosure(errorMsg)
            
        }else { //真正的请求成功
            
            let dataObj = res.data
            successClosure(dataObj)
        } 
        
    }else {
        
        console.log("数据请求失败" + url + "," + params); console.log(res)
        errorClosure(errorMsg.errMsg)
    }
    
}

module.exports = CoreHttp
