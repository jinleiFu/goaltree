$(function() {
  // 渲染主菜单
  $.ajax({
    url: 'http://getmainmenu.com',
    dataType: 'json',
    success: function(res) {
      // randerMenu(res.data, $('#horizontal-tree'))
    }
  })
})

// 渲染菜单
function randerMenu(menuData, menuElement) {
  var menuStr = ''
  menuData.forEach(item => {
    if (item.subMenuNumber == 0) {
      menuStr += `<li>
          <div class="icon-box"><span class="icon icon-off" id="${item.id}"></span></div>
          <div class="text"><a href="${item.url}">${item.text}</a></div>
          <div class="leader">
            <span>${item.leader}</span>
            <span>(${item.subMenuNumber})</span>
          </div>
          <ul></ul>
        </li>
      `
    } else {
      menuStr += `<li>
          <div class="icon-box"><span class="icon  icon-add" id="${item.id}"></span></div>
          <div class="text"><a href="${item.url}">${item.text}</a></div>
          <div class="leader">
            <span>${item.leader}</span>
            <span>(${item.subMenuNumber})</span>
          </div>
          <ul></ul>
        </li>
      `
    }
  })
  menuElement.html(menuStr)
}

$('.goal-tree').on('click', '.icon', function() {
  // 点击展开图标
  if ($(this).hasClass('icon-add')) {
    var _this = this
    // 再次展开不重新渲染子菜单
    if ($(_this).data('clicked')) {
      $(_this)
        .parent()
        .siblings('ul')
        .show()
      $(this)
        .removeClass('icon-add')
        .addClass('icon-minus')
      return
    }
    $.ajax({
      url: 'http://test.com',
      type: 'post',
      data: {
        id: _this.id
      },
      dataType: 'json',
      success: function(res) {
        randerMenu(
          res.data,
          $(_this)
            .parent()
            .siblings('ul')
        )
        $(_this)
          .parent()
          .siblings('ul')
          .show()
        $(_this).data('clicked', true)
      }
    })
    $(this)
      .removeClass('icon-add')
      .addClass('icon-minus')
  }
  // 点击收起图标
  else if ($(this).hasClass('icon-minus')) {
    $(this)
      .parent()
      .siblings('ul')
      .hide()
    $(this)
      .removeClass('icon-minus')
      .addClass('icon-add')
  }
  // 点击关闭图标
  else if ($(this).hasClass('icon-off')) {
    alert('当前目标下无子目标')
  }
})
