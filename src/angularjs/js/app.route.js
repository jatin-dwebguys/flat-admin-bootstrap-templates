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
    .state("main.uikits", {
      url: "uikits",
      abstract: true,
      templateUrl: 'pages/uikits/main.html'
    })
    .state("main.uikits.customize", {
      url: "/customize",
      templateUrl: 'pages/uikits/customize.html'
    })
    .state("main.uikits.components", {
      url: "/components",
      templateUrl: 'pages/uikits/components.html'
    })
    .state("main.uikits.card", {
      url: "/card",
      templateUrl: 'pages/uikits/card.html'
    })
    .state("main.uikits.table", {
      url: "/table",
      templateUrl: 'pages/uikits/table.html'
    })
    .state("main.uikits.pricing", {
      url: "/pricing",
      templateUrl: 'pages/uikits/pricing.html'
    })
    .state("main.uikits.timeline", {
      url: "/timeline",
      templateUrl: 'pages/uikits/timeline.html'
    })
    .state("main.uikits.chart", {
      url: "/chart",
      templateUrl: 'pages/uikits/chart.html'
    })
    .state("main.uikits.icons", {
      url: "/icons",
      templateUrl: 'pages/uikits/icons.html'
    })
  return $urlRouterProvider.otherwise('/');
}
