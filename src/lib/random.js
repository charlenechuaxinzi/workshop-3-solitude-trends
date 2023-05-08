export const randomData = () => {
	let curVal = 0;
	let delta = 0;
	return Array.from({ length: 365 }, (_, i) => ({
		date: new Date(2022, 0, i),
		value: (curVal = curVal + (delta = delta / 1.2 - 0.5 + Math.random()))
	}));
};

export const fetchRandomData = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(randomData()), 0);
	});
};
