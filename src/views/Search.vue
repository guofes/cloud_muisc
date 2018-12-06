<template>
  <div class="search">
    <header>
      <div class="search_head">
        <router-link to="/">
          <i class="fas fa-long-arrow-alt-left fa-lg fix_color"></i>
        </router-link>
        <input type="text" v-on:input="search_suggest" v-model="searchText">
        <div v-show="tip_show" class="tip">
          <ul>
            <li>
              搜索 {{searchText}}
            </li>
            <li v-for="item in items" @click="choose_suggest">
              <i class="fas fa-search sty_search"></i>{{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </header>
    <content>
      <div class="singer_search">
        <p>按歌手搜索 <span> ></span></p>
      </div>
      <div class="hot_search">
        <p>热门搜索</p>
      </div>
      <div class="history">
        <p>历史记录</p>
      </div>
    </content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      tip_show: true,
      searchText: null
    }
  },
  methods: {
    search_suggest() {
      console.log('搜索')
      const val = { keywords: this.searchText }
      if (this.searchText.trim() == '') {
        this.items = []
        this.tip_show = false
      } else {
        console.log(val)
        this.$http.search_suggest(val).then(res => {
          this.tip_show = true
          console.log(res)
          this.items = res.data.result.songs
        })
      }
    },
    choose_suggest() {},

    personalized() {
      console.log('推荐歌单')
      this.$http.personalized().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style  lang="scss" scoped>
header {
  background: #d43c33;
  width: 100%;
  height: 60px;
  text-align: left;
  .search_head {
    position: relative;
    padding-top: 15px;
    .fix_color {
      width: 10vw;
      color: #fff;
    }
    input {
      background: #d43c33;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.8);
      line-height: 24px;
      width: 90vw;
      height: 30px;
    }
    .tip {
      position: absolute;
      top: 63px;
      left: 10px;
      right: 10px;
      background: #fff;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.1);
      li {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 14px;
        line-height: 20px;
        color: rgb(71, 71, 71);
        padding: 10px 0 10px 20px;
        .sty_search {
          padding-right: 10px;
          color: rgba(71, 71, 71, 0.5);
        }
      }
    }
  }
}
content {
  .singer_search {
    border-bottom: 1px solid #f0f0f0;
    p {
      padding: 10px 0 10px 20px;
      font-weight: 800;
      text-align: left;
      span {
        color: #ada2a2;
      }
    }
  }
  .hot_search {
    width: 100%;
    height: 150px;
    p {
      padding: 20px 0 10px 20px;
      font-weight: 800;
      text-align: left;
    }
  }

  .history {
    width: 100%;
    height: 150px;
    p {
      padding: 20px 0 10px 20px;
      text-align: left;
      font-weight: 800;
    }
  }
}
</style>
