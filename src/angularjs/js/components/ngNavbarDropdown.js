class ngNavbarDropdown {
    constructor() {
        this.restrict = 'A'
        this.scope = {}
    }

    controller($scope, $state) {
        $scope.state = $state;
    }

    link(scope, element, attrs) {
        const target = attrs.ngNavbarDropdown
        element.hover((e) => {
            const elm = $(`.navbar-collapse ul.navbar-nav > li > a[ng-navbar-dropdown-item="${target}"]`)
            const offset = elm.offset()
            const elmRect = elm.get(0).getBoundingClientRect()
            const rootElm = $(`.navbar-collapse .dropdown-root`)
            const bgArrowElm = $(`.navbar-collapse .dropdown-root .dropdown-background .arrow`)
            const targetElm = $(`.navbar-collapse .dropdown-root .dropdown-section[ng-navbar-dropdown="${target}"]`)
            const targetElmRect = targetElm.get(0).getBoundingClientRect()
            const w = $(window).width()

            switch(e.type) {
                case "mouseenter":
                    if(!targetElm.hasClass("active")) {
                        rootElm.css({ right: w - elmRect.right, width: targetElmRect.width, height: targetElmRect.height })
                        bgArrowElm.css({ width: elmRect.width })
                        rootElm.addClass("active")
                        targetElm.addClass("active")
                    }
                    break;
                case "mouseleave":
                  rootElm.css({ height: 0 })
                  rootElm.removeClass("active")
                  targetElm.removeClass("active")
                  break;
            }
        });
    }
}

export default ngNavbarDropdown