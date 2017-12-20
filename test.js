const RudenkosDisk = require("./rudenko.js");

var disk = new RudenkosDisk();

var s = [];

for (var i = 0; i < 100; i ++) {
	(function f () {
		try {
			var move = ["LM", "LR", "ML", "MR", "RL", "RM"][Math.floor(Math.random() * 6)];
			
			disk.move(move);
			s.push(move);
		} catch (e) {
			f();
		}
	})();
}

console.log(s.join` `);
console.log(disk.L);
console.log(disk.M);
console.log(disk.R);
