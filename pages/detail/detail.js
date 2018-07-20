// pages/detail/detail.js
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
    content: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots1: false,
    autoplay1: false,
    interval1: 5000,
    duration1: 1000,
    matchList: [{
      img: "/images/list_ac1.png",
      title: "欢动课"
    },
    {
      img: "/images/list_ac2.png",
      title: "艺术课"
    },
    {
      img: "/images/list_ac3.png",
      title: "音乐课"
    },
    {
      img: "/images/list_ac4.png",
      title: "全明星"
    },
    {
      img: "/images/list_ac4.png",
      title: "棒球课"
    },
    {
      img: "/images/list_ac4.png",
      title: "金字塔"
    },
    ]
  },
  navToDetailTap: function (e) {
    // console.log(e);
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: './coursedetail/coursedetail?title=' + title,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})