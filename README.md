# wx.CoreHttp

基本使用
=============

#### 1.框架集成
将CoreHttp放到项目的FrameWorks目录中。然后在需要使用的页面引入：

        var CoreHttp = require('../FrameWorks/CoreHttp/CoreHttp.js');


#### 2.快速使用

        let url = "http://maps.google.cn/maps/api/geocode/json"

        let params = {"address":"chengdu"}

        CoreHttp.get(url, params,function(o){ // post也可以同样使用使用

          console.log("请求成功：" + JSON.stringify(o))

        },function(e){

          console.log("请求失败：" + JSON.stringify(e))

        });
