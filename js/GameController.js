// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		function GameController(){

			var self = this;

			// this describes who is currently playing
			var turn=1;



			self.click= function ($index) {
				//Disable clicking after the box has been occupied
				if (self.boxList[$index].status) {
					return false;
				}
				if (turn ==1) {
					self.boxList[$index].status = 'X';
					turn++;
				}
				else {
					self.boxList[$index].status = 'O';
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