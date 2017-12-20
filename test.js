const RudenkosDisk = require("./rudenko.js");

var disk = new RudenkosDisk();

var s = [];

for (let i = 0; i < 100; i ++) {
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

function r (s) {
	var rs = [];
	
	for (let i = 0; i < s.length; i ++) {
		var cur = s[i];

		if (s[i + 1] && s[i][1] == s[i + 1][0]) {
			cur = s[i][0] + s[i + 1][1];
		}

		if (cur[0] == cur[1]) {
			i ++;
			continue;
		}

		rs.push(cur);
	}
	
	return rs;
}

var rs = [];

while (s.join`` != rs.join``) {
	console.log("Reducing");
	
	rs = rs.length ? rs : s.slice();
	
	s = rs.slice();
	rs = r(s);
}

console.log(s.join` `);
console.log(disk.L);
console.log(disk.M);
console.log(disk.R);
