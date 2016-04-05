(function(angular) {
	'use strict';
	angular.module('urlFetchAndParse', ['ngSanitize'])
  	.controller('mainController', function($scope, $http) {

    		$scope.summary = [];
    		$scope.source = 'Source Code Window';
    		$scope.myUrl = '';

    		$scope.highlightTag = function(key) {
        		$scope.source = parseUrl.highlightTag(key);
    		};

    		$scope.fetchUrl = function() {
        		$scope.source = "Loading...";
        		$http.get("url.php?url="+$scope.myUrl)
        			.then(function(response) {
                			$scope.source = $('<div/>').text(response.data).html();
                			parseUrl.setSource(response.data);
                			var summary = parseUrl.getTagSummary();
                			$scope.summary = [];
                			for(var property in summary) {
                        			$scope.summary.push({key: property, value: summary[property]});
                			}
        			});
    		};

  });
})(window.angular);
