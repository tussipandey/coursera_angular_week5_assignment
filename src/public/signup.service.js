(function () {
    "use strict";

    angular.module('signup')
        .constant('ApiPath', 'https://ntduong-angularjs-w5.herokuapp.com')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ["$http", "ApiPath"];
    function SignUpService($http, ApiPath) {
        var service = this;
        var registered = false;
        var userInfo = null;
        var menuItem = null;

        service.getMenuItem = function (shortName) {
            return $http({
                method: 'GET',
                url: ApiPath + '/menu_items/' + shortName + ".json"
            }).then(function (response) {
                menuItem = response.data;
                registered = true;
                return response.data;
            }).catch(function (error) {
                registered = false;
                menuItem = null;
            });
        };

        service.saveUserInfo = function (info) {
            userInfo = info;
        };

        service.getUserInfo = function () {
            if (registered) {
                return userInfo;
            }
            return null;
        };

        service.isRegistered = function () {
            return registered;
        };

        service.getRegisteredItem = function () {
            return menuItem;
        };
    }
})();