angular.module('justlogsit')
    .controller('ContactCtrl', [function () {
        var vm = this;
        vm.showErrors = false;
        vm.submit = function (form) {
            vm.showErrors = !form.$valid;
            if (form.$valid) {
                console.log('firstname : ' + vm.firstname);
                console.log('lastname : ' + vm.lastname);
                console.log('email : ' + vm.email);
                console.log('phone : ' + vm.phone);
                console.log('message : ' + vm.message);


                vm.submitted = true;

            }
        };
    }]);