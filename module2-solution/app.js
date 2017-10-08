(function() {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
   .controller('ToBuyController', ToBuyController)
   .controller('AlreadyBoushtController', AlreadyBoughtController)
   .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    // getItems variable to fetch all the items in the service toBuyItems
    toBuy.getItems = ShoppingListCheckOffService.getToBuyItems();
    // getBoughtItems variable to fetch all the items in the service boughtItems
    toBuy.getBoughtItems = ShoppingListCheckOffService.boughtItems();

    //buy item method
    toBuy.buyItem = function(itemIndex) {
      // get item
      var item = {
        name: toBuy.getItems[itemIndex].name,
        quantity: toBuy.getItems[itemIndex].quantity
      };

      // add item to  service boughtItems
      toBuy.getBoughtItems.push(item);
      // delete item from service toBuyItems
      toBuy.getItems.splice(itemIndex, 1);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    // getBoughtItems variable to fetch all the items in the service boughtItems
    alreadyBought.getBoughtItems = ShoppingListCheckOffService.boughtItems();

  }

  // Service
  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "honey",
        quantity: 15
      },
      {
        name: "energy drink",
        quantity: 40
      },
      {
        name: "oat",
        quantity: 30
      },
      {
        name: "ice cream",
        quantity: 20
      },
    ];
    var boughtItems = [];

    service.toBuy = function(itemIndex) {

    };

    service.boughtItems = function() {
      return boughtItems;
    };

    service.getToBuyItems = function() {
      return toBuyItems;
    };


  }
})();
