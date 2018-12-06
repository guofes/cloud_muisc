<template>
  <div class="play_footer">
    <audio autoplay="true">
      <source :src="audioUrl" type="audio/mpeg">
    </audio>
    <img src="@/image/song_list/li5.jpg" alt="">
    <div class="tip">
      <p>不为谁而做的歌</p>
      <span>滑动可以切换上下首哦</span>
    </div>
    <div class="play_button">
      <!-- <img src="@/image/cm2_icn_list@2x.png" alt="播放列表">
      <img src="@/image/pl-playall.png" alt="播放/暂停"> -->
      <div class="play_button_play">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <div class="list_button">
        <i class="far fa-play-circle fa-2x"></i>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayFooter',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      audioUrl: 'https://music.163.com/song?id=28285910&userid=349661708'
    }
  }
  // created: function() {
  //   console.log('播放')

  //   this.$http.banner().then(res => {
  //     this.banners = res.data.banners
  //     console.log(this.banners)
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.play_footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #f0f0f0;
  text-align: left;
  img {
    padding: 5px;
    float: left;
    border-radius: 5%;
    width: 40px;
    height: 40px;
  }
  .tip {
    float: left;
    p {
      font-size: 0.6em;
      height: 2em;
      line-height: 2em;
    }
    span {
      font-size: 2px;
      color: #333;
    }
  }
  .play_button {
    img {
      padding: 10px;
      float: right;
      width: 30px;
      height: 30px;
    }
    .play_button_play {
      margin: 9px;
      float: right;
    }
    .list_button {
      margin: 9px;
      float: right;
    }
  }
}
</style>
