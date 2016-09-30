import CONFIG from './config'

import {
  ngSidebarDropdown,
  ngSidebarDropdownItem,
  ngNavbarDropdown,
  ngNavbarDropdownItem
} from './components'

export function RegisterDirective() {
  
  angular.module(CONFIG["APP"])
    .directive("ngSidebarDropdown", () => new ngSidebarDropdown())
    .directive("ngSidebarDropdownItem", () => new ngSidebarDropdownItem())
    .directive("ngNavbarDropdown", () => new ngNavbarDropdown())
    .directive("ngNavbarDropdownItem", () => new ngNavbarDropdownItem())

}