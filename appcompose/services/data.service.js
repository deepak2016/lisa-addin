(function () {
  'use strict';

  angular.module('officeAddin')
    .service('dataService', ['$q', '$http', dataService])
    .service('officeAddinService', ['$q', officeAddinService])
    .service('utilitiesService', ['$q', utilitiesService]);

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


  /**
   * Custom Angular service.
   */
  function officeAddinService($q) {

    // public signature of the service
    return {
      setSubject: setSubject,
      setBodyContent: setBodyContent,
      getBodyContent: getBodyContent
    };

    /** *********************************************************** */

    function setSubject(subject) {
      Office.context.mailbox.item.subject.setAsync(subject,
        function (asyncResult) {
          if (asyncResult.status == "failed") {
            console.log("Action failed with error: " + asyncResult.error.message);
          } else {
            console.log("Subject set successfully");
          }
        }
      );
    }

    function setBodyContent(body) {
      Office.context.mailbox.item.body.setAsync(
        body,
        { coercionType: "text" },
        function (asyncResult) {
          if (asyncResult.status == "failed") {
            console.log("Action failed with error: " + asyncResult.error.message);
          } else {
            console.log("Successfully set body text");
          }
        }
      );
    }

    function getBodyContent(body) {
      var deferred = $q.defer();
      Office.context.mailbox.item.body.getAsync(
        "text",
        function (asyncResult) {
          if (asyncResult.status == "failed") {
            deferred.reject(asyncResult.error);
          } else {
            deferred.resolve(asyncResult);
          }
        }
      );

      return deferred.promise;
    }

  }

  function utilitiesService($q) {
    return {
      getEmojiForScore: getEmojiForScore
    };

    function getEmojiForScore(score) {
      if (score < 30) {
      return {emoji:'😡', message: 'Your message is too negative'};
      }
      if (score < 50) {
        return {emoji:'😔', message:'Your message is a little negative'};
      }
      if (score < 75) {
        return {emoji:'😄', message:'Your message is just Meh!!'};
      }
      if (score <= 100) {
        return {emoji:'😎', message:'Your message is very positive, Keep rocking!!'};
      }
    }
  }
})();
