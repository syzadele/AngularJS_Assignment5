(function () {
'use strict';

angular.module('public')
.controller('MyInfoPageController', MyInfoPageController);


MyInfoPageController.$inject=['MenuService'];

function MyInfoPageController (MenuService) {
  var ctrl = this;
  ctrl.subscribInfo = MenuService.subscribInfo;
  ctrl.isSigneUp = false;
  if (ctrl.subscribInfo != undefined && ctrl.subscribInfo.firstName != undefined) {
    ctrl.isSigneUp = true;
  }

  console.log("ctrl.subscribInfo : " + JSON.stringify(ctrl.subscribInfo));
}


})();
