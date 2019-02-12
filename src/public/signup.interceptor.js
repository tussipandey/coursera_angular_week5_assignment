(function () {
    'use strict';
    angular.module('signup').factory('signupHttpInterceptor', SignUpHttpInterceptor);

    SignUpHttpInterceptor.$inject = ["$rootScope", "$q"];
    function SignUpHttpInterceptor($rootScope, $q) {
        var evtName = "signup:noSuchMenuItem";

        return {
            response: function (response) {
                $rootScope.$broadcast(evtName, { on: false });
                return response;
            },

            responseError: function (response) {
                $rootScope.$broadcast(evtName, { on: true });
                return $q.reject(response);
            }
        };
    }
})();