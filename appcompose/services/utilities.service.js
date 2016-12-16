(function () {
  'use strict';

  angular.module('officeAddin')
    .service('utilitiesService', ['$q', utilitiesService]);

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
        return {emoji:'🙂', message:'Your message is just Meh!!'};
      }
      if (score <= 100) {
        return {emoji:'😎', message:'Your message is very positive, Keep rocking!!'};
      }
    }
  }
})();
