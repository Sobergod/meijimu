// pages/activity/activity.js
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
        title: "英语歌曲大赛"
      },
      {
        img: "/images/list_ac2.png",
        title: "英语演讲大赛"
      },
      {
        img: "/images/list_ac3.png",
        title: "组织春游活动"
      },
      {
        img: "/images/list_ac4.png",
        title: "荣获优秀单位"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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