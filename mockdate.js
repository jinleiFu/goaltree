Mock.mock('http://getmainmenu.com', {
  data: [
    {
      id: 1,
      url: 'https://browser.360.cn',
      text: '一级菜单1',
      leader: '赵云',
      subMenuNumber: 2
    },
    {
      id: 2,
      url: 'https://browser.360.cn',
      text: '一级菜单2',
      leader: '赵云',
      subMenuNumber: 0
    },
    {
      id: 3,
      url: 'https://browser.360.cn',
      text: '一级菜单3',
      leader: '赵云',
      subMenuNumber: 0
    }
  ]
})

Mock.mock('http://test.com', function(options) {
  // console.log(options.body.split('=')[1])
  switch (options.body.split('=')[1]) {
    case '1':
      return Mock.mock({
        data: [
          {
            id: 4,
            url: 'https://browser.360.cn',
            text: '二级菜单1',
            leader: '赵云',
            subMenuNumber: 1
          },
          {
            id: 5,
            url: 'https://browser.360.cn',
            text: '二级菜单2',
            leader: '赵云',
            subMenuNumber: 0
          }
        ]
      })
    case '4':
      return Mock.mock({
        data: [
          {
            id: 6,
            url: 'https://browser.360.cn',
            text: '三级菜单1',
            leader: '赵云',
            subMenuNumber: 0
          }
        ]
      })
    default:
      return Mock.mock({
        data: []
      })
  }
})
