//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'feix-7gy1vc3h8cb1e565',
        traceUser: true,
      })
    }

    this.globalData = {
      input_fileName: "1_M01_F10_test.csv",
      access_token: "97119fd3664a4ef1a967d2b3b35fd18d.bd7132b895763004308d471c7632c410",
      output_fileName: '',
      resultArray: []
    }
  }

})
