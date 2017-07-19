let CoreHttp = require('../FrameWorks/CoreHttp/CoreHttp.js')
let AppHttp = require('../FrameWorks/AppHttp/AppHttp.js')

Page({

  data: {


  },

  onLoad: function (options) {

    // let url = "http://maps.google.cn/maps/api/geocode/json"
    // let params = {"address":"chengdu"}
    // CoreHttp.get(url, params,function(o){

    //   console.log("请求成功：" + JSON.stringify(o))
    // },function(e){

    //   console.log("请求失败：" + JSON.stringify(e))
    // });

  },

  NoneAction: function () {

    let url = "http://39.108.3.179/tp5test/index"
    let params = { "uid": "1" }
    AppHttp.get(this, url, null, 0, function (o) {

      console.log("请求成功：")
      console.log(o)
    }, function (e) {

      console.log("请求失败：")
      console.log(e)
    });

  },

  SVPAction: function () {
   
    let url = "http://39.108.3.179/tp5test/index"
    let params = { "uid": "1" }
    AppHttp.post(this, url, params, 1, function (o) {

      console.log("请求成功：")
      console.log(o)
    }, function (e) {

      console.log("请求失败：")
      console.log(e)
    });

  },

  IVAction : function() {
 
    let url = "http://39.108.3.179/tp5test/index"
    let params = { "uid": "1" }
    AppHttp.post(this, url, params, 2, function (o) {
    
      console.log("请求成功：")
      console.log(o)
    }, function (e) {
     
      console.log("请求失败：")
      console.log(e)
    });

  },

  CoreIVClickAction: function(d){
      
  }


})