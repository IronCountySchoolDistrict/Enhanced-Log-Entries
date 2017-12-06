import angular from 'angular';
import * as index from 'components/shared/index';

var eLogApp = angular.module('eLogMod', ['powerSchoolModule']);

eLogApp.controller('eLogCtrl', function($rootScope, $scope, $compile, eLogGetService, i18nUtils) {
  loadingDialog();

  $scope.eLogList = [];

  eLogGetService.geteLog('eLog-roles.json').then(function(retData) {
    $scope.eLogList = retData.map(item => {
      item.DATE = new Date(item.DATE.YEAR, item.DATE.MONTH - 1, item.DATE.DAY);
      return item;
    });
    closeLoading();
  });
});

eLogApp.factory('eLogGetService', function($http) {
  return {
    geteLog: function(datafile) {
      return $http.get(datafile).then(function(result) {
        return result.data;
      });
    }
  }
});
