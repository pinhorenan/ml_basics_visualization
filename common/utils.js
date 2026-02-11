export const formatPercent = (n) => {
	return (n * 100).toFixed(2) + "%";
};

export const printProgress = (count, max) => {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	const percent = formatPercent(count / max);
	process.stdout.write(count + "/" + max + "(" + percent + ")");
};
