"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cli-cursor";
exports.ids = ["vendor-chunks/cli-cursor"];
exports.modules = {

/***/ "(ssr)/./node_modules/cli-cursor/index.js":
/*!******************************************!*\
  !*** ./node_modules/cli-cursor/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nconst restoreCursor = __webpack_require__(/*! restore-cursor */ \"(ssr)/./node_modules/restore-cursor/index.js\");\n\nlet isHidden = false;\n\nexports.show = (writableStream = process.stderr) => {\n\tif (!writableStream.isTTY) {\n\t\treturn;\n\t}\n\n\tisHidden = false;\n\twritableStream.write('\\u001B[?25h');\n};\n\nexports.hide = (writableStream = process.stderr) => {\n\tif (!writableStream.isTTY) {\n\t\treturn;\n\t}\n\n\trestoreCursor();\n\tisHidden = true;\n\twritableStream.write('\\u001B[?25l');\n};\n\nexports.toggle = (force, writableStream) => {\n\tif (force !== undefined) {\n\t\tisHidden = force;\n\t}\n\n\tif (isHidden) {\n\t\texports.show(writableStream);\n\t} else {\n\t\texports.hide(writableStream);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xpLWN1cnNvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLHNCQUFzQixtQkFBTyxDQUFDLG9FQUFnQjs7QUFFOUM7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXNpdGUvLi9ub2RlX21vZHVsZXMvY2xpLWN1cnNvci9pbmRleC5qcz8xOWViIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHJlc3RvcmVDdXJzb3IgPSByZXF1aXJlKCdyZXN0b3JlLWN1cnNvcicpO1xuXG5sZXQgaXNIaWRkZW4gPSBmYWxzZTtcblxuZXhwb3J0cy5zaG93ID0gKHdyaXRhYmxlU3RyZWFtID0gcHJvY2Vzcy5zdGRlcnIpID0+IHtcblx0aWYgKCF3cml0YWJsZVN0cmVhbS5pc1RUWSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlzSGlkZGVuID0gZmFsc2U7XG5cdHdyaXRhYmxlU3RyZWFtLndyaXRlKCdcXHUwMDFCWz8yNWgnKTtcbn07XG5cbmV4cG9ydHMuaGlkZSA9ICh3cml0YWJsZVN0cmVhbSA9IHByb2Nlc3Muc3RkZXJyKSA9PiB7XG5cdGlmICghd3JpdGFibGVTdHJlYW0uaXNUVFkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXN0b3JlQ3Vyc29yKCk7XG5cdGlzSGlkZGVuID0gdHJ1ZTtcblx0d3JpdGFibGVTdHJlYW0ud3JpdGUoJ1xcdTAwMUJbPzI1bCcpO1xufTtcblxuZXhwb3J0cy50b2dnbGUgPSAoZm9yY2UsIHdyaXRhYmxlU3RyZWFtKSA9PiB7XG5cdGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aXNIaWRkZW4gPSBmb3JjZTtcblx0fVxuXG5cdGlmIChpc0hpZGRlbikge1xuXHRcdGV4cG9ydHMuc2hvdyh3cml0YWJsZVN0cmVhbSk7XG5cdH0gZWxzZSB7XG5cdFx0ZXhwb3J0cy5oaWRlKHdyaXRhYmxlU3RyZWFtKTtcblx0fVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cli-cursor/index.js\n");

/***/ })

};
;