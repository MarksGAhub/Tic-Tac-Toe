// IIFE
(function(){
	angular
		.module('GameApp')
		.controller('GameController', GameController);

		function GameController(){

			var self = this;

			self.hi = function () {
				alert("hi");
		 	 };


			self.getX = function () {
				value: "X";
			};

			self.boxList = [ // An array of objects that are boxes 1 - 9

			// Start of the box arrays
			{ box: 1, status: null
			},{ box: 2, status: null
			},{ box: 3, status: null
			},{ box: 4, status: null
			},{ box: 5, status: null
			},{ box: 6, status: null
			},{ box: 7, status: null
			},{ box: 8, status: null
			},{ box: 9, status: null
			}// end of the box arrays





			];


		}

})();