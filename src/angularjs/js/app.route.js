import CONFIG from './config' 

angular.module(CONFIG["APP"])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true
    });

    $stateProvider.state("dashboard", {
      url: "/",
      controller: "DashboardController",
      controllerAs: "main",
      templateProvider: ($templateCache) => {
        return $templateCache.get('pages/dashboard.html');
      }
    })
    return $urlRouterProvider.otherwise('/');
  });
