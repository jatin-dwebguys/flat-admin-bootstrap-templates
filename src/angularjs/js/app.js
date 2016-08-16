import CONFIG from './config' 
import route from './app.route'

angular.module(CONFIG["APP"], [
  'ui.router'
  ]).config(route)