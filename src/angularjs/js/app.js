import CONFIG from './config' 
import route from './app.route'
import { RegisterDirective } from './app.directives'

angular.module(CONFIG["APP"], [
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'angular-chartist',
    'hljs'
  ])
  .config(route)

/* register all directives */
RegisterDirective()