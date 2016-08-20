import ModalController from './ModalController'

class ComponentController {
  constructor($uibModal) {

    this.modal = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'demoModal.html',
        controller: ModalController,
        controllerAs: 'md'
      })
    };
  }
}

export default ComponentController