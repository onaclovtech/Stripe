// Stripe
// This really doesn't do much and shouldn't be guarenteed, but this is the general idea, basically
// in angularjs you would be able to do a $payment.$charge to charge a customer in theory.
// This guy should be returning promises of when it successfully send/fails charges.
//      License: MIT

  angular.module('payment', []).factory('$payment', ['$http', function($http) {
      return { $charge : function (api_key)
                  {
                          var method = 'GET';
                          var url = "https://api.stripe.com/v1/charges";
                          $http({method: method, url: url  + "-u " + api_key  + ":"}).
                          success(function(data, status) {}).
                          error(function(data, status) {});   
                  }
            };
    }
  ]);
