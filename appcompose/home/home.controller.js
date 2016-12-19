(function () {
  'use strict';

  angular.module('officeAddin')
    .controller('homeController', ['dataService', 'officeAddinService', 'utilitiesService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(dataService, officeAddinService, utilitiesService) {
    var vm = this;  // jshint ignore:line
    vm.tabs = dataService.getTabs();

    vm.selectedTab = vm.tabs[0];

    vm.cannedCards = dataService.getCannedMessages();
    vm.quotes = dataService.getQuotes();
    vm.dataObject = {};
    vm.state = {
      unified: { status: 'success', message: '' },
      canned: { status: 'success' },
      analyse: { status: 'loading' },
      emoji: { status: 'success' },
      quotes: { status: 'success' },
      tldr: { status: 'loading' }
    }

    vm.analysis = {};
    vm.emojis = {};
    vm.tldr = {};
    vm.isSmallEmail = true;

    // functions 
    vm.selectTab = function (tab) {
      vm.selectedTab = tab;
    }

    vm.addCannedMail = function addCannedMail(card) {
      officeAddinService.setSubject(card.title);
      officeAddinService.setBodyContent(card.content);
    }

    vm.visit = function(index) {
      vm.selectedTab = vm.tabs[index];
      document.getElementById(vm.selectedTab.title).click();
    }

    vm.addQuote = function(quote) {
      officeAddinService.setContentAtCursor(quote.message + ' - ' + quote.author);
    }

    vm.analyse = function () {
      officeAddinService.getBodyContent()
        .then(function (content) {
          analyseContent(content.value);
        }, function (error) {
          vm.state.analyse = getError("Error getting body content: " + error.message);
          console.log(error, error.message);
        });
    }
    init();

    function getError(message) {
      return { status: 'error', message: message };
    }

    function analyseContent(content) {
      dataService.analyseContent(content)
        .then(function (score) {
          vm.state.analyse.status = 'success';
          var emojiForScore = utilitiesService.getEmojiForEmotion(score.emotion);
          vm.analysis = { score: score.score, emoji: emojiForScore.emoji, message: emojiForScore.message }
        }, function (xhr) {
          vm.state.analyse = getError("Error fetching analysis");
        });
    }

    function startPollingForContent() {
      handleNewContent();
      setInterval(handleNewContent, 5000);
    }

    function handleNewContent() {
      officeAddinService.getBodyContent()
          .then(function (content) {
            var value = content.value;
            if (vm.lastKnownTextValue === value) {
              return;
            }

            vm.lastKnownTextValue = value;
            onChange(value);
          }, function () {
            
          });
    }

    function init() {
      initUiComponents();
      startPollingForContent();
    }

    function onChange(value) {
      analyseContent(value);
      checkEmailLength(value);
    }

    function checkEmailLength(content) {
      if (content.trim().length < 30) {
        vm.isSmallEmail = true;
      } else {
        vm.isSmallEmail = false;
      }
    }

    // setup fabric components
    function initUiComponents() {
      setTimeout(function () {
        var PivotElements = document.querySelectorAll(".ms-Pivot");
        for (var i = 0; i < PivotElements.length; i++) {
          new fabric['Pivot'](PivotElements[i]);
        }

        if (typeof fabric !== "undefined") {
          if ('Spinner' in fabric) {
            var elements = document.querySelectorAll('.ms-Spinner');
            var i = elements.length;
            var component;
            while (i--) {
              component = new fabric['Spinner'](elements[i]);
            }
          }
        }

        var TextFieldElements = document.querySelectorAll(".ms-TextField");
        for(var i = 0; i < TextFieldElements.length; i++) {
            new fabric['TextField'](TextFieldElements[i]);
        }
      }, 1000);
    };
  };

})()