var fileApp = angular.module('fileApp', []);
var size = [ 'B', 'KB', 'MB' ];
var names = [ 'John Smith','Sophia Parkenson', 'Trinity Clapton', 'Katherine Adamson'];

fileApp.controller('FileListCtrl', function ($scope, $http, $filter) {
    $http.get('data/files.json').success(function(data) {
        $scope.files = data;
    });

    $scope.addItem = function (fileName) {

        var file = {
            'name':     fileName,
            'size':     '-',//Math.floor(Math.random()*1000) + ' ' + size[Math.floor(Math.random()*size.length)],
            'type':     'ic-create-folder',
            'uplby':    names[Math.floor(0*names.length)],
            'uplon':     $filter('date')(new Date(),'yyyy/MM/dd')
        };

        $scope.files.push(file);
        $scope.selectItem(file);
        $scope.renameItem(file);

    }
    $scope.rename=false;
    $scope.originalFile = null;

    $scope.renameItem = function (file) {
        if(file){
            $scope.fileName = file.name;
            $scope.rename=true;
        }
    }

    $scope.deleteItem = function (file) {
        var idx = $scope.files.indexOf(file);
        if(idx>=0) {
            $scope.files.splice(idx, 1);
        }
        $scope.originalFile = null;
    }

    $scope.doEnter = function(name) {
        $scope.originalFile.name = name;
        $scope.originalFile = null;
        $scope.rename=false;
    }

    $scope.doEsc = function() {
        $scope.originalFile = null;
        $scope.rename=false;
    }

    $scope.selectItem = function (file) {
        if($scope.rename==true && file!=$scope.originalFile){
            $scope.doEsc();
        }
        $scope.originalFile = file;

    };

});
fileApp.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
            if(event.which === 27) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEsc);
                });

                event.preventDefault();
            }
        });
    };
});
