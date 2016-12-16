(function () {
  'use strict';
  console.log('test');
  angular.module('officeAddin')
    .service('testService', [testService]);


    function testService() {
        return {
            getData: getData
        };

        function getData() {
            return 'data';
        }
    }


})();