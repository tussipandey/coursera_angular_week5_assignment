(function () {
    'use strict';

    angular.module('signup', [])
        .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push('signupHttpInterceptor');
    }

})();