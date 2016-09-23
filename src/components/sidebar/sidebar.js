const MOUSE_ENTER = "mouseenter"
const MOUSE_LEAVE = "mouseleave"

// $(".app-sidebar .sidebar-menu, .app-container, .app-messaging ul.group, .app-messaging ul.chat").perfectScrollbar({
//   suppressScrollX: true
// });

$(".sidebar-menu [data-dropdown]").hover(function(e) {
  const target = $(this).attr("data-dropdown")
  const elm = $(`.sidebar-menu ul.sidebar-nav > li > a[data-dropdown="${target}"]`)
  const offset = elm.offset()
  const rootElm = $(`.sidebar-menu .dropdown-root`)
  const targetElm = $(`.sidebar-menu .dropdown-root .dropdown-section[data-dropdown="${target}"]`)
  const targetElmRect = targetElm.get(0).getBoundingClientRect()

  switch(e.type) {
    case MOUSE_ENTER:
      if(!targetElm.hasClass("active")) {
        rootElm.css({ top: offset.top, width: targetElmRect.width, height: targetElmRect.height })
        rootElm.addClass("active")
        targetElm.addClass("active")
      }
      break;
    case MOUSE_LEAVE:
      rootElm.removeClass("active")
      targetElm.removeClass("active")
      break;
  }
})