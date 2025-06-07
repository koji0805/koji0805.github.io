"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cli-width";
exports.ids = ["vendor-chunks/cli-width"];
exports.modules = {

/***/ "(ssr)/./node_modules/cli-width/index.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-width/index.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nexports = module.exports = cliWidth;\n\nfunction normalizeOpts(options) {\n  let defaultOpts = {\n    defaultWidth: 0,\n    output: process.stdout,\n    tty: __webpack_require__(/*! tty */ \"tty\"),\n  };\n\n  if (!options) {\n    return defaultOpts;\n  }\n\n  Object.keys(defaultOpts).forEach(function (key) {\n    if (!options[key]) {\n      options[key] = defaultOpts[key];\n    }\n  });\n\n  return options;\n}\n\nfunction cliWidth(options) {\n  let opts = normalizeOpts(options);\n\n  if (opts.output.getWindowSize) {\n    return opts.output.getWindowSize()[0] || opts.defaultWidth;\n  }\n\n  if (opts.tty.getWindowSize) {\n    return opts.tty.getWindowSize()[1] || opts.defaultWidth;\n  }\n\n  if (opts.output.columns) {\n    return opts.output.columns;\n  }\n\n  if (process.env.CLI_WIDTH) {\n    let width = parseInt(process.env.CLI_WIDTH, 10);\n\n    if (!isNaN(width) && width !== 0) {\n      return width;\n    }\n  }\n\n  return opts.defaultWidth;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xpLXdpZHRoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLGdCQUFLO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1zaXRlLy4vbm9kZV9tb2R1bGVzL2NsaS13aWR0aC9pbmRleC5qcz8zNjgwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjbGlXaWR0aDtcblxuZnVuY3Rpb24gbm9ybWFsaXplT3B0cyhvcHRpb25zKSB7XG4gIGxldCBkZWZhdWx0T3B0cyA9IHtcbiAgICBkZWZhdWx0V2lkdGg6IDAsXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcbiAgICB0dHk6IHJlcXVpcmUoXCJ0dHlcIiksXG4gIH07XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPcHRzO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZGVmYXVsdE9wdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghb3B0aW9uc1trZXldKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBkZWZhdWx0T3B0c1trZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNsaVdpZHRoKG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBub3JtYWxpemVPcHRzKG9wdGlvbnMpO1xuXG4gIGlmIChvcHRzLm91dHB1dC5nZXRXaW5kb3dTaXplKSB7XG4gICAgcmV0dXJuIG9wdHMub3V0cHV0LmdldFdpbmRvd1NpemUoKVswXSB8fCBvcHRzLmRlZmF1bHRXaWR0aDtcbiAgfVxuXG4gIGlmIChvcHRzLnR0eS5nZXRXaW5kb3dTaXplKSB7XG4gICAgcmV0dXJuIG9wdHMudHR5LmdldFdpbmRvd1NpemUoKVsxXSB8fCBvcHRzLmRlZmF1bHRXaWR0aDtcbiAgfVxuXG4gIGlmIChvcHRzLm91dHB1dC5jb2x1bW5zKSB7XG4gICAgcmV0dXJuIG9wdHMub3V0cHV0LmNvbHVtbnM7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuQ0xJX1dJRFRIKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuQ0xJX1dJRFRILCAxMCk7XG5cbiAgICBpZiAoIWlzTmFOKHdpZHRoKSAmJiB3aWR0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRzLmRlZmF1bHRXaWR0aDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cli-width/index.js\n");

/***/ })

};
;