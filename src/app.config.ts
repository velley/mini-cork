export default {
  pages: [
    'pages/home/index', 
    'pages/bind/index',                  
    'pages/cart/index',
    'pages/search/index',
    'pages/user/index',
    'pages/share/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list:[
      {
        text:'首页',
        pagePath:'pages/home/index',
        iconPath:'assets/home_selected.png',
        selectedIconPath:'assets/home.png'
      },
      {
        text:'搜索',
        pagePath:'pages/search/index',
        iconPath:'assets/search_selected.png',
        selectedIconPath:'assets/search.png'
      },
      {
        text:'分享',
        pagePath:'pages/share/index',
        iconPath:'assets/share_selected.png',
        selectedIconPath:'assets/share.png'
      },
      {
        text:'购物车',
        pagePath:'pages/cart/index',
        iconPath:'assets/cart_selected.png',
        selectedIconPath:'assets/cart.png'
      },
      {
        text:'我的',
        pagePath:'pages/user/index',
        iconPath:'assets/mine_selected.png',
        selectedIconPath:'assets/mine.png'
      }
    ]
  }
}
