Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'hello 小程序',
    list:['apple','orange','banana'],
    stu:{
      "name":"zs",
      "age":12
    },
    show:false
  },
  click(){
    console.log('click')
  },
  send(e){
    // e事件对象
    console.log(e.target.dataset)
  },
  // 事件
  change(){
  //  获取数据 this.data.msg
    // 可以修改数据，页面不会更新
    // this.data.msg='修改之后的数据'
    // 修改数据，并且更新页面数据
    // this实例页面对象
    this.setData({
      msg:"修改之后的数据",
      show:!this.data.show
    })
    console.log(this.data.msg)
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