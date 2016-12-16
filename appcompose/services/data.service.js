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
        url: 'https://watson-api-explorer.mybluemix.net/alchemy-api/calls/text/TextGetEmotion?apikey=8d3ed7d77f71c7db6bb11e5f44ada2268569afc7&text=' + content + '&outputMode=json'
        // url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        // headers: {
        //   'Ocp-Apim-Subscription-Key': '89dace7b092540ecaf2d366010e00edc',
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json'
        // },
        // data: {
        //   "documents": [
        //     {
        //       "language": "en",
        //       "id": new Date().getTime(),
        //       "text": content
        //     }
        //   ]
        // }
      }).then(function (xhr) {
        console.log(xhr);
        var emotions = xhr.data.docEmotions;
        console.log(emotions);
        var score = 0;
        var emotion ;
      for (var i = 0; i < 5; i++) {
          var value = emotions[Object.keys(emotions)[i]];
          if (value > score) {
            score = value;
            emotion = Object.keys(emotions)[i];
          }
        }
        console.log(score, emotion);

        // deferred.resolve(xhr.data.documents[0].score * 100);
        deferred.resolve(12);
      }, function (xhr) {
        console.log("error");
        deferred.reject(xhr);
      });
      return deferred.promise;
    }

  }
})();
