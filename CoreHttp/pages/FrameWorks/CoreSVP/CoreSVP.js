let { WeToast } = require('src/wetoast.js')

function CoreSVP() { }

CoreSVP.page = null
CoreSVP.t = WeToast()


//仅仅是标题
CoreSVP.showText = function (str, duration = 3000) {

  this.settings()

  this.t.toast({
    title: str,
    duration: duration
  })
}

//显示加载中
CoreSVP.showLoading = function (title) {

  // wx.showLoading({ title: title, mask: true })
  this.showRes(3, title, null)
}

//dismiss
CoreSVP.dismiss = function () {

  // wx.hideLoading()
  this.t.hide()
}

//显示成功
CoreSVP.showSuccess = function (title, completeClosure) {

  this.showRes(0, title, completeClosure)
}

//显示失败
CoreSVP.showError = function (title, completeClosure) {

  this.showRes(1, title, completeClosure)
}

//显示注意
CoreSVP.showInfo = function (title, completeClosure) {

  this.showRes(2, title, completeClosure)
}

CoreSVP.showRes = function (i, title, completeClosure) {

  this.settings()
  var image = ""
  var d = 0
  if (i == 0) { image = "chenggong"; d=2000}
  if (i == 1) { image = "shanchu"; d =3000}
  if (i == 2) { image = "shibai"; d=3000}
  if (i == 3) { image = "indicator"; d = 90000 }

  this.t.toast({
    img: "/pages/FrameWorks/CoreSVP/CoreSVP.bundle/" + image + ".png",
    title: title,
    duration: d,
    success(data) {
      //console.log(Date.now() + ': success')
      if (typeof completeClosure != "function") { return }
      completeClosure()
    },
    fail(data) {
      //console.log(Date.now() + ': fail')
    },
    complete(data) {
      //completeClosure()
    }
  })
}


CoreSVP.settings = function () {

  if (this.page == null) {
    let pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    this.page = currentPage
    this.t.__page = this.page
  }
}


module.exports = CoreSVP