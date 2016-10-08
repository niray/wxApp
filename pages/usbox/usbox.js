// 创建一个页面对象用于控制页面的逻辑
var pArray = [
    {
      title:'GPS LOCATION',
      path:'../location/location'
    },{
      title:'2048',
      path:'../A2048/index'
    }
    ]
Page({
  data: { 
    hasMore: true,
    showLoading: true,
    title: 'MiX...',
    loading: true,
  },

  onLoad () {
      this.setData({ title:  'MiX...', movies: pArray, loading: false ,          showLoading: false})

  },
  loadMore: function(){
    var that = this 
       that.setData({
          loadMoreLoading: false
        }) 
     
  },
})
