var translations = {
    'fr': {},
    'en': {}
};

angular.module('justlogsit', ['ngRoute', 'ngMessages', 'pascalprecht.translate'])

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider
            .translations('en', translations['en'])
            .translations('fr', translations['fr'])
            .determinePreferredLanguage();
    }])

;