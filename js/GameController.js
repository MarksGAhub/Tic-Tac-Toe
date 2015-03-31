// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		function GameController(){

			var self = this;
			self.hi = function () {
				alert("hi");
		  }
			self.boxList = [ // An array of objects that are boxes 1 - 9

			// Start of the box arrays
			{ box: 1 
			},{ box: 2
			},{ box: 3
			},{ box: 4
			},{ box: 5
			},{ box: 6
			},{ box: 7
			},{ box: 8
			},{ box: 9
			}// end of the box arrays





			];


		}

})();