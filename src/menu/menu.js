/**
 * Created by acouette on 05/06/16.
 */
angular.module('justlogsit')
    .controller('MenuCtrl', ['$translate', '$scope', function ($translate, $scope) {
        $scope.currentLang = $translate.use();
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
            $scope.currentLang = $translate.use();
        };
    }]);

translations['en']['menu'] = {
    "solutions": "Solutions",
    "services": "Services",
    "support": "Support",
    "news": "News",
    "about": "About",
    "contact": "Contact us",
    "goToApp": "Login"
};

translations['fr']['menu'] = {
    "solutions": "Solutions",
    "services": "Services",
    "support": "Support",
    "news": "Actualités",
    "about": "La société",
    "contact": "Contact",
    "goToApp": "Login"
};

