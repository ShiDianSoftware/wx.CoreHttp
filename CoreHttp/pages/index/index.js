var CoreHttp = require('../CoreHttp/CoreHttp.js');


Page({

  data: {
    

  },

  onLoad: function (options) {
    
    let url = "http://maps.google.cn/maps/api/geocode/json"
    let params = {"address":"chengdu"}
    CoreHttp.post(url, params,function(o){

      console.log("请求成功：" + JSON.stringify(o))
    },function(e){

      console.log("请求失败：" + JSON.stringify(e))
    });
    
  }


})