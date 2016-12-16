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
      analyseContent: analyseContent,
      getCannedMessages: getCannedMessages,
      getQuotes: getQuotes
    };

    /** *********************************************************** */

    function getCannedMessages() {
      return [
        { title: 'Leave Letter One', content: 'Please grant me a leave as I have to go attend the wedding of my dog, Chichi' },
        { title: 'Leave Letter Two', content: 'Please grant me a leave as I have to go attend the wedding of my dog, Lapoo' }
      ];
    }

    function getQuotes() {
      return [
        {tag: 'inspire', message: 'Life is not a poem, it is a paragraph'},
        {tag: 'inspire', message: 'Life is not a poem, it is a paragraph'},
        {tag: 'inspire', message: 'Life is not a poem, it is a paragraph'},
        {tag: 'inspire', message: 'Life is not a poem, it is a paragraph'},
        {tag: 'inspire', message: 'Life is not a poem, it is a paragraph'}

      ];
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
      }).then(function (xhr) {
        deferred.resolve(xhr.data.documents[0].score * 100);
      }, function (xhr) {
        deferred.reject(xhr);
      });
      return deferred.promise;
    }

  }
})();
