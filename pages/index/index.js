//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    defaultImg: '/images/zanwu.png',
    videoUrl: '',
    poster: '/images/swiper1.png',
    imgUrls: [
      '/images/swiper1.png',
      '/images/swiper1.png',
      '/images/swiper1.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    centerList: [{
        img: "/images/list1.png",
        title: "卫星校区",
      },
      {
        img: "/images/list2.png",
        title: "飞跃校区",
      },
      {
        img: "/images/list3.png",
        title: "中海Touch12街校区",
      },
      {
        img: "/images/list4.png",
        title: "欧亚新生活",
      }
    ],
    lessonList: [{
        img: "/images/list5.png",
        title: "欢乐课",
      },
      {
        img: "/images/list6.png",
        title: "艺术课",
      },
      {
        img: "/images/list7.png",
        title: "音乐课",
      },
      {
        img: "/images/list8.png",
        title: "全明星",
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  navToSchoolTap: function() {
    wx.navigateTo({
      url: '/pages/school/school',
    })
  },
  navToCourseTap: function() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  navToAuditionTap: function() {
    wx.switchTab({
      url: '/pages/audition/audition',
    })
  },
  navToContactTap: function() {
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },
  navToSchoolDetail: function(e) {
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/detail/coursedetail/coursedetail?title=' + title,
    })
  },
  navToCourseDetailTap: function(e) {
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/detail/coursedetail/coursedetail?title=' + title,
    })
  },
  getVideo: function() {
    wx.request({
      url: '',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: res => {
        that.setData({

        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function() {
    this.getVideo();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})