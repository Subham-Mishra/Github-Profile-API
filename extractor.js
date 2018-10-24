 function GitCtrl($scope, $http) {
 	$scope.getGitInfo = function () {
 		$scope.userNotFound = false;
 		$scope.loaded = false;
 		$http.get("https://api.github.com/users/" + $scope.username).success(function (data) {
 			if (data.name == "") data.name = data.login;
 			$scope.user = data;
 			$scope.loaded = true;
 			console.log($scope.username);
 			GitHubCalendar(".calendar", $scope.username);
 		}).error(function () {
 			$scope.userNotFound = true;
 		});
 		$http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
 			$scope.repos = data;
 			$scope.reposFound = data.length > 0;
 		});
 	}
 }
