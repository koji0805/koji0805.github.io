"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/os-tmpdir";
exports.ids = ["vendor-chunks/os-tmpdir"];
exports.modules = {

/***/ "(ssr)/./node_modules/os-tmpdir/index.js":
/*!*****************************************!*\
  !*** ./node_modules/os-tmpdir/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar isWindows = process.platform === 'win32';\nvar trailingSlashRe = isWindows ? /[^:]\\\\$/ : /.\\/$/;\n\n// https://github.com/nodejs/node/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43\nmodule.exports = function () {\n\tvar path;\n\n\tif (isWindows) {\n\t\tpath = process.env.TEMP ||\n\t\t\tprocess.env.TMP ||\n\t\t\t(process.env.SystemRoot || process.env.windir) + '\\\\temp';\n\t} else {\n\t\tpath = process.env.TMPDIR ||\n\t\t\tprocess.env.TMP ||\n\t\t\tprocess.env.TEMP ||\n\t\t\t'/tmp';\n\t}\n\n\tif (trailingSlashRe.test(path)) {\n\t\tpath = path.slice(0, -1);\n\t}\n\n\treturn path;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3MtdG1wZGlyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1zaXRlLy4vbm9kZV9tb2R1bGVzL29zLXRtcGRpci9pbmRleC5qcz8wMDM1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xudmFyIHRyYWlsaW5nU2xhc2hSZSA9IGlzV2luZG93cyA/IC9bXjpdXFxcXCQvIDogLy5cXC8kLztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvM2U3YTE0MzgxNDk3YTNiNzNkZGE2OGQwNWI1MTMwNTYzY2RhYjQyMC9saWIvb3MuanMjTDI1LUw0M1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBwYXRoO1xuXG5cdGlmIChpc1dpbmRvd3MpIHtcblx0XHRwYXRoID0gcHJvY2Vzcy5lbnYuVEVNUCB8fFxuXHRcdFx0cHJvY2Vzcy5lbnYuVE1QIHx8XG5cdFx0XHQocHJvY2Vzcy5lbnYuU3lzdGVtUm9vdCB8fCBwcm9jZXNzLmVudi53aW5kaXIpICsgJ1xcXFx0ZW1wJztcblx0fSBlbHNlIHtcblx0XHRwYXRoID0gcHJvY2Vzcy5lbnYuVE1QRElSIHx8XG5cdFx0XHRwcm9jZXNzLmVudi5UTVAgfHxcblx0XHRcdHByb2Nlc3MuZW52LlRFTVAgfHxcblx0XHRcdCcvdG1wJztcblx0fVxuXG5cdGlmICh0cmFpbGluZ1NsYXNoUmUudGVzdChwYXRoKSkge1xuXHRcdHBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKTtcblx0fVxuXG5cdHJldHVybiBwYXRoO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/os-tmpdir/index.js\n");

/***/ })

};
;