# wx.CoreHttp

基本使用
=============

#### 1.框架集成
将CoreHttp放到项目的FrameWorks目录中。然后在需要使用的页面引入：

        var CoreHttp = require('../FrameWorks/CoreHttp/CoreHttp.js');


#### 2.快速使用


        let url = "http://maps.google.cn/maps/api/geocode/json"

        let params = {"address":"chengdu"}

        // post也可以同样使用使用，get/post
        CoreHttp.get(url, params,function(o){ //请求成功回调

          console.log("请求成功：" + JSON.stringify(o))

        },function(e){ //请求失败回调

          console.log("请求失败：" + JSON.stringify(e))

        });

#### 3.自定义数据解析
每个人的服务器数据格式都是不统一的。因此你需要在框架内部自定义数据解析，包括错误数据解析，正确数据的解包。
以下是我自己服务器处理示例，您只需处理一次即可，以后整个项目都不再需要处理啦。

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
