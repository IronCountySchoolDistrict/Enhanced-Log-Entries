import angular from 'angular';
import * as index from 'components/shared/index';

var eLogApp = angular.module('eLogMod', ['powerSchoolModule']);

eLogApp.controller('eLogCtrl', function($rootScope, $scope, $compile, eLogGetService, i18nUtils) {
  loadingDialog();

  $scope.eLogList = [];

  eLogGetService.geteLog('eLog-roles.json').then(function(retData) {
    for (var i = 0; i < retData.length; i++) {
      retData[i].DATE = i18nUtils.parseLocalizedDate(retData[i].DATE);
    }
    $scope.eLogList = retData;
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
