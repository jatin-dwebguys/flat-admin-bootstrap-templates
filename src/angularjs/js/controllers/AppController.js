import CONFIG from '../config' 

class AppController {
  constructor($rootScope, $sce, $state) {
    this.app = {
      title: $sce.trustAsHtml(CONFIG["TITLE"])
    }
    this.page = getPageConfig($sce, $state)

    $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
      this.page = getPageConfig($sce, $state)
    })
  }
}

export default AppController

function getPageConfig($sce, $state) {
  const config = CONFIG["PAGE"][$state.current.name]
  return {
    ...config,
    title: $sce.trustAsHtml(config.title)
  }
}