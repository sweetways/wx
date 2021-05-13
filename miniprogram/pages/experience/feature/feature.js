var app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {

  },
  formsubmit(e) {
    reqFunc('https://phmlearn.com/component/upload/1/327',
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.output_fileName
      }, "RF",function(res){
        app.globalData.output_fileName = res.data.data.file_name;
      })
  },

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
function reqFunc(url,data,nextPage,callback){
  wx.showLoading({
    title: '正在处理中',
  })
  wx.request({
    url: url,
    method: "POST",
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data:data,
    complete(res){
      wx.hideLoading();
      if(res.data.status == 0){
        wx.showToast({
          title: '处理成功'
        })
      }else{
        wx.showToast({
          title: '处理失败',
          icon:"none"
        })
      };
      setTimeout(function () {
        wx.navigateTo({
          url: '/pages/experience/' + nextPage + '/' + nextPage,
        })
      }, 2000)
    },
    success(res){
      callback(res);
    }
    })
}  