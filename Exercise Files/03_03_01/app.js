var myApp = angular.module("myApp", []);

myApp.value('appDetails', 
	{
		title: 'BookKart', 
		tagline: 'One Million books available',
	}
);

myApp.service('hexafy', function() {
    this.toHex = function (x) {
        return x.toString().substring(0, 16);
    }
});


myApp.controller("headerCtrl", ['$scope', 'hexafy', 'appDetails', function($scope, hexafy, appDetails){ 
	var vm = this;

	$scope.appDetails = 
	{
		title: appDetails.title, 
		tagline: hexafy.toHex(appDetails.tagline)
	};
}]);