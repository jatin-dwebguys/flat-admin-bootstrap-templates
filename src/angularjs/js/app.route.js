import {
  AppController,
  DashboardController,
  MessageController
} from './controllers'

export default function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $stateProvider
    .state("main", {
      url: "/",
      controller: AppController,
      controllerAs: "main",
      templateUrl: 'main.html',
      abstract: true
    })
    .state("main.dashboard", {
      url: "",
      controller: DashboardController,
      controllerAs: "vm",
      templateUrl: 'pages/dashboard.html'
    })
    .state("main.messaging", {
      url: "messaging",
      controller: MessageController,
      controllerAs: "vm",
      templateUrl: 'pages/message.html'
    })
  return $urlRouterProvider.otherwise('/');
}
