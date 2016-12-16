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
      getQuotes: getQuotes,
      getTabs: getTabs
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
        { tag: 'inspire', message: 'Life is not a poem, it is a paragraph' },
        { tag: 'inspire', message: 'Life is not a poem, it is a paragraph' },
        { tag: 'inspire', message: 'Life is not a poem, it is a paragraph' },
        { tag: 'inspire', message: 'Life is not a poem, it is a paragraph' },
        { tag: 'inspire', message: 'Life is not a poem, it is a paragraph' }

      ];
    }

    function getTabs() {
      return [
        { title: 'Unified', icon: 'Brightness', content: 'unified' },
        { title: 'Canned', icon: 'Mail', content: 'canned' },
        { title: 'Analyse', icon: 'Mail', content: 'analyse' },
        { title: 'Emoji', icon: 'Emoji', content: 'emoji' },
        { title: 'Quotes', icon: 'Message', content: 'quote' },
        { title: 'TLDR', icon: 'PreviewLink', content: 'tldr' },
      ];
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
        var emotion;
        for (var i = 0; i < 5; i++) {
          var value = emotions[Object.keys(emotions)[i]];
          if (value > score) {
            score = value;
            emotion = Object.keys(emotions)[i];
          }
        }
        console.log(score, emotion);

        // deferred.resolve(xhr.data.documents[0].score * 100);
        deferred.resolve({emotion:emotion, score: score*100});
      }, function (xhr) {
        console.log("error");
        deferred.reject(xhr);
      });
      return deferred.promise;
    }

  }
})();
