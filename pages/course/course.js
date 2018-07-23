// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultImg: '/images/zanwu.png',
    imgUrls: [
      '/images/swiper2.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    matchList: [{
        img: "/images/list_ac1.png",
        title: "课间活动教室"
      },
      {
        img: "/images/list_ac2.png",
        title: "英语演讲教室"
      },
      {
        img: "/images/list_ac3.png",
        title: "英语电影播放室"
      },
      {
        img: "/images/list_ac4.png",
        title: "阳光沐浴休息室"
      },
    ]
  },
  navToDetailTap: function(e) {
    // console.log(e);
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: './coursedetail/coursedetail?title=' + title,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData()
  },
  getData: function() {
    wx.request({
      url: '',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})