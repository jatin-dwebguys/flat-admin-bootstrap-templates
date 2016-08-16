import {
  DashboardController
} from './controllers'

export default function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $stateProvider.state("dashboard", {
    url: "/",
    controller: DashboardController,
    controllerAs: "main",
    templateUrl: 'pages/dashboard.html'
  })
  return $urlRouterProvider.otherwise('/');
}
