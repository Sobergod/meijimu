// pages/coursedetail/coursedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultImg: '/images/zanwu.png',
    imgUrls: [
      '/images/center/center.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    title:"加载中..",
    detail: "美吉姆欢动课作为全球顶尖的儿童早期运动课程,帮助0-6岁的儿童促进其体能、认知、社交、情感等方面的全面发展。课程综合了精彩趣味的游戏、运动、体操、音乐、舞蹈、接力比赛、骑乘游戏等，在每周更新的结构性的适龄性课程中，孩子们在获得无限欢乐的同时，收获身体力量、平衡、协调、敏捷和灵活性的发展，进而发展社交能力，并树立良好的自信心和自尊心，构筑健康心智及人格，让儿童以更加积极的心态应对未来社会的挑战"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData({
      title:options.title,
    });
    this.getData(title);
  },
  getData: function (title) {
    wx.request({
      url: '',
      data: {
        // title: title
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {

      },
      fail: function (res) { },
      complete: function (res) { },
    })
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