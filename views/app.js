var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

        // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
        .when('/', {
            templateUrl: './index.html',
            controller: 'HomeCtrl',
        })

        .when('/marcas', {
            templateUrl: './marcas.html',
            controller: 'MarcasCtrl',
        })

        // caso não seja nenhum desses, redirecione para a rota '/'
        .otherwise({ redirectTo: '/' });
});