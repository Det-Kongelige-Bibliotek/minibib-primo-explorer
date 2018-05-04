(function() {
    angular.module('docsTemplateUrlDirective', [])
        .controller('CookieController', ['$scope'])
        .directive('cookie_da_DK', function () {
            console.log('hhhj');
            return {
                templateUrl: 'cookie_da_DK.html'
            };
        });
});