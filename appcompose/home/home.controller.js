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
    vm.tabs = [
      {title: 'Unified', icon: 'Brightness', content: 'unified'},
      {title: 'Canned', icon: 'Mail', content: 'canned'},
      {title: 'Enoji', icon: 'Emoji', content: 'emoji'},
      {title: 'Quotes', icon: 'Message', content: 'quote'},
      {title: 'TLDR', icon: 'PreviewLink', content: 'tldr'},
    ];
    vm.dataObject = {};

    init();

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
