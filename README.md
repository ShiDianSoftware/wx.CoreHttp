# wx.CoreHttp

框架推荐：
============
CoreList 一键列表 https://github.com/ShiDianSoftware/wx.CoreList 

一、基集成CoreHttp
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



二、集成AppHttp
=============

####  1.将CoreHttp，AppHttp，CoreSVP，CoreIV四个独立的框架的文件夹拖拽到FrameWorks文件夹中。

#### 2.集成js文件，在当前控制器的js文件中:

                let AppHttp = require('../FrameWorks/AppHttp/AppHttp.js')

#### 3.集成wxml文件，在当前控制器的wxml文件中：



#### 4.集成wxss文件，在app.wxss文件中：



#### 5.快速使用：

                //此处post可以直接改为get使用，

                /* 
                 * requestType请求指示类型
                 * 
                 * 0: None
                 * 1: SVP
                 * 2: StatusView
                 * 
                 * */
                AppHttp.post(url, params, 1, function (o) {

                        console.log("请求成功：")
                        console.log(o)
                        
                }, function (e) {

                        console.log("请求失败：")
                        console.log(e)
                });






#### 作者Charlin
##### Hi，我是Charlin Feng，来自成都，目前就职于成都时点软件开发有限公司。我是一名做了3年前后端开发LAMP的，然后从12年开始又做了5年iOS开发的工程师，

##### 这是我的Github： https://github.com/CharlinFeng 目录开源了100多个iOS框架（少量Android框架），在国内有上千名iOS框架使用者。


##### 目前从iOS的角度，国内Object-C开发者排行第11位（https://githuber.cn/search?language=Objective-C ）

##### Swift开发目前综合排名第19位（https://githuber.cn/search?language=Swift ）


##### 现在我对小程序比较感兴趣，我的开发理念是封装，高度的封装，疯狂的封装。

##### 希望我能在在小程序这个领域封装出更多好用的框架。这些框架都带有浓郁的iOS代码风格。

##### 基本为什么要这个封装，因为对应一个小程序框架在iOS里面就有一个我写过的非常成熟的框架，只是代码换了一下，思路还是一致的。

