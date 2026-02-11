export const path = (ctx, pathArray, color = "black") => {
	ctx.strokeStyle = color;
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(...pathArray[0]);
	for (let i = 1; i < pathArray.length; i++) {
		ctx.lineTo(...pathArray[i]);
	}
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.stroke();
};

export const paths = (ctx, pathsArray, color = "black") => {
	for (const pathItem of pathsArray) {
		path(ctx, pathItem, color);
	}
};
