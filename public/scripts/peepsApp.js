var myApp = angular.module('myApp', []);

myApp.controller('WhereMyPeeps', function(PeepsService) {
  var vm = this;
 vm.allMyPeeps = [];
  vm.newPeep = function() {
    console.log('in newPeep');

    var peepToAdd = {
      name: vm.nameIn,
      location: vm.locationIn
    }; //end peepToAdd
    PeepsService.addPeep(peepToAdd);
  }; //end whereMyPeepsAt
  vm.whereMyPeepsAt = function() {
    console.log('in whereMyPeepsAt');
    PeepsService.getPeeps().then(function() {
      console.log('back in controller:', PeepsService.allMyPeeps);
      vm.allMyPeeps = PeepsService.allMyPeeps.data;

    });
  }; //end whereMyPeepsAt

  vm.deletePeep = function(index) {
    console.log(index);
    var id = vm.allMyPeeps[index]._id;
    console.log(id);

    PeepsService.deletePeep(id);
    vm.whereMyPeepsAt();
  };
}); // end controller
