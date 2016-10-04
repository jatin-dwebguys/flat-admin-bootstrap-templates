const MOUSE_ENTER = "mouseenter"
const MOUSE_LEAVE = "mouseleave"

$(".sidebar-menu [data-dropdown]").bind("mouseenter mouseleave click", function(e) {
  const target = $(this).attr("data-dropdown")
  const elm = $(`.sidebar-menu ul.sidebar-nav > li > a[data-dropdown="${target}"]`)
  const offset = elm.offset()
  const elmRect = elm.get(0).getBoundingClientRect()
  const rootElm = $(`.sidebar-menu .dropdown-root`)
  const targetElm = $(`.sidebar-menu .dropdown-root .dropdown-section[data-dropdown="${target}"]`)
  const targetElmRect = targetElm.get(0).getBoundingClientRect()

  switch(e.type) {
    case MOUSE_ENTER:
      if(!targetElm.hasClass("active")) {
        rootElm.css({ top: offset.top + (elmRect.height/2) - (targetElmRect.height/2), width: targetElmRect.width, height: targetElmRect.height })
        rootElm.addClass("active")
        targetElm.addClass("active")
      }
      break;
    case MOUSE_LEAVE:
      rootElm.css({ height: 0 })
      rootElm.removeClass("active")
      targetElm.removeClass("active")
      break;
  }
})