// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		function GameController(){

			var self = this;

			// this describes who is currently playing
			var turn=1;
			//self.didXWin = true
			//self.didYWin = false

// logic for X as winner
function getWinnerX() {
	if( ( self.boxList[0].status === 'X') && (self.boxList[1].status === 'X')  && (self.boxList[2].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[0].status === 'X') && (self.boxList[3].status === 'X')  && (self.boxList[6].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[2].status === 'X') && (self.boxList[4].status === 'X')  && (self.boxList[8].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[2].status === 'X') && (self.boxList[4].status === 'X')  && (self.boxList[6].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[0].status === 'X') && (self.boxList[4].status === 'X')  && (self.boxList[8].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[1].status === 'X') && (self.boxList[4].status === 'X')  && (self.boxList[7].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[3].status === 'X') && (self.boxList[4].status === 'X')  && (self.boxList[5].status === 'X') ) {
		alert('X is Winner');
	}
	if( ( self.boxList[2].status === 'X') && (self.boxList[5].status === 'X')  && (self.boxList[8].status === 'X') ) {
		alert('X is Winner');
	}
}
//Logic for O as winner
function getWinnerO(){
	if( ( self.boxList[0].status === 'O') && (self.boxList[1].status === 'O')  && (self.boxList[2].status === 'O') ) {
		alert(' O is Winner');
	}
	if( ( self.boxList[0].status === 'O') && (self.boxList[3].status === 'O')  && (self.boxList[6].status === 'O') ) {
		alert('O is Winner');
	}
	if( ( self.boxList[2].status === 'O') && (self.boxList[4].status === 'O')  && (self.boxList[8].status === 'O') ) {
		alert('O is Winner');
	}
	if( ( self.boxList[2].status === 'O') && (self.boxList[4].status === 'O')  && (self.boxList[6].status === 'O') ) {
		alert('O is Winner');
	}
	if( ( self.boxList[0].status === 'O') && (self.boxList[4].status === 'O')  && (self.boxList[8].status === 'O') ) {
		alert('O is Winner');
	}
	if( ( self.boxList[1].status === 'O') && (self.boxList[4].status === 'O')  && (self.boxList[7].status === 'O') ) {
		alert('O is Winner');
	}
	if( ( self.boxList[3].status === 'O') && (self.boxList[4].status === 'O')  && (self.boxList[5].status === 'O') ) {
		alert('O is Winner');
	}
	if( ( self.boxList[2].status === 'O') && (self.boxList[5].status === 'O')  && (self.boxList[8].status === 'O') ) {
		alert('O is Winner');
	}
}
//Logic for tie game
function tieGame(){
	if( (self.boxList[0].status ==='X') && (self.boxList[1].status ==='O') && (self.boxList[2].status ==='X') &&
	 (self.boxList[3].status ==='O') && (self.boxList[4].status ==='O') && (self.boxList[5].status ==='X') &&
	 (self.boxList[6].status ==='X') && (self.boxList[7].status ==='X') && (self.boxList[8].status ==='O') )
{
    alert('This match is a Draw!');
}

if( (self.boxList[0].status ==='O') && (self.boxList[1].status ==='X') && (self.boxList[2].status ==='O') &&
	 (self.boxList[3].status ==='X') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='O') &&
 	 (self.boxList[6].status ==='O') && (self.boxList[7].status ==='O') && (self.boxList[8].status ==='X') )
{
    alert('This match is a Draw!');
}

if( (self.boxList[0].status ==='O') && (self.boxList[1].status ==='O') && (self.boxList[2].status ==='X') &&
 	(self.boxList[3].status ==='X') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='O') &&
 	(self.boxList[6].status ==='O') && (self.boxList[7].status ==='X') && (self.boxList[8].status ==='O') )
{
    alert('This match is a Draw!');
}

if( (self.boxList[0].status ==='X') && (self.boxList[1].status ==='O') && (self.boxList[2].status ==='X') &&
 	(self.boxList[3].status ==='X') && (self.boxList[4].status ==='O') && (self.boxList[5].status ==='O') &&
 	(self.boxList[6].status ==='O') && (self.boxList[7].status ==='X') && (self.boxList[8].status ==='X') )
{
    alert('This match is a Draw!');
}

if( (self.boxList[0].status ==='O') && (self.boxList[1].status ==='X') && (self.boxList[2].status ==='O') &&
 	(self.boxList[3].status ==='X') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='O') &&
 	(self.boxList[6].status ==='X') && (self.boxList[7].status ==='O') && (self.boxList[8].status ==='X') )
{
alert('This match is a Draw!');
}
if( (self.boxList[0].status ==='O') && (self.boxList[1].status ==='X') && (self.boxList[2].status ==='O') &&
 	(self.boxList[3].status ==='X') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='O') &&
 	(self.boxList[6].status ==='X') && (self.boxList[7].status ==='O') && (self.boxList[8].status ==='X') )
{
	alert( 'This match is a Draw! Strategic military advancement to the rear!');
}
if( (self.boxList[0].status ==='X') && (self.boxList[1].status ==='O') && (self.boxList[2].status ==='X') &&
 	(self.boxList[3].status ==='O') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='X') &&
 	(self.boxList[6].status ==='O') && (self.boxList[7].status ==='X') && (self.boxList[8].status ==='O') )
{
	alert( 'This match is a Draw! Strategic military advancement to the rear!');
}
if( (self.boxList[0].status ==='X') && (self.boxList[1].status ==='X') && (self.boxList[2].status ==='O') &&
 	(self.boxList[3].status ==='O') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='X') &&
 	(self.boxList[6].status ==='X') && (self.boxList[7].status ==='O') && (self.boxList[8].status ==='O') )
{
	alert( 'This match is a Draw! Better luck Next Time!');
}
if( (self.boxList[0].status ==='X') && (self.boxList[1].status ==='O') && (self.boxList[2].status ==='X') &&
 	(self.boxList[3].status ==='X') && (self.boxList[4].status ==='X') && (self.boxList[5].status ==='O') &&
 	(self.boxList[6].status ==='O') && (self.boxList[7].status ==='X') && (self.boxList[8].status ==='O') )
{
	alert( 'This match is a Draw! Better luck Next Time!');
}


}







			self.click= function ($index) {
				//Disable clicking after the box has been occupied
				console.log($index);

				if (self.boxList[$index].status) {
					return false;
				}
				if (turn ==1) {
					self.boxList[$index].status = 'X';
					getWinnerX();
					tieGame();
					turn++;
				}
				else {
					self.boxList[$index].status = 'O';
					getWinnerO();
					tieGame();
					turn--;
				}
			};

			self.boxList = [ // An array of objects that are boxes
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


