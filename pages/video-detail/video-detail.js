// pages/video-detail/video-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    arrow:'up',
    showText:'收起'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onHide:function(){
    var isShow = this.data.isShow;
    if (isShow){
      this.setData({
        isShow: false,
        arrow: 'down',
        showText: '展开'
      });
    }else{
      this.setData({
        isShow: true,
        arrow: 'up',
        showText: '收起'
      });
    }
    
  }
})