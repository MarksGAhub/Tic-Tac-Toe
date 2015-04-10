// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		GameController.$inject = ['$firebaseObject', '$firebaseArray'];

		function GameController($firebaseObject, $firebaseArray){
		var self = this;


		// this describes who is currently playing

		 gamePlay();
		self.click = click;
		self.pickPlayer = pickPlayer;
		self.playNum = 0;


// Saves the data on the board.


function pickPlayer(playNum) {
	self.playNum = playNum;

}


 function gamePlay(){
    var ref = new Firebase('https://myfirebasefirstapp.firebaseio.com/game');
    self.gameplay = $firebaseObject(ref);
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

    self.gameplay.turn = getPlayer();

    self.gameplay.player_one = false;
    self.gameplay.player_two = false;
    self.gameplay.$save();

  }

  // function getboard() {
  // 	var ref = new Firebase("https://myfirebasefirstapp.firebaseio.com/game/board");
  // 	var gameboard = $firebaseArray(ref);
  // 	return gameboard;
  // }


// This randomly selects who gets to go first.
function getPlayer() {
    var randomNumber = Math.random();
    if (randomNumber < 0.50)
        {
         alert('Please select a red or blue button and then the game board to play');
        return 1;
        }

    else if (randomNumber > 0.50)
        {
         alert('Please select a red or blue button and then the game board to play');
        return 2;
         }
}




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







		function click($index) {
				//Disable clicking after the box has been occupied
				console.log($index);

				if (self.gameplay.board[$index].value) {
					return false;

				}
				if (self.gameplay.turn ==1  && self.playNum ==1) {

					self.gameplay.board[$index].value = 'X';
					// getboard();
					getWinnerX();
					tieGame();
					self.gameplay.turn++;


				}
				else if (self.gameplay.turn ==2 && self.playNum == 2) {

					self.gameplay.board[$index].value = 'O';
					// getboard();
					getWinnerO();
					tieGame();
					self.gameplay.turn--;

				}
				//saves the click on firebase
				self.gameplay.$save();

			}



		}

})();


