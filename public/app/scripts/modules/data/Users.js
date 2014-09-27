angular.module('ggisland.ccnetwork.models.Users', ['$rootScope', 'parse-angular.enhance'])
.config(function($rootScope){
  $rootScope.currentUser = Parse.User;
  
  
});