var translations = {
    'fr': {},
    'en': {}
};

angular.module('justlogsit', ['ngRoute', 'ngMessages', 'ngCookies', 'pascalprecht.translate', 'vcRecaptcha'])

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider
            // .translations('en', translations['en'])
            .translations('fr', translations['fr'])
            .use('fr');
            // .registerAvailableLanguageKeys(['en', 'fr'], {
            //     'en_*': 'en',
            //     'fr_*': 'fr',
            //     '*': 'en'
            // })
            // .determinePreferredLanguage()
            // .fallbackLanguage('en')
            // .useCookieStorage();
        
    }]);