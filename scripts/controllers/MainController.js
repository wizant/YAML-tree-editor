(function(){
    'use strict';

    angular.module('YAML-tree-editor')
        .controller('MainController', [MainController]);

    function MainController(){
        var vm = this;

        vm.title = 'Yaml tree';
    }

})();

