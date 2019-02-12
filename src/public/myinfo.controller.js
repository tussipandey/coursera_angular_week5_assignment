(function () {
    'use strict';
    angular.module("public").controller("MyInfoController", MyInfoController);

    MyInfoController.$inject = ['SignUpService'];
    function MyInfoController(SignUpService) {
        var myinfoCtrl = this;
        myinfoCtrl.registered = SignUpService.isRegistered();

        var userInfo = SignUpService.getUserInfo();
        var menuItem = SignUpService.getRegisteredItem();

        if (userInfo !== null) {
            myinfoCtrl.firstname = userInfo.firstname;
            myinfoCtrl.lastname = userInfo.lastname;
            myinfoCtrl.email = userInfo.email;
            myinfoCtrl.phone = userInfo.phone;
        }
        if (menuItem !== null) {
            myinfoCtrl.menuTitle = menuItem.name;
            myinfoCtrl.menuDesc = menuItem.description;
            myinfoCtrl.menuShortName = menuItem.category_short_name;
        }
    }
})();