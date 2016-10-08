// 拿到全局应用程序实例
const app     = getApp()
const API_URL = 'https://api.douban.com/v2/movie/top250'

var detailJson  = require("./detail-json.js"); 
var util        = require('../../libraries/util.js');
// 创建一个页面对象用于控制页面的逻辑
Page({ 
  data: {
    title: '加载中...',
    movies: [],
    loading: true, 
  }, 
  onLoad () {
   //调用应用实例的方法获取全局数据 
     this.setData({ detail: detailJson.detail.data, loading: false })
  }
})
