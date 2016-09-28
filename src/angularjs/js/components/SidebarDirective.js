class SidebarDirective {
    constructor() {
        this.restrict = 'A'
        this.scope = {}
    }

    controller($scope, $state) {
        $scope.state = $state;
    }

    link(scope, element, attrs) {
        console.log('state', scope.state)
    }
}

export default SidebarDirective