// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		GameController.$inject = ['$firebaseObject', '$firebaseArray'];

		function GameController($firebaseObject, $firebaseArray){
		var self = this;


		// this describes who is currently playing
		var turn=getPlayer();
		self.gameplay = gamePlay();

		self.gameplay.board = [
			{value: ""},
			{value: ""},
			{value: ""},
			{value: ""},
			{value: ""},
			{value: ""},
			{value: ""},
			{value: ""},
			{value: ""}
		];
// Saves the data on the board.
		self.gameplay.$save(self.gameplay);


 function gamePlay(){
    var ref = new Firebase('https://myfirebasefirstapp.firebaseio.com/game');
    var gameplay = $firebaseObject(ref);
    return gameplay;
  }


// This randomly selects who gets to go first.
function getPlayer() {
    var randomNumber = Math.random();
    if (randomNumber < 0.50)
        {
        return 1;
        }

    else if (randomNumber > 0.50)
        {
        return 2;
         }
}



		// self.testfunc = function() {
		// 	var toprow = self.boxList[0].status + self.boxList[1].status + self.boxList[2].status;
		// 	console.log(toprow);
		// };

//logic for X as winner
function getWinnerX() {
if( 	( self.gameplay.board[0].value === 'X') && (self.gameplay.board[1].value === 'X')  && (self.gameplay.board[2].value === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameplay.board[0].value === 'X') && (self.gameplay.board[3].value === 'X')  && (self.gameplay.board[6].value === 'X') )
		 {
		alert('X is Winner');
		}

if( 	( self.gameplay.board[2].value === 'X') && (self.gameplay.board[4].value === 'X')  && (self.gameplay.board[6].value === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameplay.board[6].value === 'X') && (self.gameplay.board[7].value === 'X')  && (self.gameplay.board[8].value === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameplay.board[0].value === 'X') && (self.gameplay.board[4].value === 'X')  && (self.gameplay.board[8].value === 'X') )
		 {
		alert('X is Winner');
		}

if( 	( self.gameplay.board[1].value === 'X') && (self.gameplay.board[4].value === 'X')  && (self.gameplay.board[7].value === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameplay.board[3].value === 'X') && (self.gameplay.board[4].value === 'X')  && (self.gameplay.board[5].value === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameplay.board[2].value === 'X') && (self.gameplay.board[5].value === 'X')  && (self.gameplay.board[8].value === 'X') )
		{
		alert('X is Winner');
		}
}
//Logic for O as winner
function getWinnerO(){
if( 	( self.gameplay.board[0].value === 'O') && (self.gameplay.board[1].value === 'O')  && (self.gameplay.board[2].value === 'O') )
		{
		alert(' O is Winner');
		}

if( 	( self.gameplay.board[0].value === 'O') && (self.gameplay.board[3].value === 'O')  && (self.gameplay.board[6].value === 'O') )
		{
		alert('O is Winner');
		}


if( 	( self.gameplay.board[2].value === 'O') && (self.gameplay.board[4].value === 'O')  && (self.gameplay.board[6].value === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameplay.board[6].value === 'O') && (self.gameplay.board[7].value === 'O')  && (self.gameplay.board[8].value === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameplay.board[0].value === 'O') && (self.gameplay.board[4].value === 'O')  && (self.gameplay.board[8].value === 'O') )
		 {
		alert('O is Winner');
		}
if( 	( self.gameplay.board[1].value === 'O') && (self.gameplay.board[4].value === 'O')  && (self.gameplay.board[7].value === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameplay.board[3].value === 'O') && (self.gameplay.board[4].value === 'O')  && (self.gameplay.board[5].value === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameplay.board[2].value === 'O') && (self.gameplay.board[5].value === 'O')  && (self.gameplay.board[8].value === 'O') )
		 {
		alert('O is Winner');
		}
}

//Logic for tie game
function tieGame(){
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
    		alert('This match is a Draw!');
		}


if( 	 (self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
	 (self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	 (self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
    		alert('This match is a Draw!');
		}


if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
    		alert('This match is a Draw!');
		}

if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='X') )
		{
    		alert('This match is a Draw!');
		}

if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert('This match is a Draw!');
		}


if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Strategic military advancement to the rear!');
		}


if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Strategic military advancement to the rear!');
		}


if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}


if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}


if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}


if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}

if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Pull back immediately!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='X') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='O') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='O') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='X') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='X') && (self.gameplay.board[2].value ==='O') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='X') && (self.gameplay.board[7].value ==='O') && (self.gameplay.board[8].value ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameplay.board[0].value ==='X') && (self.gameplay.board[1].value ==='O') && (self.gameplay.board[2].value ==='X') &&
 	(self.gameplay.board[3].value ==='O') && (self.gameplay.board[4].value ==='O') && (self.gameplay.board[5].value ==='X') &&
 	(self.gameplay.board[6].value ==='O') && (self.gameplay.board[7].value ==='X') && (self.gameplay.board[8].value ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}

}// End of the tie fuction







			self.click= function ($index) {
				//Disable clicking after the box has been occupied
				console.log($index);

				if (self.gameplay.board[$index].value) {
					return false;
				}
				if (turn ==1 ) {

					self.gameplay.board[$index].value = 'X';
					getWinnerX();
					tieGame();
					turn++;

				}
				else if (turn ==2 ) {

					self.gameplay.board[$index].value = 'O';
					getWinnerO();
					tieGame();
					turn--;

				}
				//saves the click on firebase
				self.gameplay.$save(self.gameplay);

			};
// the self.game tile was changed to gameplay.gametile to reference firebase. - gameplay is the firebase object at the top of the code. Then all the self will need to be replased with gameplay'.
			self.gameTile = [ // An array of objects that are boxes
			// Start of the box arrays
			{  status: null  },
			{  status: null  },
			{  status: null  },
			{  status: null  },
			{  status: null  },
			{  status: null  },
			{  status: null  },
			{  status: null  },
			{  status: null  }
			// end of the box arrays
			];


		}

})();


