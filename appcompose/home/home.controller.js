(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', ['dataService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(dataService){
    var vm = this;  // jshint ignore:line
    vm.title = 'Home';
    var data= ["hello","dolly","bbye"];
    vm.tabs = [
      {title: 'Unified', icon: 'Brightness', content: 'unified'},
      {title: 'Canned', icon: 'Mail', content: data},
      {title: 'Enoji', icon: 'Emoji', content: 'emoji'},
      {title: 'Quotes', icon: 'Message', content: 'quote'},
      {title: 'TLDR', icon: 'PreviewLink', content: 'tldr'},
    ];
    vm.cannedCards = [
      {title:'Leave Letter One', content:'Please grant me a leave as I have to go attend the wedding of my dog, Chichi'},
      {title:'Leave Letter Two', content:'Please grant me a leave as I have to go attend the wedding of my dog, Lapoo'}
    ]
    vm.dataObject = {};

    init();
vm.addCannedMail = function addCannedMail(card){
  setSubject(card.title);
  setBodyContent(card.content)
}

    function getDataFromService(){
      dataService.getData()
        .then(function(response){
          vm.dataObject = response;
        });
    }

    function init() {
      initComponents();
      getDataFromService();
    }

    function initComponents() {
      setTimeout(function() {
        var PivotElements = document.querySelectorAll(".ms-Pivot");
        for(var i = 0; i < PivotElements.length; i++) {
          new fabric['Pivot'](PivotElements[i]);
        }
      }, 1000);
    }
  }

})();

function setBodyContent(body) {
  Office.context.mailbox.item.body.setAsync(
      body,
      {coercionType: "text"},
      function (asyncResult) {
        if (asyncResult.status == "failed") {
          console.log("Action failed with error: " + asyncResult.error.message);
        } else {
          console.log("Successfully set body text");
        }
      }
  );
}

function  setSubject(subject){
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