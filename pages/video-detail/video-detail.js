// pages/video-detail/video-detail.js
var videoDataList = require('../../data/video-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTeacherShow :true,
    arrow :'up',
    showText :'收起',
    showData: {},
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var skilledMovement = videoDataList.videoList;
    this.setData({
      skilledMovement: skilledMovement
    });

    wx.getStorageSync('showData');
  },

  onTeacherShowHide:function(){
    var isTeacherShow = this.data.isTeacherShow;
    if (isTeacherShow){
      this.setData({
        isTeacherShow: false,
        arrow: 'down',
        showText: '展开'
      });
    }else{
      this.setData({
        isTeacherShow: true,
        arrow: 'up',
        showText: '收起',
        show1:false
      });
    }
  },
  onIntroShowHide:function(option){
    
    var videoId = option.currentTarget.dataset.videoid;
    var showNum = option.currentTarget.dataset.shownum;
    
    //console.log(this.data);
  
    
  }
})