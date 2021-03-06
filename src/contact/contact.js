angular.module('justlogsit')
    .controller('ContactCtrl', ['$translate', '$http', function ($translate, $http) {

        var script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?onload=vcRecaptchaApiLoaded&render=explicit&hl=' + $translate.use();
        document.head.appendChild(script);

        var vm = this;
        vm.subject = 'option-1';
        vm.showErrors = false;

        vm.submit = function (form) {
            vm.showErrors = true;
            vm.submitted = false;
            vm.errorWhileSending = false;

            console.log('contactCtrl.myRecaptchaResponse : ' + vm.myRecaptchaResponse);
            if (form.$valid) {
                var message = 'Nom : ' + vm.name + '\n' +
                    'Email : ' + vm.email + '\n' +
                    'Tél : ' + vm.phone + '\n' +
                    'Sujet : ' + vm.subject + '\n' +
                    'Message : ' + vm.message + '\n';
                var recipient = 'a.j.couette@gmail.com';

                $http({
                    method: 'POST',
                    url: 'https://formspree.io/' + recipient,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {message: message}
                }).then(function successCallback() {
                    vm.submitted = true;
                }, function errorCallback(response) {
                    console.log(response);
                    vm.errorWhileSending = true;
                });
            }
        };
    }]);


translations['en']['contact'] = {
    "header": "Nous conctacter",
    "formHeader": "Formulaire de contact",
    "formHeaderMandatoryField": "Champ obligatoire",
    "formHeaderName": "Nom",
    "formHeaderEmail": "Adresse email",
    "formHeaderInvalidEmail": "Adresse email invalide",
    "formHeaderPhone": "Téléphone",
    "formHeaderReason1": "Demande d’informations",
    "formHeaderReason2": "Demander une démo",
    "formHeaderReason3": "Demande de support",
    "formHeaderReason4": "Signaler une anomalie",
    "formHeaderMessage": "Entrez votre message ici",
    "formHeaderMandatoryCaptcha": "La saisie du captcha est obligatoire",
    "formHeaderSend": "Envoyer",
    "formHeaderSent": "Votre demande a bien été prise en compte, nous revenons vers vous dès que possible.",
    "formHeaderErrorWhileSending": "Une erreur est survenue lors de l'envoi de votre message, merci de nous contacter directement par email ou téléphone",
};

translations['fr']['contact'] = {
    "header": "Nous conctacter",
    "formHeader": "Formulaire de contact",
    "formHeaderMandatoryField": "Champ obligatoire",
    "formHeaderName": "Nom",
    "formHeaderEmail": "Adresse email",
    "formHeaderInvalidEmail": "Adresse email invalide",
    "formHeaderPhone": "Téléphone",
    "formHeaderReason1": "Demande d’informations",
    "formHeaderReason2": "Demander une démo",
    "formHeaderReason3": "Demande de support",
    "formHeaderReason4": "Signaler une anomalie",
    "formHeaderMessage": "Entrez votre message ici",
    "formHeaderMandatoryCaptcha": "La saisie du captcha est obligatoire",
    "formHeaderSend": "Envoyer",
    "formHeaderSent": "Votre demande a bien été prise en compte, nous revenons vers vous dès que possible.",
    "formHeaderErrorWhileSending": "Une erreur est survenue lors de l'envoi de votre message, merci de nous contacter directement par email ou téléphone",
};