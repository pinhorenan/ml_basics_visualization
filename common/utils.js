const formatPercent = (n) => {
	return (n * 100).toFixed(2) + "%";
};

export const flaggedUsers = [];

export const printProgress = (count, max) => {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	const percent = formatPercent(count / max);
	process.stdout.write(count + "/" + max + "(" + percent + ")");
};

export const groupBy = (objArray, key) => {
	const groups = {};

	for (let obj of objArray) {
		const val = obj[key];
		if (groups[val] == null) {
			groups[val] = [];
		}
		groups[val].push(obj);
	}
	return groups;
};
