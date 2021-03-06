'use strict';
angular.module('canoeApp.directives')
  .directive('showTabs', function($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function($scope, $el) {
        $scope.$on("$ionicView.beforeEnter", function(event, data) {
          $timeout(function() {
            $rootScope.hideTabs = '';
            $rootScope.$apply();
          });
        });
      }
    };
  });
