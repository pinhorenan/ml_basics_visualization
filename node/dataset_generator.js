import { paths as _paths } from "../common/draw.js";
import { formatPercent, printProgress } from "../common/utils.js";
import {
	RAW_DIR,
	JSON_DIR,
	IMG_DIR,
	SAMPLES,
	SAMPLES_JS,
} from "../common/constants.js";
import { readdirSync, readFileSync, writeFileSync } from "fs";

import { createCanvas } from "canvas";
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");

const fileNames = readdirSync(RAW_DIR);
const samples = [];
let id = 1;
fileNames.forEach((fn) => {
	const content = readFileSync(RAW_DIR + "/" + fn);
	const { session, user, drawings } = JSON.parse(content);
	for (let label in drawings) {
		samples.push({
			id,
			label,
			user_name: user,
			user_id: session,
		});

		const paths = drawings[label];
		writeFileSync(JSON_DIR + "/" + id + ".json", JSON.stringify(paths));

		generateImageFile(IMG_DIR + "/" + id + ".png", paths);

		printProgress(id, fileNames.length * 8); // 8 is the number of labels per file
		id++;
	}
});

writeFileSync(SAMPLES, JSON.stringify(samples));

writeFileSync(SAMPLES_JS, "const samples=" + JSON.stringify(samples) + ";");

function generateImageFile(outFile, paths) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	_paths(ctx, paths);

	const buffer = canvas.toBuffer("image/png");
	writeFileSync(outFile, buffer);
}
