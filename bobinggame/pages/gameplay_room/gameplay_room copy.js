// pages/multi_game/gameplay_room/gameplay_room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl1: '../single_game/6.png',
    avatarUrl2: '../single_game/6.png',
    avatarUrl3: '../single_game/6.png',
    avatarUrl4: '../single_game/6.png',
    avatarUrl5: '../single_game/6.png',
    avatarUrl6: '../single_game/6.png',
    result:' ',
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

  },
  picture:function(){
    var that = this;
    var list1 = parseInt(Math.random() * 6)+1
    that.setData({
      avatarUrl1: list1 + ".png",
    });
    var list2 = parseInt(Math.random() * 6)+1
    that.setData({
      avatarUrl2: list2 + ".png",
    });
    var list3 = parseInt(Math.random() * 6)+1
    that.setData({
      avatarUrl3: list3 + ".png",
    });
    var list4 = parseInt(Math.random() * 6)+1
    that.setData({
      avatarUrl4: list4 + ".png",
    });
    var list5 = parseInt(Math.random() * 6)+1
    that.setData({
      avatarUrl5: list5 + ".png",
    });
    var list6 = parseInt(Math.random() * 6)+1
    that.setData({
      avatarUrl6: list6 + ".png",
    });
    var num1=0
    var num2=0
    var num3=0
    var num4=0
    var num5=0
    var num6=0
    if(list1==1){
      num1++
    }else if(list1==2){
      num2++
    }else if(list1==3){
      num3++
    }else if(list1==4){
      num4++
    }else if(list1==5){
      num5++
    }else if(list1==6){
      num6++
    }
    if(list2==1){
      num1++
    }else if(list2==2){
      num2++
    }else if(list2==3){
      num3++
    }else if(list2==4){
      num4++
    }else if(list2==5){
      num5++
    }else if(list2==6){
      num6++
    }
    if(list3==1){
      num1++
    }else if(list3==2){
      num2++
    }else if(list3==3){
      num3++
    }else if(list3==4){
      num4++
    }else if(list3==5){
      num5++
    }else if(list3==6){
      num6++
    }
    if(list4==1){
      num1++
    }else if(list4==2){
      num2++
    }else if(list4==3){
      num3++
    }else if(list4==4){
      num4++
    }else if(list4==5){
      num5++
    }else if(list4==6){
      num6++
    }
    if(list5==1){
      num1++
    }else if(list5==2){
      num2++
    }else if(list5==3){
      num3++
    }else if(list5==4){
      num4++
    }else if(list5==5){
      num5++
    }else if(list5==6){
      num6++
    }
    if(list6==1){
      num1++
    }else if(list6==2){
      num2++
    }else if(list6==3){
      num3++
    }else if(list6==4){
      num4++
    }else if(list6==5){
      num5++
    }else if(list6==6){
      num6++
    }
    if((num4==4)){
      if((num4==4&&num1==2)){
        that.setData({
          result: "状元插金花",
        });
      }
      else{that.setData({
        result: "状元",
      });
    }
    }
    else if(num1>=5||num2>=5||num3>=5||num4>=5||num5>=5||num6>=5){
      if(num1==5||num2==5||num3==5||num5==5||num6==5){
        that.setData({result: "五子",});}
        else if(num4==5){
          that.setData({
            result: "五王",
          });
        }
        else if(num2==6||num3==6||num5==6||num6==6){
          that.setData({
            result: "六勃黑",
          });
        }
        else if(num1==6){
          that.setData({
            result: "遍地锦",
          });
        }
        else if(num4==6){
          that.setData({
            result: "六勃红",
          });
        }
    }
    else if(num1==1 && num2==1 && num3==1 && num4==1 && num5==1 && num6==1){
      this.setData({
        result: "对堂",
      });
    }else if(num4==3){
      this.setData({
        result: "三红",
      });
    }else if(num2==4||num1==4||num3==4||num5==4||num6==4){
      if(num4==2){
        {this.setData({
          result: "四进带二举",
        });}
        
      }
      else if(num4==1){
        this.setData({
          result: "四进",
        });
      }
      this.setData({
        result: "四进",
      });
    }else if(num4==2){
      this.setData({
        result: "二举",
      });
    }else if(num4==1){
      this.setData({
        result: "一秀",
      });
    }else{
      this.setData({
        result: "罚黑",
      });
    }
  }
})