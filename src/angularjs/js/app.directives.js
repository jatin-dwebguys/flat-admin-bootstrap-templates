import CONFIG from './config'

import {
  ngSidebarDirective
} from './components'

export function RegisterDirective() {
  
  angular.module(CONFIG["APP"])
    .directive("ngSidebar", () => new ngSidebarDirective)

}