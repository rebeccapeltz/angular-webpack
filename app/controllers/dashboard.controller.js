'use strict';

DashboardController.$inject = ['GithubStatusService', '$scope'];

function DashboardController(gh, $scope) {
  var _this = this;
  _this.github = '';
  gh.getStatus().success(function(status) {
    _this.github = status;
  });

  _this.test = 'testing';
  _this.checkModel = {
    left: false,
    middle: true,
    right: false
  };

  _this.checkResults = [];

  $scope.$watchCollection('checkModel', function() {
    _this.checkResults = [];
    angular.forEach(_this.checkModel, function(value, key) {
      if (value) {
        _this.checkResults.push(key);
      }
    });
  });

}
module.exports = DashboardController;