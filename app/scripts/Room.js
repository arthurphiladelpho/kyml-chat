(function(){
	function Room($firebaseArray){
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		console.log(ref);
		console.log(rooms);
	}

	angular
		.module('kymlChat')
		.factory('Room', ['$firebaseArray', Room])
})();