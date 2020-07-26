(function () {
'use strict';

angular.module('public')
.controller('myInfoPageController', MyInfoPageController);


MyInfoPageController.$inject=['MenuService'];

function MyInfoPageController (MenuService) {
  this.subscribInfo = MenuService.subscribInfo;
  this.isSigneUp = false;
  if (this.subscribInfo != undefined && this.subscribInfo != {}) {
    this.isSigneUp = true;
  }

  console.log("this.subscribInfo : " + JSON.stringify(this.subscribInfo));
}


})();
