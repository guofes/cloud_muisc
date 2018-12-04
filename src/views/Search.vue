<template>
  <div class="search">
    <header>
      <router-link to="/">
        <!-- <i class="fas fa-search fa-lg i_color fix_2"></i> -->
        <- </router-link> <input type="text">
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
</script>
<style  lang="scss" scoped>
header {
  background: #d43c33;
  width: 100%;
  height: 60px;
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
