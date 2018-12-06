const REQUEST_METHOD_MAP = {
  POST: 'post',
  GET: 'get'
}

export default [{
    //搜索
    subUrl: 'search',
    name: 'search',
    method: REQUEST_METHOD_MAP.POST,
    module: 'instopencallback'
  },
  {
    //推荐歌单
    subUrl: 'personalized',
    name: 'personalized',
    method: REQUEST_METHOD_MAP.POST,
    module: 'instopencallback'
  },
  {
    //可获取 banner( 轮播图 ) 数据
    subUrl: 'banner',
    name: 'banner',
    method: REQUEST_METHOD_MAP.POST,
    module: 'instopencallback'
  },
  {
    //搜索
    subUrl: 'search/suggest',
    name: 'search_suggest',
    method: REQUEST_METHOD_MAP.POST,
    module: 'instopencallback'
  },

  {
    subUrl: 'search/hot',
    name: 'hot',
    method: REQUEST_METHOD_MAP.POST,
    module: 'instopencallback'
  }
]