(function () {
  'use strict';

  angular.module('officeAddin')
    .service('dataService', ['$q', '$http', dataService])

  /**
   * Custom Angular service.
   */
  function dataService($q, $http) {

    // public signature of the service
    return {
      getData: getData,
      getStaticData: getStaticData,
      analyseContent: analyseContent
    };

    /** *********************************************************** */

    function getData() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          propertyOne: 'valueOne',
          propertyTwo: 'valueTwo',
        }
      ]);

      return deferred.promise;
    }

    function getStaticData() {
      return 'blah';
    }

    function analyseContent(content) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        headers: {
          'Ocp-Apim-Subscription-Key': '89dace7b092540ecaf2d366010e00edc',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: {
          "documents": [
            {
              "language": "en",
              "id": new Date().getTime(),
              "text": content
            }
          ]
        }
      }).then(function(xhr) {
        deferred.resolve(xhr.data.documents[0].score * 100);
      }, function(xhr) {
        deferred.reject(xhr);
      });
      return deferred.promise;
    }

  }
})();
