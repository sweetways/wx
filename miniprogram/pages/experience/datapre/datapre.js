// pages/datapre/datapre.js
var app=getApp();
Page({
  data: {
  },
  onLoad: function (options) {
  },
  formsubmit(e){
    reqFunc('https://phmlearn.com/component/upload/1/328',
    {
      "access_token": app.globalData.access_token,
      "file_name": app.globalData.input_fileName,
    },"feature",function(res){
      app.globalData.output_fileName = res.data.data.file_name;
    })
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