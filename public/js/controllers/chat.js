(function() {
  app.controller('chatCtrl', [
    '$scope', '$http', function($scope, $http) {
      return $scope.name = 'Chat App';
    }
  ]);

}).call(this);
