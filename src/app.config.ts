export default {
  pages: [
    'pages/index/index'
  ],
   subpackages: [
        {
            root: 'pkg/test/',
            pages: [
                'pages/index/index',
            ]
        }
    ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
