app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('MarcasCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});