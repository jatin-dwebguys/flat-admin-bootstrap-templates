import CONFIG from './config'

import {
  ngSidebarDropdown,
  ngSidebarDropdownItem
} from './components'

export function RegisterDirective() {
  
  angular.module(CONFIG["APP"])
    .directive("ngSidebarDropdown", () => new ngSidebarDropdown())
    .directive("ngSidebarDropdownItem", () => new ngSidebarDropdownItem())

}