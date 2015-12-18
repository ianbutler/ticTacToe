// Logic
var gameLogic = (function(){
	
	var openSpots = [];

	$scope.openSpots = openSpots;

	var currentTurn = 'x';

	function makeAMove( spot ){
		if (openSpots[spot] === undefined) {
			openSpots[spot] = currentTurn;

			console.log("openSpots", openSpots);

			checkForWin(currentTurn);
			changeTurn();
		} else {
			alert('taken. try again.')
		}
	}

	function changeTurn(){
		currentTurn = (currentTurn === 'x')?'o':'x';
	}

	function checkForWin( marker ){

		// horizontal win
		for ( var i = 0; i < 9; i += 3 ) {
			if ( openSpots[i] === marker && openSpots[i+1] === marker && openSpots[i+2] === marker ) {
				alert( marker + ' wins. Horizontal!' );
			}
		}

		// vertical win
		for ( var i = 0; i < 3; i++ ) {
			if ( openSpots[i] === marker && openSpots[i+3] === marker && openSpots[i+6] === marker ) {
				alert( marker + ' wins.  Vertical!' );
			}
		}

		// diagnol win
		if (openSpots[4] === marker) {
			if ( (openSpots[0] === marker && openSpots[8] === marker) || (openSpots[2] === marker && openSpots[6] === marker) ) {
				alert( marker + ' wins. Diagnol!');
			}
		} 
	}

	return {
		makeAMove : makeAMove
	};

})();












