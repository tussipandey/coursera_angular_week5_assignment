(function () {
    'use strict';

    angular.module('signup').controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService', '$rootScope'];
    function SignUpController(SignUpService, $rootScope) {
        var signupCtrl = this;
        var listener;

        signupCtrl.$onInit = function () {
            signupCtrl.noSuchItem = false;
            signupCtrl.saved = false;
            listener = $rootScope.$on('signup:noSuchMenuItem', onNoSuchMenuItem);
        };

        signupCtrl.$onDestroy = function () {
            listener();
        }

        function onNoSuchMenuItem(event, data) {
            signupCtrl.noSuchItem = data.on;
            signupCtrl.saved = !data.on;
        }

        signupCtrl.submit = function () {
            SignUpService.getMenuItem(signupCtrl.user.menuitem);
            SignUpService.saveUserInfo(signupCtrl.user);
        };
    }
})();