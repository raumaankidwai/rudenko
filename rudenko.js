class RudenkosDisk {
	constructor () {
		this.L = [0, 0, 0, 0, 0, 0, 0];
		this.M = [1, 1, 1, 1, 1, 1, 1];
		this.R = [0, 0, 0, 0, 0, 0, 0];
	}
	
	move (move) {
		var start = move[0];
		var end = move[1];
		
		var color;
		
		for (let i = 0; i < 7; i ++) {
			if (this[start][i]) {
				color = i;
				break;
			}
		}
		
		if (!color) {
			throw new Error(`Rudenko's Disk: Move ${move}: No colors in slice ${start}`);
		}
		
		for (let i = 0; i < color; i ++) {
			if (this[end][i]) {
				throw new Error(`Rudenko's Disk: Move ${move}: Blocked`);
			}
		}
		
		this[start][color] = false;
		this[end][color] = true;
	}
}
