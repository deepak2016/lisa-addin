(function () {
  'use strict';

  angular.module('officeAddin')
    .service('officeAddinService', ['$q', officeAddinService]);

  /**
   * Custom Angular service.
   */
  function officeAddinService($q) {

    // public signature of the service
    return {
      setSubject: setSubject,
      setBodyContent: setBodyContent
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

  }
})();
