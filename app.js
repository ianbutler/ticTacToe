angular.module('app', [])
	.controller('AppCtrl', ['$scope', function($scope) {

		var openSpots = [],
			counter = 0,
			currentTurn = 'x';

		openSpots.length = 9;

		$scope.openSpots = openSpots;
		
		$scope.currentTurn = currentTurn;

		$scope.makeAMove = function( spot ){

			if (openSpots[spot] === undefined) {
				openSpots[spot] = currentTurn;

				checkForWin(currentTurn);
				changeTurn();

				counter++;
				if ( counter === 9 ) {
					$scope.reset();
				}

			} else {
				alert('taken. try again.')
			}
		}

		$scope.reset = function(){
			counter = 0;
			openSpots = [];
			openSpots.length = 9;
			$scope.openSpots = openSpots;
		};

		function changeTurn(){
			currentTurn = (currentTurn === 'x')?'o':'x';
			$scope.currentTurn = currentTurn;
		}

		function checkForWin( marker ){
			// horizontal win
			for ( var i = 0; i < 9; i += 3 ) {
				if ( openSpots[i] === marker && openSpots[i+1] === marker && openSpots[i+2] === marker ) {
					alert( marker + ' wins. Horizontal!' );
					$scope.reset();
				}
			}
			// vertical win
			for ( var i = 0; i < 3; i++ ) {
				if ( openSpots[i] === marker && openSpots[i+3] === marker && openSpots[i+6] === marker ) {
					alert( marker + ' wins.  Vertical!' );
					$scope.reset();
				}
			}
			// diagnol win
			if (openSpots[4] === marker) {
				if ( (openSpots[0] === marker && openSpots[8] === marker) || (openSpots[2] === marker && openSpots[6] === marker) ) {
					alert( marker + ' wins. Diagnol!');
					$scope.reset();
				}
			} 
		}

	}]);