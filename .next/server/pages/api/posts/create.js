"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts/create";
exports.ids = ["pages/api/posts/create"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fposts%2Fcreate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fposts%2Fcreate.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fposts%2Fcreate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fposts%2Fcreate.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_posts_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/posts/create.js */ \"(api)/./src/pages/api/posts/create.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_posts_create_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_posts_create_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/posts/create\",\n        pathname: \"/api/posts/create\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_posts_create_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnBvc3RzJTJGY3JlYXRlJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTJGcGFnZXMlMkZhcGklMkZwb3N0cyUyRmNyZWF0ZS5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUM0RDtBQUM1RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsMkRBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLDJEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlaWVyYi8/ZDQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjL3BhZ2VzL2FwaS9wb3N0cy9jcmVhdGUuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3N0cy9jcmVhdGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3N0cy9jcmVhdGVcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fposts%2Fcreate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fposts%2Fcreate.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/models/Post.js":
/*!****************************!*\
  !*** ./src/models/Post.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    author: {\n        type: String,\n        required: true\n    },\n    communityId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Community\",\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", PostSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL1Bvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsU0FBUztRQUNQSCxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUUsUUFBUTtRQUNOSixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUcsYUFBYTtRQUNYTCxNQUFNSix3REFBZSxDQUFDVSxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7UUFDTE4sVUFBVTtJQUNaO0FBQ0YsR0FDQTtJQUNFTyxZQUFZO0FBQ2Q7QUFHRixpRUFBZWIsd0RBQWUsQ0FBQ2UsSUFBSSxJQUFJZixxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWllcmIvLi9zcmMvbW9kZWxzL1Bvc3QuanM/NTdlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgUG9zdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tbXVuaXR5SWQ6IHtcclxuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICByZWY6ICdDb21tdW5pdHknLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qb3N0IHx8IG1vbmdvb3NlLm1vZGVsKCdQb3N0JywgUG9zdFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlBvc3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbnRlbnQiLCJhdXRob3IiLCJjb21tdW5pdHlJZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiUG9zdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/models/Post.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/posts/create.js":
/*!***************************************!*\
  !*** ./src/pages/api/posts/create.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./src/utils/dbConnect.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Post */ \"(api)/./src/models/Post.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    const { method } = req;\n    await (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case \"POST\":\n            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({\n                req\n            });\n            console.log(\"Session:\", session);\n            if (!session) {\n                return res.status(401).json({\n                    message: \"Not authenticated\"\n                });\n            }\n            const { title, content, author } = req.body;\n            if (!title || !content) {\n                return res.status(400).json({\n                    message: \"Title and content are required\"\n                });\n            }\n            try {\n                const newPost = new _models_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                    title,\n                    content,\n                    author\n                });\n                await newPost.save();\n                res.status(201).json(newPost);\n            } catch (error) {\n                res.status(500).json({\n                    message: \"Error creating post\",\n                    error\n                });\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"POST\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bvc3RzL2NyZWF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNUO0FBQ0s7QUFFOUIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdGO0lBRW5CLE1BQU1KLDREQUFTQTtJQUVmLE9BQVFNO1FBQ04sS0FBSztZQUNILE1BQU1DLFVBQVUsTUFBTUwsMkRBQVVBLENBQUM7Z0JBQUVFO1lBQUk7WUFDdkNJLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtZQUN4QixJQUFJLENBQUNBLFNBQVM7Z0JBQ1osT0FBT0YsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBb0I7WUFDN0Q7WUFFQSxNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR1gsSUFBSVksSUFBSTtZQUUzQyxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsU0FBUztnQkFDdEIsT0FBT1QsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBaUM7WUFDMUU7WUFFQSxJQUFJO2dCQUNGLE1BQU1LLFVBQVUsSUFBSWhCLG9EQUFJQSxDQUFDO29CQUN2Qlk7b0JBQ0FDO29CQUNBQztnQkFDRjtnQkFFQSxNQUFNRSxRQUFRQyxJQUFJO2dCQUNsQmIsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ007WUFDdkIsRUFBRSxPQUFPRSxPQUFPO2dCQUNkZCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO29CQUF1Qk87Z0JBQU07WUFDL0Q7WUFDQTtRQUVGO1lBQ0VkLElBQUllLFNBQVMsQ0FBQyxTQUFTO2dCQUFDO2FBQU87WUFDL0JmLElBQUlLLE1BQU0sQ0FBQyxLQUFLVyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVmLE9BQU8sWUFBWSxDQUFDO1lBQ2xEO0lBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlaWVyYi8uL3NyYy9wYWdlcy9hcGkvcG9zdHMvY3JlYXRlLmpzP2Q1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvUG9zdCc7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnU2Vzc2lvbjonLCBzZXNzaW9uKTtcclxuICAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ05vdCBhdXRoZW50aWNhdGVkJyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgYXV0aG9yIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgIGlmICghdGl0bGUgfHwgIWNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnVGl0bGUgYW5kIGNvbnRlbnQgYXJlIHJlcXVpcmVkJyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBuZXdQb3N0ID0gbmV3IFBvc3Qoe1xyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXdQb3N0LnNhdmUoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdQb3N0KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBjcmVhdGluZyBwb3N0JywgZXJyb3IgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQb3N0IiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidGl0bGUiLCJjb250ZW50IiwiYXV0aG9yIiwiYm9keSIsIm5ld1Bvc3QiLCJzYXZlIiwiZXJyb3IiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/posts/create.js\n");

/***/ }),

/***/ "(api)/./src/utils/dbConnect.js":
/*!********************************!*\
  !*** ./src/utils/dbConnect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections).length > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState;\n        if (connection.isConnected === 1) {\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvZGJDb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLENBQUM7QUFFcEIsZUFBZUM7SUFDYixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUI7SUFDRjtJQUVBLElBQUlILDZEQUFvQixDQUFDSyxNQUFNLEdBQUcsR0FBRztRQUNuQ0osV0FBV0UsV0FBVyxHQUFHSCw2REFBb0IsQ0FBQyxFQUFFLENBQUNNLFVBQVU7UUFDM0QsSUFBSUwsV0FBV0UsV0FBVyxLQUFLLEdBQUc7WUFDaEM7UUFDRjtRQUNBLE1BQU1ILDBEQUFtQjtJQUMzQjtJQUVBLE1BQU1RLEtBQUssTUFBTVIsdURBQWdCLENBQUNVLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO1FBQzFEQyxpQkFBaUI7UUFDakJDLG9CQUFvQjtJQUN0QjtJQUVBYixXQUFXRSxXQUFXLEdBQUdLLEdBQUdKLFdBQVcsQ0FBQyxFQUFFLENBQUNFLFVBQVU7QUFDdkQ7QUFFQSxpRUFBZUosU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlaWVyYi8uL3NyYy91dGlscy9kYkNvbm5lY3QuanM/ODMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3Rpb25zIiwibGVuZ3RoIiwicmVhZHlTdGF0ZSIsImRpc2Nvbm5lY3QiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fposts%2Fcreate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fposts%2Fcreate.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();