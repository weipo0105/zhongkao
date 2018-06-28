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
    showData:{
      videoId:'',
      isIntroShow: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var skilledMovement = videoDataList.videoList;
    console.log(skilledMovement);
    
    this.setData({
      skilledMovement: skilledMovement
    });
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
        showData:[]
      });
    }
  },
  onIntroShowHide:function(option){
    
    var videoId = option.currentTarget.dataset.videoid;
    var showNum = option.currentTarget.dataset.shownum;
    if(this.data.showData.isIntroShow){
      this.setData({
        showData: {
          videoId: videoId,
          isIntroShow: false
        }
      });
    }else{
      this.setData({
        showData: {
          videoId: videoId,
          isIntroShow: true
        }
      });
    }
  },
  toThisVideoDetail:function(option){
    var videoId = option.currentTarget.dataset.id;
    //console.log(option);return;
    wx.navigateTo({
      url: '/pages/video-detail/video-detail?id='+videoId,
    })
  }
})