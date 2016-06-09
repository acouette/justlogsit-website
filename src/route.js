'use strict';

angular
    .module('justlogsit')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'src/home/home.html'
            })
            .when('/solutions', {
                templateUrl: 'src/solutions/solutions.html',
                controller: 'solutionsCtrl',
                controllerAs: 'solutionsCtrl'
            })
            .when('/services', {
                templateUrl: 'src/services/services.html'
            })           
            .when('/news', {
                templateUrl: 'src/news/news.html'
            })
            .when('/about', {
            templateUrl: 'src/about/about.html'
        })
            .when('/contact', {
                templateUrl: 'src/contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(false);
    });