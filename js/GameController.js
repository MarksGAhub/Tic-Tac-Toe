// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		function GameController(){

			var self = this;

			// this describes who is currently playing
			var turn=getPlayer();

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

			//self.didXWin = true
			//self.didYWin = false

		// self.testfunc = function() {
		// 	var toprow = self.boxList[0].status + self.boxList[1].status + self.boxList[2].status;
		// 	console.log(toprow);
		// };

//logic for X as winner
function getWinnerX() {
if( 	( self.gameTile[0].status === 'X') && (self.gameTile[1].status === 'X')  && (self.gameTile[2].status === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameTile[0].status === 'X') && (self.gameTile[3].status === 'X')  && (self.gameTile[6].status === 'X') )
		 {
		alert('X is Winner');
		}

if( 	( self.gameTile[2].status === 'X') && (self.gameTile[4].status === 'X')  && (self.gameTile[6].status === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameTile[6].status === 'X') && (self.gameTile[7].status === 'X')  && (self.gameTile[8].status === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameTile[0].status === 'X') && (self.gameTile[4].status === 'X')  && (self.gameTile[8].status === 'X') )
		 {
		alert('X is Winner');
		}

if( 	( self.gameTile[1].status === 'X') && (self.gameTile[4].status === 'X')  && (self.gameTile[7].status === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameTile[3].status === 'X') && (self.gameTile[4].status === 'X')  && (self.gameTile[5].status === 'X') )
		{
		alert('X is Winner');
		}

if( 	( self.gameTile[2].status === 'X') && (self.gameTile[5].status === 'X')  && (self.gameTile[8].status === 'X') )
		{
		alert('X is Winner');
		}
}
//Logic for O as winner
function getWinnerO(){
if( 	( self.gameTile[0].status === 'O') && (self.gameTile[1].status === 'O')  && (self.gameTile[2].status === 'O') )
		{
		alert(' O is Winner');
		}

if( 	( self.gameTile[0].status === 'O') && (self.gameTile[3].status === 'O')  && (self.gameTile[6].status === 'O') )
		{
		alert('O is Winner');
		}


if( 	( self.gameTile[2].status === 'O') && (self.gameTile[4].status === 'O')  && (self.gameTile[6].status === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameTile[6].status === 'O') && (self.gameTile[7].status === 'O')  && (self.gameTile[8].status === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameTile[0].status === 'O') && (self.gameTile[4].status === 'O')  && (self.gameTile[8].status === 'O') )
		 {
		alert('O is Winner');
		}
if( 	( self.gameTile[1].status === 'O') && (self.gameTile[4].status === 'O')  && (self.gameTile[7].status === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameTile[3].status === 'O') && (self.gameTile[4].status === 'O')  && (self.gameTile[5].status === 'O') )
		{
		alert('O is Winner');
		}

if( 	( self.gameTile[2].status === 'O') && (self.gameTile[5].status === 'O')  && (self.gameTile[8].status === 'O') )
		 {
		alert('O is Winner');
		}
}

//Logic for tie game
function tieGame(){
if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='X') &&
	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
    		alert('This match is a Draw!');
		}


if( 	 (self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
	 (self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	 (self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
    		alert('This match is a Draw!');
		}


if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
    		alert('This match is a Draw!');
		}

if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='X') )
		{
    		alert('This match is a Draw!');
		}

if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert('This match is a Draw!');
		}


if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Strategic military advancement to the rear!');
		}


if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Strategic military advancement to the rear!');
		}


if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}


if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}


if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}


if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}

if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Pull back immediately!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='X') && (self.gameTile[2].status ==='O') &&
 	(self.gameTile[3].status ==='O') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='X') &&
 	(self.gameTile[6].status ==='X') && (self.gameTile[7].status ==='O') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='O') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='X') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='X') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}
if( 	(self.gameTile[0].status ==='X') && (self.gameTile[1].status ==='O') && (self.gameTile[2].status ==='X') &&
 	(self.gameTile[3].status ==='X') && (self.gameTile[4].status ==='O') && (self.gameTile[5].status ==='O') &&
 	(self.gameTile[6].status ==='O') && (self.gameTile[7].status ==='X') && (self.gameTile[8].status ==='O') )
		{
		alert( 'This match is a Draw! Better luck Next Time!');
		}

}// End of the tie fuction







			self.click= function ($index) {
				//Disable clicking after the box has been occupied
				console.log($index);

				if (self.gameTile[$index].status) {
					return false;
				}
				if (turn ==1 ) {

					self.gameTile[$index].status = 'X';
					getWinnerX();
					tieGame();
					turn++;

				}
				else if (turn ==2 ) {

					self.gameTile[$index].status = 'O';
					getWinnerO();
					tieGame();
					turn--;

				}
				// self.testfunc();
				// console.log(self.boxList[$index].status, $index)
			};

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


