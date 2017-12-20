const RudenkosDisk = require("./rudenko.js");

var disk = new RudenkosDisk();

for (var i = 0; i < 100; i ++) {
	(function f () {
		try {
			var move = ["LM", "LR", "ML", "MR", "RL", "RM"][Math.floor(Math.random() * 6)];
			
			disk.move(move);
			console.log(move);
			console.log(disk.L);
			console.log(disk.M);
			console.log(disk.R);
		} catch (e) {
			f();
		}
	})();
}
