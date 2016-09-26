/* autocomplete search */
var countries = [
    { value: 'Andorra', data: 'AD' },
    { value: 'Zimbabwe', data: 'ZZ' }
];

$('#search').autocomplete({
  lookup: countries
});

const MOUSE_ENTER = "mouseenter"
const MOUSE_LEAVE = "mouseleave"


$(".navbar-collapse [data-dropdown]").hover(function(e) {
  const target = $(this).attr("data-dropdown")
  const elm = $(`.navbar-collapse ul.navbar-nav > li > a[data-dropdown="${target}"]`)
  const offset = elm.offset()
  const elmRect = elm.get(0).getBoundingClientRect()
  const rootElm = $(`.navbar-collapse .dropdown-root`)
  const bgArrowElm = $(`.navbar-collapse .dropdown-root .dropdown-background .arrow`)
  const targetElm = $(`.navbar-collapse .dropdown-root .dropdown-section[data-dropdown="${target}"]`)
  const targetElmRect = targetElm.get(0).getBoundingClientRect()
  const w = $(window).width()

  switch(e.type) {
    case MOUSE_ENTER:
      if(!targetElm.hasClass("active")) {
        rootElm.css({ right: w - elmRect.right, width: targetElmRect.width, height: targetElmRect.height })
        bgArrowElm.css({ width: elmRect.width })
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