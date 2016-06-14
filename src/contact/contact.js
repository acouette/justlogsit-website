angular.module('justlogsit')
    .controller('ContactCtrl', ['$translate', '$http', function ($translate, $http) {
        var vm = this;
        vm.subject = 'option-1';
        vm.showErrors = false;

        var script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?onload=vcRecaptchaApiLoaded&render=explicit&hl=' + $translate.use();
        document.head.appendChild(script);

        vm.submit = function (form) {
            vm.showErrors = !form.$valid;
            if (form.$valid) {


                $.ajax({
                    url: "https://formspree.io/a.j.couette@gmail.com",
                    method: "POST",
                    data: {message: "hello!"},
                    dataType: "json"
                });


                $http({
                    method: 'POST',
                    url: 'https://formspree.io/a.j.couette@gmail.com',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {message: "hello!"}
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });


                console.log('contactCtrl.myRecaptchaResponse : ' + vm.myRecaptchaResponse);
                console.log('name : ' + vm.name);
                console.log('email : ' + vm.email);
                console.log('phone : ' + vm.phone);
                console.log('subject : ' + vm.subject);
                console.log('message : ' + vm.message);


                vm.submitted = true;

            }
        };
    }]);