<template>
  <div class="home">
    <header>
      <div class="img_menu">
        <i class="fas fa-bars fa-lg i_color fix_1"></i>
        <img src="@/image/cm2_btm_icn_music.png" alt="">
        <img src="@/image/cm2_btm_icn_discovery_prs.png" alt="">
        <img src="@/image/l0.png" alt="">
        <router-link to="/Search">
          <i class="fas fa-search fa-lg i_color fix_2"></i>
        </router-link>
      </div>
      <div class="font_menu">
        <p>推荐</p>
        <p>朋友</p>
        <p>电台</p>
      </div>
    </header>
    <div class="content">

      <carousel />
      <div class="base_menu">
        <div class="menu_li">
          <div class="menu_img">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAABd1BMVEXTOjH////TOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjFRLxN7AAAAfHRSTlMAAAEDBAUGBwgMDQ4QERQaGx8hMjM0Nzk/RUdNTk9QUVJTVFVZW1xeX2BhYmNnaW1ub3l8fYCBgoOEhoeLkJSVlpifpqepr7O0tru8vb6/wsPEx8jKy8zP0NHS1NbX2Nna29ze4OHi4+Tl5+nr7O3u8PHy8/T19/j5+vv+NWC4QQAAABxpRE9UAAAAAgAAAAAAAAA3AAAAKAAAADcAAAA3AAABlwxMnvIAAAFjSURBVGje7NTNSwJBGMfxR9GtcAMtO9hDseVGeHJ78a0Xs8iLFugarFCJRHrLNCNX+f3xHTxEL5rb7ArBfE/DHJ4PMwNDvrlGkpOc5CQnOclJTnKSk5zk/jlHk1Ji+Vb1+7YnnKpfdgFczYOLJEtDAPXsmt9rzr+asgCMynsrP5/bRU6JnbUB9Io7yxOf1C1O1Ys9AO3CukJTcoWLGOURACsT9dP0hDl/NFMHMCwZEfo9MU4xzD5mrG8aihgXtuAoKyzCKRaaWohmLKQ1UV8Q4JJoqOQgtYGkAGdCI0dpMAU4GyFn3BIGAhzgc8YRIDnJzY9byDVHtpUgosWTR/vtfj8wHl75+L4q7nHBm/HICwrWxqvrwFeu6h6XwnM2rp/bSGTwdLgdP+7hwMPLvEWWmbmAhxZyzMxHuPOQ62OLmXmzC3Q3mJnjGHjIvUBnZuZ0p5NmZuZdvHrI1XDKn8qj9jfuHQAA//8Cte6dAAABIklEQVTt08FKw0AUheETlca2QbtSYYpGBRGtJd3ozo1QFUHTQmsVGhEFW+tCMEWJ5+HdRIygIWEmXd3/Ac4HM1xYaZEWAHh8rKtEmxMe4O/I1EFk4ewxj5Ncm/fz8bxPkqRvkkOD0/0f7fAzWsNvrmOUwwXvNr615pRHQIGPCSw/8zL+vr0Jz+cK5rD6zrZSSqmdEfuLKJrDdsTTulKNEYMlFM9hN+LVVvOFt2maOQ7rIR9e2a9iNhxWnki/nByPzyBxeQY5OGcnC/iH65jnMiSccLPgPljNp5X5psF16ebjXHY1OI9DJ4/mDOlpcPaAgVvJilXcgDe2BmfVrpmrQc3S4axSqxdmtcJeqwQ9znDCCSeccMIJJ5xwwgknnHDCFdQXzmVBPW7EuUsAAAAASUVORK5CYII="
              alt="">
          </div>
          <p class="menu_text">
            私人FM
          </p>
        </div>
        <div class="menu_li">
          <div class="menu_img">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAbFBMVEXTOjH////TOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjGX+QvDAAAAI3RSTlMAAAYHDA0OEBtNUlVXWG1ub4bDx8vP0NHS1dbX2OTl8/T4+ZLUf8sAAAAcaURPVAAAAAIAAAAAAAAANwAAACgAAAA3AAAANwAAAN2DXgc9AAAAqUlEQVRo3uzQwQrCMBCE4RgvXUxb0hxShbbovP87eqhoGxYhRMTI/JDLHPaDmMNXM+TIkSNHjhw5cuTIkauZM7uGwSil68c4QOPStSbO9mEBAGA9jKTtuoTelnFNfB4WWd++ZI1NCWcjZu/kESBKr9X5GeOxgOswtdphnRNpJ3QFXIDfHD5fNG63eoQC7gYnWZ1wLeD073sXQO5XuPxq4kxm5MiRI/fP3B0AAP//Z6iR0AAAAHZJREFU7c1LDkBQEAXR9pc3IcEzICHu/vdoaiQ6bVi1gDpWvCWZM+l1aHBwcHBwcHBw/3GXWp9W6whwk5KPS5oC3KCt82jdpiHAVVl7ar5iTdq1VgHO+kWucm8RzspxPr9a5zyWFuF+Dw4ODg4ODg4ODg4O7tkNpfJyTmK5vSMAAAAASUVORK5CYII="
              alt="">
          </div>
          <p class="menu_text">
            每日推荐
          </p>
        </div>
        <div class="menu_li">
          <div class="menu_img">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAdVBMVEXTOjH////TOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjHTOjEwK/ZjAAAAJnRSTlMAAAIECQoPEhUYGRwdIyQlJiksLTU4Oz9BRklKTE2rrLbDxO7v8edODRAAAAAcaURPVAAAAAIAAAAAAAAANwAAACgAAAA3AAAANwAAALsnj8NQAAAAh0lEQVRo3uzUMQ6AIBBEUWxJxBsICTD3P6KF0WRdS4eEOFNtKHjdD8vQBXHixIkTJ06cOHHixE3Ohee2vQEA0PYU/D7m1op7NdG5jBLPKxZkOtcRrzOi0zng/RYnbijnGkLlfEOonG8IlfMNoXL+c3HipuFMeeicLQ+ds+Whc7Y8dM6+/Jk7AAAA//962lFEAAAAmUlEQVTt0ssOgjAQRuEK4iWoUfGG8i9w0fd/RBZNGuKiGEo1mnNWk1nMlzQ1s2DWGp+bhzbhe+Z3uaKsorl19g6XLbenWlI0p/q4GOIOl4dc8Zyk224e5OSbhJOa8yZ/4fLVPhkn6d7jirK6NlJKzh93n6K/ScqFN3BwcHBw/8e1dmTtZ7nn6MecOjg4ODg4ODg4ODg4uC9yHSIOwOEv49rLAAAAAElFTkSuQmCC"
              alt="">
          </div>
          <p class="menu_text">
            排行榜
          </p>
        </div>
      </div>

      <div class="recommend">
        <p class="recommend_head">
          推荐歌单 >
        </p>

        <div class="remd">
          <div class="remd_ul">
            <div class="remd_li" v-for="(item, index) in remdlist">
              <img v-if="index<6" :src="item.picUrl">
              <p v-if="index<6">"{{item.name}}"</p>
            </div>
          </div>

        </div>

      </div>

      <div class="latest">

        <p class="latest_head">
          最新音乐 >
        </p>

        <div class="latest">
          <div class="latest_ul">
            <div class="latest_li">
              <img src="@/image//song_list/li1.jpg" alt="">
              <p>"要做什么梦是每个人的自由"</p>
            </div>
            <div class="latest_li">
              <img src="@/image//song_list/li2.jpg" alt="">
              <p>昨夜西风凋碧树，醒来我想买秋裤</p>
            </div>
            <div class="latest_li">
              <img src="@/image//song_list/li3.jpg" alt="">
              <p>[超燃史诗&节奏电音]运动/健身游戏必备</p>
            </div>
          </div>

          <div class="latest_ul">
            <div class="latest_li">
              <img src="@/image//song_list/li4.jpg" alt="">
              <p>震撼心灵的史诗音乐</p>
            </div>
            <div class="latest_li">
              <img src="@/image//song_list/li5.jpg" alt="">
              <p>攒了一大堆好听的歌想和你听</p>
            </div>
            <div class="latest_li">
              <img src="@/image//song_list/li6.jpg" alt="">
              <p>[出场BGM]在我的出场音乐里我才是无敌的</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <PlayFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayFooter from '@/components/PlayFooter.vue'
import carousel from '@/components/carousel.vue'

export default {
  name: 'home',
  components: {
    PlayFooter,
    carousel
  },
  data() {
    return {
      remdlist: {}
    }
  },
  created: function() {
    // `this` 指向 vm 实例
    console.log('zhixing')

    this.$http.personalized().then(res => {
      this.remdlist = res.data.result
      console.log(this.remdlist)
    })
  }
}
</script>

<style  lang="scss">
.home {
  position: relative;
}
header {
  background: #d43c33;
  width: 100%;
  height: 100px;
  .img_menu {
    padding-top: 20px;
    width: 100%;
    height: 40px;
    /* background: #000; */
    .i_color {
      height: 24px;
      width: 24px;
      display: block;
      color: rgb(247, 240, 240);
    }
    .fix_1 {
      float: left;
      padding-left: 10px;
    }
    .fix_2 {
      float: right;
      padding-right: 10px;
    }

    img {
      height: 30px;
      width: 30px;
      padding: 0 10px;
    }
  }
  .font_menu {
    display: flex;
    padding-top: 30px;
    justify-content: space-around;
    p {
      color: #fff;
      font-size: 14px;
    }
  }
}
.content {
  height: 650px;
  overflow-y: auto;

  .carousel {
    width: 100%;
    height: 160px;
    background-image: linear-gradient(to top, #fff 0%, #fff 40%, #d43c33 40%, #d43c33 100%);
    img {
      border-radius: 4px;
      width: 94%;
      margin: 0 3%;
    }
  }
  .base_menu {
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    .menu_img {
      width: 60px;
      height: 70px;
      img {
        padding-top: 10px;
        width: 60px;
        height: 60px;
      }
    }
    .menu_text {
      font-size: 0.9em;
    }
  }
}
.recommend {
  .recommend_head {
    padding: 20px 0 10px 10px;
    font-weight: 900;
    text-align: left;
  }
  .remd_ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .remd_li {
      img {
        border-radius: 1vw;
        width: 32vw;
      }
      p {
        font-size: 0.5em;
        width: 32vw;
      }
    }
  }
}
.latest {
  .latest_head {
    padding: 20px 0 10px 10px;
    font-weight: 900;
    text-align: left;
  }
  .latest_ul {
    display: flex;
    justify-content: space-around;

    .latest_li {
      img {
        border-radius: 1vw;
        width: 32vw;
      }
      p {
        font-size: 0.5em;
      }
    }
  }
}
</style>
