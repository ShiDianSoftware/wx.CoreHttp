/**
 * WeToast by kiinlam
 * WeApp Toast add-ons
 * 微信小程序toast增强插件
 * Github: https://github.com/kiinlam/wetoast
 * LICENSE: MIT
 */

function WeToastClass() {

  function WeToast(){
    return this
  }

  //切换显示/隐藏
  WeToast.prototype.toast = function (data) {
    try {
      if (!data) {
        this.hide()
      } else {
        this.show(data)
      }
    } catch (err) {
    

      // fail callback
      data && typeof data.fail === 'function' && data.fail(data)
    } finally {
      // complete callback
      data && typeof data.complete === 'function' && data.complete(data)
    }
  }

  //显示
  WeToast.prototype.show = function (data) {
    let page = this.__page

    clearTimeout(this.__timeout)

    //display需要先设置为block之后，才能执行动画
    page.setData({
      '__wetoast__.reveal': true
    })

    setTimeout(() => {

      let animation = wx.createAnimation({ duration: 200 })
      animation.opacity(1).step()
      data.animationData = animation.export()
      data.reveal = true

      if (data.duration > 10000) {

        data.wetoast__rotation = true
      }else {
        data.wetoast__rotation = false
      }

      page.setData({
        __wetoast__: data
      })
    }, 10)

    if (data.duration === 0) {
      // success callback after toast showed
      setTimeout(() => {
        typeof data.success === 'function' && data.success(data)
      }, 430)
    } else {
      this.__timeout = setTimeout(() => {
        this.toast()

        // success callback
        typeof data.success === 'function' && data.success(data)
      }, (data.duration || 1500) + 400)
    }

  }

  //隐藏
  WeToast.prototype.hide = function () {
    let page = this.__page

    clearTimeout(this.__timeout)

    if (!page.data.__wetoast__.reveal) {
      return
    }

    let animation = wx.createAnimation({ duration: 200 })
   
    animation.opacity(0).step()
    page.setData({
      '__wetoast__.animationData': animation.export()
    })

    setTimeout(() => {
      page.setData({
        __wetoast__: { 'reveal': false }
      })
    }, 400)
  }

  return new WeToast()
}

module.exports = {
  WeToast: WeToastClass
}