myApp.service('PeepsService', function($http) {
  var sv = this;
  sv.addPeep = function(newPeep) {
    console.log('in addRecord:', newPeep);
    return $http({
      method: 'POST',
      url: '/peeps',
      data: newPeep
    });

  };
  sv.getPeeps = function() {
    console.log('in getRecords');
    return $http({
      method: 'GET',
      url: '/peeps',
    }).then(function(response) {
      sv.allMyPeeps = response;
    });
  };


  sv.deletePeep = function(id) {
    return $http({
      method: 'DELETE',
      url: '/peeps/' + id
    }).then(function(response){
      console.log(response);

    });
  };
});
