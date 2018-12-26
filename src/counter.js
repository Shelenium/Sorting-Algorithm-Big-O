export function counter() {
	let a = 0;
	return function() {
		return (a += 1);
	}
}

export function bomb(countDown) {
	let tick = countDown;
	return function() {
		tick = tick || countDown;
		console.log(tick);
		return --tick;
	}
}