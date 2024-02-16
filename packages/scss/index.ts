import sass from "sass";
import fs from "fs-extra";
import path from "path";

/**
 *
 * Given a path and extension type, will return an array of paths of all the files found with that extension.
 *
 * Credit: https://gist.github.com/victorsollozzo/4134793
 *
 */

function recFindByExt(base, ext, files?, result?) {
	files = files || fs.readdirSync(base);
	result = result || [];
	files.forEach(function (file) {
		const newbase = path.join(base, file);
		if (fs.statSync(newbase).isDirectory()) {
			result = recFindByExt(newbase, ext, fs.readdirSync(newbase), result);
		} else {
			if (file.substr(-1 * (ext.length + 1)) == "." + ext) {
				const newFilePath = "./dist/" + file;
				result.push({
					path: newbase,
					file: newFilePath.replace(".scss", ".css"),
				});
			}
		}
	});
	return result;
}

/* Compile SCSS to CSS */
const compile = (inputPath: string, outputPath: string) => {
	const result = sass.compile(inputPath);
	fs.ensureDir("./dist", (err) => {
		if (err) throw err;
		console.log("Created Dist folder");
	});
	fs.writeFile(outputPath, result.css, function (err) {
		if (err) throw err;
		console.log("Compiled SCSS to CSS!");
	});
};

const filePaths = recFindByExt("./atoms", "scss");
compile(filePaths[0]["path"], filePaths[0]["file"]);

/* Copy Assets */
try {
	fs.copySync("./foundations/assets", "./dist/assets", { overwrite: true });
	console.log("Copied Assets!");
} catch (err) {
	console.error(err);
}
