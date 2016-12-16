(function () {
  'use strict';

  angular.module('officeAddin')
    .service('utilitiesService', ['$q', utilitiesService]);

  function utilitiesService($q) {
    return {
      getEmojiForEmotion: getEmojiForEmotion
    };

    function getEmojiForEmotion(emotion) {
      if (emotion == 'fear') {
      return {emoji:'😑', message: 'You seem a little fearful in the mail'};
      }
      if (emotion == 'disgust') {
        return {emoji:'😨', message:'Are you trying to show disgust in the mail?'};
      }
      if (emotion == 'anger') {
        return {emoji:'😡', message:'Looks like you are very angry'};
      }
      if (emotion == 'sadness') {
        return {emoji:'😓', message:'You appear very sad in the mail'};
      }
      if (emotion == 'joy') {
        return {emoji:'😎', message:'Your message is very positive, Keep rocking!!'};
      }
    }
  }
})();
