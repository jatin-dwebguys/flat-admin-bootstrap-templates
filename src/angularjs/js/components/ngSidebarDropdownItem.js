class ngSidebarDropdownItem {
    constructor() {
        this.restrict = 'A'
        this.scope = {}
    }

    controller($scope, $state) {
        $scope.state = $state;
    }

    link(scope, element, attrs) {
        const target = attrs.ngSidebarDropdownItem
        element.hover((e) => {
            const elm = $(`.sidebar-menu ul.sidebar-nav > li > a[ng-sidebar-dropdown-item="${target}"]`)
            const offset = elm.offset()
            const elmRect = elm.get(0).getBoundingClientRect()
            const rootElm = $(`.sidebar-menu .dropdown-root`)
            const targetElm = $(`.sidebar-menu .dropdown-root .dropdown-section[ng-sidebar-dropdown="${target}"]`)
            const targetElmRect = targetElm.get(0).getBoundingClientRect()

            switch(e.type) {
                case "mouseenter":
                  if(!targetElm.hasClass("active")) {
                    rootElm.css({ top: offset.top + (elmRect.height/2) - (targetElmRect.height/2), width: targetElmRect.width, height: targetElmRect.height })
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

export default ngSidebarDropdownItem