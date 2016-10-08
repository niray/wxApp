// 拿到全局应用程序实例
const app     = getApp()
const API_URL = 'https://api.douban.com/v2/movie/top250'

var listJson  = require("./list.js");
var adJson  = require("./ad.js");
var util      = require('../../libraries/util.js');
// 创建一个页面对象用于控制页面的逻辑
Page({ 
  data: {
    title: '加载中...',
    movies: [],
    loading: true, 
  }, 
  onLoad () {
   //调用应用实例的方法获取全局数据
    this.setData({ ads:adJson.adData.data["1"] , 
        lines: listJson.lineData.data.data,  fmt:util,loading: false })
  },
  refresh: function () {
        console.log("下拉刷新....")
        this.onLoad()
  },
  loadMore: function () {
//    this.setData({page: this.data.page + 1})
      console.log("上拉拉加载更多...."  )
//    this.getDataFromServer(this.data.page)
  },
  onShow: function () {
      wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  windowHeight: res.windowHeight,
                  windowWidth: res.windowWidth
              })
          }
      })
  },
})
