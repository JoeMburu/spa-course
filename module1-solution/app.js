(function() {
  'use strict';

  angular.module('lunchApp', [])
   .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter) {
    // declare global variables
    $scope.lunchMessage = "";
    $scope.lunchList = "";

    $scope.checkLunchList = function() {
      // declare local variables
      var list = "";
      var myList = [];

      list = $scope.lunchList;

      if(list.length > 0) {
        // when textbox contains input data
        list = list.split(/[, '']+/);
        // loop through and discard enter lists
        for(var i=0; i<list.length; i++) {
          if(list[i].toString() !== '') {
            myList.push(list[i].toString());
          }
        }
        // Check to see if list length is from 1-3
        if(myList.length >= 1 && myList.length <= 3) {
          //Output the message
          $scope.lunchMessage = "Enjoy!";
          // check if it is more than three
        } else if(myList.length > 3) {
          $scope.lunchMessage = "Too much!"
        }

      } else {
        // when textbox does not contain any input data
        $scope.lunchMessage = "Please enter data first";
      }
    };
  }
})();
