(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', ['dataService', 'officeAddinService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(dataService, officeAddinService){
    var vm = this;  // jshint ignore:line
    vm.title = 'Home';

    vm.tabs = [
      {title: 'Unified', icon: 'Brightness', content: 'unified'},
      {title: 'Canned', icon: 'Mail', content: 'canned'},
      {title: 'Analyse', icon: 'Mail', content: 'analyse'},
      {title: 'Emoji', icon: 'Emoji', content: 'emoji'},
      {title: 'Quotes', icon: 'Message', content: 'quote'},
      {title: 'TLDR', icon: 'PreviewLink', content: 'tldr'},
    ];

    vm.selectedTab = vm.tabs[0];
    
    vm.cannedCards = [
      {title:'Leave Letter One', content:'Please grant me a leave as I have to go attend the wedding of my dog, Chichi'},
      {title:'Leave Letter Two', content:'Please grant me a leave as I have to go attend the wedding of my dog, Lapoo'}
    ]
    vm.dataObject = {};
    
    // functions 
    vm.selectTab = function(tab) {
      vm.selectedTab = tab;
    }

    vm.addCannedMail = function addCannedMail(card){
      officeAddinService.setSubject(card.title);
      officeAddinService.setBodyContent(card.content);
    }

    vm.analyse = function() {
      
    }
    init();    

    function getDataFromService(){
      dataService.analyseContent('Here is a really long sad email')
        .then(
          function(xhr) {
            var data = xhr.data;
          }, function() {
            console.log('failure', data);
          }
        );
    }

    function init() {
      initUiComponents();
      getDataFromService();
    }

    function initUiComponents() {
      setTimeout(function() {
        var PivotElements = document.querySelectorAll(".ms-Pivot");
        for(var i = 0; i < PivotElements.length; i++) {
          new fabric['Pivot'](PivotElements[i]);
        }
      }, 1000);
    };
  };

})()