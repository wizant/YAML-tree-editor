(function(){

    'use strict';

    angular.module('YAML-tree-editor')
    .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url : '/',
                views : {
                    'content@' : {
                        templateUrl : 'templates/main.html',
                        controller  : 'MainController',
                        controllerAs: 'main'
                    }
                }
            })
    }

})();
