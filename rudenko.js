module.exports = class RudenkosDisk {
	constructor () {
		this.L = [];
		this.M = [0, 1, 2, 3, 4, 5, 6];
		this.R = [];
	}
	
	move (move) {
		var start = move[0];
		var end = move[1];
		
		var startcolor = -1;
		
		for (let i = 0; i < 7; i ++) {
			if (typeof this[start][i] == "number") {
				startcolor = i;
				break;
			}
		}
		
		if (startcolor < 0) {
			throw new Error(`Rudenko's Disk: Move ${move}: No colors in slice ${start}`);
		}
		
		var endcolor = startcolor;
		
		for (let i = 0; i <= startcolor; i ++) {
			if (typeof this[end][i] == "number") {
				endcolor = i - 1;
				break;
			}
		}
		
		this[end][endcolor] = this[start].slice()[startcolor];
		this[start][startcolor] = undefined;
	}
}
