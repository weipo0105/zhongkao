// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView1: true,
    showView2: false,
    showView3: false,
    region: ['北京市', '北京市', '全部'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  toStep2:function(){
    
    this.setData({
      showView1: false,
      showView2: true,
      showView3: false
    });
  },
  toStep1: function () {
    
    this.setData({
      showView1: true,
      showView2: false,
      showView3: false
    });
  },
  toStep3: function () {
    
    this.setData({
      showView1: false,
      showView2: false,
      showView3: true
    });
  },
  toReport:function(){
    wx.navigateTo({
      url:'/pages/report/report'
    });
  },
  bindRegionChange:function(option){
    //console.log(option.detail.value);
    this.setData({
      region:option.detail.value
    }
 
    );
  }
  
})