// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onVideoDetail:function (){
    wx.navigateTo({
      url: '/pages/video-detail/video-detail',
    });
  }
  
})