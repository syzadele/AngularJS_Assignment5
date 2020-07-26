(function () {
'use strict';

angular.module('public')
.controller('signeUpPageController', SigneUpPageController);

SigneUpPageController.$inject=['MenuService'];
function SigneUpPageController (MenuService) {
  var ctrl = this;
  ctrl.firstName = "";
  ctrl.lastName = "";
  ctrl.email = "";
  ctrl.phoneNumber = "";
  ctrl.favoriteDish = "";
  ctrl.menuItem = [];
  ctrl.isSubmit = false;
  ctrl.hasResponse = false;
  MenuService.subscribInfo = {};

  ctrl.setIsNotSubmit = function() {
    ctrl.isSubmit = false;
  };


  ctrl.getFavoriteDishMenu = function (favaroiteDish) {
    ctrl.menuItem = [];
    ctrl.hasResponse = false;
    var promise = MenuService.getMyMenuItems(favaroiteDish);
    promise.then(function (response) {
      ctrl.menuItem = response.data;
      ctrl.hasResponse = true;
      console.log("ctrl.menuItem : "+ JSON.stringify(ctrl.menuItem.name));
      MenuService.subscribInfo= {
        'firstName' : ctrl.firstName,
        'lastName' : ctrl.lastName,
        'email' : ctrl.email,
        'phoneNumber' : ctrl.phoneNumber,
        'favoriteDish' : ctrl.menuItem
      };
      ctrl.isSubmit = true;
      console.log("MenuService.subscribInfo : "+ JSON.stringify(MenuService.subscribInfo));
    }).catch(function (error) {
      console.log("error");
      ctrl.menuItem = [];
      ctrl.isSubmit = true;
    });

  };

}


})();
