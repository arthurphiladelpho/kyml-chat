(function(){

	function configure($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
      .state('home', {
          url: '/',
          // controller: 'LandingCtrl as landing',
          templateUrl: '/templates/home.html'
      })
	}

	angular
		.module('kymlChat', ['firebase', 'ui.router'])
})();