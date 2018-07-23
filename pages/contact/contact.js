// pages/contact/contact.js
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
    contactList: [{
      title1: '卫星校区',
      title2: '长春市亚泰大街8599号卫星路欧亚超市4层',
      img: '/images/weixing.png',
    }, {
      title1: '中海Touch12街校区',
      title2: '长春市南三环与临河街交汇Touch12街3层',
      img: '/images/zhonghai.png',
    }, {
      title1: '飞跃校区',
      title2: '长春市高新区飞跃路飞悦经典2399号',
      img: '/images/feiyue.png',
    }, {
      title1: '欧亚新生活校区',
      title2: '长春市延安大街99号',
      img: '/images/xinmin.png',
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData();
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