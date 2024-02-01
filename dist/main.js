(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["main"],{

/***/ "./node_modules/@storybook/addon-interactions/dist sync recursive":
/*!***************************************************************!*\
  !*** ./node_modules/@storybook/addon-interactions/dist/ sync ***!
  \***************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/addon-interactions/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./config/storybook/preview.js":
/*!*************************************!*\
  !*** ./config/storybook/preview.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parameters: () => (/* binding */ parameters)
/* harmony export */ });
/* harmony import */ var _src_shared_config_storybook_StyleDecorator_StyleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/shared/config/storybook/StyleDecorator/StyleDecorator */ "./src/shared/config/storybook/StyleDecorator/StyleDecorator.ts");
/* harmony import */ var _src_shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator */ "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx");
/* harmony import */ var _src_shared_config_storybook_RouterDecorator_RouterDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/shared/config/storybook/RouterDecorator/RouterDecorator */ "./src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx");
/* harmony import */ var _src_shared_config_storybook_TranslationDecorator_TranslationDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator */ "./src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx");
/* harmony import */ var _src_app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");





var parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  decorators: [_src_shared_config_storybook_StyleDecorator_StyleDecorator__WEBPACK_IMPORTED_MODULE_0__.StyleDecorator, (0,_src_shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(_src_app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Theme.LIGHT), _src_shared_config_storybook_RouterDecorator_RouterDecorator__WEBPACK_IMPORTED_MODULE_2__.RouterDecorator, _src_shared_config_storybook_TranslationDecorator_TranslationDecorator__WEBPACK_IMPORTED_MODULE_3__.TranslationDecorator]
});

/***/ }),

/***/ "./src/app/providers/ThemeProvider/index.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/ThemeProvider/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Theme: () => (/* reexport safe */ _lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.Theme),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _ui_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useTheme: () => (/* reexport safe */ _lib_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)
/* harmony export */ });
/* harmony import */ var _ui_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ThemeProvider */ "./src/app/providers/ThemeProvider/ui/ThemeProvider.tsx");
/* harmony import */ var _lib_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/useTheme */ "./src/app/providers/ThemeProvider/lib/useTheme.ts");
/* harmony import */ var _lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ThemeContext */ "./src/app/providers/ThemeProvider/lib/ThemeContext.ts");





/***/ }),

/***/ "./src/app/providers/ThemeProvider/lib/ThemeContext.ts":
/*!*************************************************************!*\
  !*** ./src/app/providers/ThemeProvider/lib/ThemeContext.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCAL_STORAGE_THEME_KEY: () => (/* binding */ LOCAL_STORAGE_THEME_KEY),
/* harmony export */   Theme: () => (/* binding */ Theme),
/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Theme = /*#__PURE__*/function (Theme) {
  Theme["LIGHT"] = "app_light_theme";
  Theme["DARK"] = "app_dark_theme";
  return Theme;
}({});
var ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var LOCAL_STORAGE_THEME_KEY = 'theme';

/***/ }),

/***/ "./src/app/providers/ThemeProvider/lib/useTheme.ts":
/*!*********************************************************!*\
  !*** ./src/app/providers/ThemeProvider/lib/useTheme.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTheme: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "./src/app/providers/ThemeProvider/lib/ThemeContext.ts");


function useTheme() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext),
    theme = _useContext.theme,
    setTheme = _useContext.setTheme;
  var toggleTheme = function toggleTheme() {
    var newTheme = theme === _ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Theme.DARK ? _ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Theme.LIGHT : _ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Theme.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme: theme,
    toggleTheme: toggleTheme
  };
}

/***/ }),

/***/ "./src/app/providers/ThemeProvider/ui/ThemeProvider.tsx":
/*!**************************************************************!*\
  !*** ./src/app/providers/ThemeProvider/ui/ThemeProvider.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/ThemeContext */ "./src/app/providers/ThemeProvider/lib/ThemeContext.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var defaultTheme = localStorage.getItem(_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_THEME_KEY) || _lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Theme.LIGHT;
var ThemeProvider = function ThemeProvider(props) {
  var children = props.children,
    initialTheme = props.initialTheme;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialTheme || defaultTheme),
    _useState2 = _slicedToArray(_useState, 2),
    theme = _useState2[0],
    setTheme = _useState2[1];
  var defaultProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      theme: theme,
      setTheme: setTheme
    };
  }, [theme]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {
    value: defaultProps,
    children: children
  });
};
ThemeProvider.displayName = "ThemeProvider";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);
try {
    // @ts-ignore
    ThemeProvider.displayName = "ThemeProvider";
    // @ts-ignore
    ThemeProvider.__docgenInfo = { "description": "", "displayName": "ThemeProvider", "props": { "initialTheme": { "defaultValue": null, "description": "", "name": "initialTheme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"app_light_theme\"" }, { "value": "\"app_dark_theme\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"] = { docgenInfo: ThemeProvider.__docgenInfo, name: "ThemeProvider", path: "src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/shared/config/i18n/i18n.ts":
/*!****************************************!*\
  !*** ./src/shared/config/i18n/i18n.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-http-backend */ "./node_modules/i18next-http-backend/esm/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");




i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__["default"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__["default"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_3__.initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterDecorator: () => (/* binding */ RouterDecorator)
/* harmony export */ });
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var RouterDecorator = function RouterDecorator(Story) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story, {})
  });
};
RouterDecorator.displayName = "RouterDecorator";
try {
    // @ts-ignore
    RouterDecorator.displayName = "RouterDecorator";
    // @ts-ignore
    RouterDecorator.__docgenInfo = { "description": "", "displayName": "RouterDecorator", "props": { "decorators": { "defaultValue": null, "description": "Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)", "name": "decorators", "required": false, "type": { "name": "DecoratorFunction<ReactRenderer, { [x: string]: any; }> | DecoratorFunction<ReactRenderer, { [x: string]: any; }>[]" } }, "parameters": { "defaultValue": null, "description": "Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)", "name": "parameters", "required": false, "type": { "name": "Parameters" } }, "args": { "defaultValue": null, "description": "Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)", "name": "args", "required": false, "type": { "name": "Partial<Args>" } }, "argTypes": { "defaultValue": null, "description": "ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)", "name": "argTypes", "required": false, "type": { "name": "Partial<ArgTypes<Args>>" } }, "loaders": { "defaultValue": null, "description": "Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)", "name": "loaders", "required": false, "type": { "name": "LoaderFunction<ReactRenderer, Args> | LoaderFunction<ReactRenderer, Args>[]" } }, "render": { "defaultValue": null, "description": "Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.", "name": "render", "required": false, "type": { "name": "ArgsStoryFn<ReactRenderer, Args>" } }, "storyName": { "defaultValue": null, "description": "Override the display name in the UI (CSF v2)", "name": "storyName", "required": false, "type": { "name": "string" } }, "play": { "defaultValue": null, "description": "Function that is executed after the story is rendered.", "name": "play", "required": false, "type": { "name": "PlayFunction<ReactRenderer, Args>" } }, "tags": { "defaultValue": null, "description": "Named tags for a story, used to filter stories in different contexts.", "name": "tags", "required": false, "type": { "name": "string[]" } }, "story": { "defaultValue": null, "description": "@deprecated", "name": "story", "required": false, "type": { "name": "Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, \"story\">" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx#RouterDecorator"] = { docgenInfo: RouterDecorator.__docgenInfo, name: "RouterDecorator", path: "src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx#RouterDecorator" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/shared/config/storybook/StyleDecorator/StyleDecorator.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/config/storybook/StyleDecorator/StyleDecorator.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleDecorator: () => (/* binding */ StyleDecorator)
/* harmony export */ });
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");

var StyleDecorator = function StyleDecorator(story) {
  return story();
};

/***/ }),

/***/ "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeDecorator: () => (/* binding */ ThemeDecorator)
/* harmony export */ });
/* harmony import */ var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var ThemeDecorator = function ThemeDecorator(theme) {
  return function (Story) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
      initialTheme: theme,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "app ".concat(theme),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story, {})
      })
    });
  };
};
try {
    // @ts-ignore
    ThemeDecorator.displayName = "ThemeDecorator";
    // @ts-ignore
    ThemeDecorator.__docgenInfo = { "description": "", "displayName": "ThemeDecorator", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"] = { docgenInfo: ThemeDecorator.__docgenInfo, name: "ThemeDecorator", path: "src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationDecorator: () => (/* binding */ TranslationDecorator)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/I18nextProvider.js");
/* harmony import */ var shared_config_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/config/i18n/i18n */ "./src/shared/config/i18n/i18n.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var TranslationDecorator = function TranslationDecorator(Story) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_2__.I18nextProvider, {
    i18n: shared_config_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["default"],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story, {})
  });
};
TranslationDecorator.displayName = "TranslationDecorator";
try {
    // @ts-ignore
    TranslationDecorator.displayName = "TranslationDecorator";
    // @ts-ignore
    TranslationDecorator.__docgenInfo = { "description": "", "displayName": "TranslationDecorator", "props": { "decorators": { "defaultValue": null, "description": "Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)", "name": "decorators", "required": false, "type": { "name": "DecoratorFunction<ReactRenderer, { [x: string]: any; }> | DecoratorFunction<ReactRenderer, { [x: string]: any; }>[]" } }, "parameters": { "defaultValue": null, "description": "Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)", "name": "parameters", "required": false, "type": { "name": "Parameters" } }, "args": { "defaultValue": null, "description": "Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)", "name": "args", "required": false, "type": { "name": "Partial<Args>" } }, "argTypes": { "defaultValue": null, "description": "ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)", "name": "argTypes", "required": false, "type": { "name": "Partial<ArgTypes<Args>>" } }, "loaders": { "defaultValue": null, "description": "Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)", "name": "loaders", "required": false, "type": { "name": "LoaderFunction<ReactRenderer, Args> | LoaderFunction<ReactRenderer, Args>[]" } }, "render": { "defaultValue": null, "description": "Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.", "name": "render", "required": false, "type": { "name": "ArgsStoryFn<ReactRenderer, Args>" } }, "storyName": { "defaultValue": null, "description": "Override the display name in the UI (CSF v2)", "name": "storyName", "required": false, "type": { "name": "string" } }, "play": { "defaultValue": null, "description": "Function that is executed after the story is rendered.", "name": "play", "required": false, "type": { "name": "PlayFunction<ReactRenderer, Args>" } }, "tags": { "defaultValue": null, "description": "Named tags for a story, used to filter stories in different contexts.", "name": "tags", "required": false, "type": { "name": "string[]" } }, "story": { "defaultValue": null, "description": "@deprecated", "name": "story", "required": false, "type": { "name": "Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, \"story\">" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx#TranslationDecorator"] = { docgenInfo: TranslationDecorator.__docgenInfo, name: "TranslationDecorator", path: "src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx#TranslationDecorator" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./storybook-config-entry.js":
/*!***********************************!*\
  !*** ./storybook-config-entry.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/global */ "@storybook/global");
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/preview-api */ "@storybook/preview-api");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/channels */ "@storybook/channels");
/* harmony import */ var _storybook_channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storybook-stories.js */ "./storybook-stories.js");







const getProjectAnnotations = () =>
  (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.composeConfigs)([__webpack_require__(/*! ./node_modules/@storybook/react/dist/entry-preview.mjs */ "./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__(/*! ./node_modules/@storybook/react/dist/entry-preview-docs.mjs */ "./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__(/*! ./node_modules/@storybook/addon-links/dist/preview.js */ "./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-essentials/dist/docs/preview.js */ "./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-essentials/dist/actions/preview.js */ "./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js */ "./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-essentials/dist/measure/preview.js */ "./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-essentials/dist/outline/preview.js */ "./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-essentials/dist/highlight/preview.js */ "./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__(/*! ./node_modules/@storybook/addon-interactions/dist/preview.js */ "./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__(/*! ./config/storybook/preview.js */ "./config/storybook/preview.js"),]);

const channel = (0,_storybook_channels__WEBPACK_IMPORTED_MODULE_2__.createBrowserChannel)({ page: 'preview' });
_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.setChannel(channel);

if (_storybook_global__WEBPACK_IMPORTED_MODULE_0__.global.CONFIG_TYPE === 'DEVELOPMENT'){
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}

const preview = new _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.PreviewWeb();

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
window.__STORYBOOK_CLIENT_API__ = new _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.ClientApi({ storyStore: preview.storyStore });

preview.initialize({ importFn: _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__.importFn, getProjectAnnotations });

if (true) {
  module.hot.accept(/*! ./storybook-stories.js */ "./storybook-stories.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storybook-stories.js */ "./storybook-stories.js");
(() => {
    // importFn has changed so we need to patch the new one in
    preview.onStoriesChanged({ importFn: _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__.importFn });
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });

  module.hot.accept([/*! ./node_modules/@storybook/react/dist/entry-preview.mjs */ "./node_modules/@storybook/react/dist/entry-preview.mjs",/*! ./node_modules/@storybook/react/dist/entry-preview-docs.mjs */ "./node_modules/@storybook/react/dist/entry-preview-docs.mjs",/*! ./node_modules/@storybook/addon-links/dist/preview.js */ "./node_modules/@storybook/addon-links/dist/preview.js",/*! ./node_modules/@storybook/addon-essentials/dist/docs/preview.js */ "./node_modules/@storybook/addon-essentials/dist/docs/preview.js",/*! ./node_modules/@storybook/addon-essentials/dist/actions/preview.js */ "./node_modules/@storybook/addon-essentials/dist/actions/preview.js",/*! ./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js */ "./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js",/*! ./node_modules/@storybook/addon-essentials/dist/measure/preview.js */ "./node_modules/@storybook/addon-essentials/dist/measure/preview.js",/*! ./node_modules/@storybook/addon-essentials/dist/outline/preview.js */ "./node_modules/@storybook/addon-essentials/dist/outline/preview.js",/*! ./node_modules/@storybook/addon-essentials/dist/highlight/preview.js */ "./node_modules/@storybook/addon-essentials/dist/highlight/preview.js",/*! ./node_modules/@storybook/addon-interactions/dist/preview.js */ "./node_modules/@storybook/addon-interactions/dist/preview.js",/*! ./config/storybook/preview.js */ "./config/storybook/preview.js",], __WEBPACK_OUTDATED_DEPENDENCIES__ => { (() => {
    // getProjectAnnotations has changed so we need to patch the new one in
    preview.onGetProjectAnnotationsChanged({ getProjectAnnotations });
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "./storybook-stories.js":
/*!******************************!*\
  !*** ./storybook-stories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importFn: () => (/* binding */ importFn)
/* harmony export */ });
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(6);
    return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  margin: 0;
  font: inherit;
}

:root {
  --font-family-main: consolas, "Times New Roman", serif;
  --font-size-m: 16px;
  --font-line-m: 24px;
  --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);
  --font-size-l: 24px;
  --font-line-l: 32px;
  --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);
  --font-size-xl: 32px;
  --font-line-xl: 40px;
  --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);
  --navbar-height: 50px;
  --sidebar-width: 300px;
  --sidebar-width-collapsed: 80px;
  --modal-z-index: 10;
  --overlay-color: rgba(0 0 0 / 60%);
  /* stylelint-disable-next-line color-hex-length */
  --red-light: #ff0000;
  --red-dark: #ce0505;
}

:root {
  --bg-color: #e8e8ea;
  --inverted-bg-color: #090949;
  --primary-color: #0232c2;
  --secondary-color: #0452ff;
  --inverted-primary-color: #04ff04;
  --inverted-secondary-color: #049604;
}

.app_dark_theme {
  --bg-color: #090949;
  --inverted-bg-color: #e8e8ea;
  --primary-color: #049604;
  --secondary-color: #04ff04;
  --inverted-primary-color: #0452ff;
  --inverted-secondary-color: #0232c2;
}

body {
  font: var(--font-m);
  color: var(--primary-color);
}

.app {
  min-height: 100vh;
  background: var(--bg-color);
}

.content-page {
  display: flex;
}

.page-wrapper {
  flex-grow: 1;
  padding: 20px;
}`, "",{"version":3,"sources":["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/index.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;ACCJ;;ADEA;;;;EAII,SAAA;EACA,aAAA;ACCJ;;ACZA;EACI,sDAAA;EACA,mBAAA;EACA,mBAAA;EACA,yEAAA;EACA,mBAAA;EACA,mBAAA;EACA,yEAAA;EACA,oBAAA;EACA,oBAAA;EACA,4EAAA;EAGA,qBAAA;EACA,sBAAA;EACA,+BAAA;EAGA,mBAAA;EAGA,kCAAA;EACA,iDAAA;EACA,oBAAA;EACA,mBAAA;ADSJ;;AEjCA;EACI,mBAAA;EACA,4BAAA;EACA,wBAAA;EACA,0BAAA;EACA,iCAAA;EACA,mCAAA;AFoCJ;;AG1CA;EACI,mBAAA;EACA,4BAAA;EACA,wBAAA;EACA,0BAAA;EACA,iCAAA;EACA,mCAAA;AH6CJ;;AA9CA;EACI,mBAAA;EACA,2BAAA;AAiDJ;;AA9CA;EACI,iBAAA;EACA,2BAAA;AAiDJ;;AA9CA;EACI,aAAA;AAiDJ;;AA9CA;EACI,YAAA;EACA,aAAA;AAiDJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    margin: 0;\n    font: inherit;\n}\n","@import \"reset\";\n@import \"variables/global\";\n@import \"themes/normal\";\n@import \"themes/dark\";\n\nbody {\n    font: var(--font-m);\n    color: var(--primary-color);\n}\n\n.app {\n    min-height: 100vh;\n    background: var(--bg-color);\n}\n\n.content-page {\n    display: flex;\n}\n\n.page-wrapper {\n    flex-grow: 1;\n    padding: 20px;\n}\n",":root {\n    --font-family-main: consolas, \"Times New Roman\", serif;\n    --font-size-m: 16px;\n    --font-line-m: 24px;\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n    --font-size-l: 24px;\n    --font-line-l: 32px;\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n    --font-size-xl: 32px;\n    --font-line-xl: 40px;\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\n\n    // Размеры\n    --navbar-height: 50px;\n    --sidebar-width: 300px;\n    --sidebar-width-collapsed: 80px;\n\n    // Z-Индексы\n    --modal-z-index: 10;\n\n    // Overlay\n    --overlay-color: rgba(0 0 0 / 60%);\n    /* stylelint-disable-next-line color-hex-length */\n    --red-light: #ff0000;\n    --red-dark: #ce0505;\n}\n",":root {\n    --bg-color: #e8e8ea;\n    --inverted-bg-color: #090949;\n    --primary-color: #0232c2;\n    --secondary-color: #0452ff;\n    --inverted-primary-color: #04ff04;\n    --inverted-secondary-color: #049604;\n}\n",".app_dark_theme {\n    --bg-color: #090949;\n    --inverted-bg-color: #e8e8ea;\n    --primary-color: #049604;\n    --secondary-color: #04ff04;\n    --inverted-primary-color: #0452ff;\n    --inverted-secondary-color: #0232c2;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app/styles/index.scss":
/*!***********************************!*\
  !*** ./src/app/styles/index.scss ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/ lazy ^\.\/.*$ include: (?:\/src(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.stories\.(js%7Cjsx%7Cts%7Ctsx))$ chunkName: [request] namespace object ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./features/AuthByUsername/ui/LoginForm/LoginForm.stories": [
		"./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.ts",
		"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_axios_index_js-no-89afd5",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_shared_ui_Input_ui_Input_tsx",
		"src_shared_ui_Modal_ui_Modal_tsx",
		"src_features_AuthByUsername_index_ts",
		"features-AuthByUsername-ui-LoginForm-LoginForm-stories"
	],
	"./features/AuthByUsername/ui/LoginForm/LoginForm.stories.ts": [
		"./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.ts",
		"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_axios_index_js-no-89afd5",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_shared_ui_Input_ui_Input_tsx",
		"src_shared_ui_Modal_ui_Modal_tsx",
		"src_features_AuthByUsername_index_ts",
		"features-AuthByUsername-ui-LoginForm-LoginForm-stories"
	],
	"./pages/AboutPage/ui/AboutPage.stories": [
		"./src/pages/AboutPage/ui/AboutPage.stories.ts",
		"pages-AboutPage-ui-AboutPage-stories"
	],
	"./pages/AboutPage/ui/AboutPage.stories.ts": [
		"./src/pages/AboutPage/ui/AboutPage.stories.ts",
		"pages-AboutPage-ui-AboutPage-stories"
	],
	"./pages/MainPage/ui/MainPage.stories": [
		"./src/pages/MainPage/ui/MainPage.stories.ts",
		"pages-MainPage-ui-MainPage-stories"
	],
	"./pages/MainPage/ui/MainPage.stories.ts": [
		"./src/pages/MainPage/ui/MainPage.stories.ts",
		"pages-MainPage-ui-MainPage-stories"
	],
	"./pages/NotFoundPage/ui/NotFoundPage.stories": [
		"./src/pages/NotFoundPage/ui/NotFoundPage.stories.ts",
		"pages-NotFoundPage-ui-NotFoundPage-stories"
	],
	"./pages/NotFoundPage/ui/NotFoundPage.stories.ts": [
		"./src/pages/NotFoundPage/ui/NotFoundPage.stories.ts",
		"pages-NotFoundPage-ui-NotFoundPage-stories"
	],
	"./shared/ui/AppLink/ui/AppLink.stories": [
		"./src/shared/ui/AppLink/ui/AppLink.stories.ts",
		"shared-ui-AppLink-ui-AppLink-stories"
	],
	"./shared/ui/AppLink/ui/AppLink.stories.ts": [
		"./src/shared/ui/AppLink/ui/AppLink.stories.ts",
		"shared-ui-AppLink-ui-AppLink-stories"
	],
	"./shared/ui/Button/ui/Button.stories": [
		"./src/shared/ui/Button/ui/Button.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"shared-ui-Button-ui-Button-stories"
	],
	"./shared/ui/Button/ui/Button.stories.ts": [
		"./src/shared/ui/Button/ui/Button.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"shared-ui-Button-ui-Button-stories"
	],
	"./shared/ui/Input/ui/Input.stories": [
		"./src/shared/ui/Input/ui/Input.stories.ts",
		"src_shared_ui_Input_ui_Input_tsx",
		"shared-ui-Input-ui-Input-stories"
	],
	"./shared/ui/Input/ui/Input.stories.ts": [
		"./src/shared/ui/Input/ui/Input.stories.ts",
		"src_shared_ui_Input_ui_Input_tsx",
		"shared-ui-Input-ui-Input-stories"
	],
	"./shared/ui/Loader/ui/Loader.stories": [
		"./src/shared/ui/Loader/ui/Loader.stories.ts",
		"shared-ui-Loader-ui-Loader-stories"
	],
	"./shared/ui/Loader/ui/Loader.stories.ts": [
		"./src/shared/ui/Loader/ui/Loader.stories.ts",
		"shared-ui-Loader-ui-Loader-stories"
	],
	"./shared/ui/Modal/ui/Modal.stories": [
		"./src/shared/ui/Modal/ui/Modal.stories.tsx",
		"src_shared_ui_Modal_ui_Modal_tsx",
		"shared-ui-Modal-ui-Modal-stories"
	],
	"./shared/ui/Modal/ui/Modal.stories.tsx": [
		"./src/shared/ui/Modal/ui/Modal.stories.tsx",
		"src_shared_ui_Modal_ui_Modal_tsx",
		"shared-ui-Modal-ui-Modal-stories"
	],
	"./shared/ui/Text/ui/Text.stories": [
		"./src/shared/ui/Text/ui/Text.stories.tsx",
		"shared-ui-Text-ui-Text-stories"
	],
	"./shared/ui/Text/ui/Text.stories.tsx": [
		"./src/shared/ui/Text/ui/Text.stories.tsx",
		"shared-ui-Text-ui-Text-stories"
	],
	"./widgets/LangSwitcher/ui/LangSwitcher.stories": [
		"./src/widgets/LangSwitcher/ui/LangSwitcher.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_widgets_LangSwitcher_ui_LangSwitcher_tsx",
		"widgets-LangSwitcher-ui-LangSwitcher-stories"
	],
	"./widgets/LangSwitcher/ui/LangSwitcher.stories.ts": [
		"./src/widgets/LangSwitcher/ui/LangSwitcher.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_widgets_LangSwitcher_ui_LangSwitcher_tsx",
		"widgets-LangSwitcher-ui-LangSwitcher-stories"
	],
	"./widgets/Navbar/ui/Navbar.stories": [
		"./src/widgets/Navbar/ui/Navbar.stories.ts",
		"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_axios_index_js-no-89afd5",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_shared_ui_Input_ui_Input_tsx",
		"src_shared_ui_Modal_ui_Modal_tsx",
		"src_features_AuthByUsername_index_ts",
		"widgets-Navbar-ui-Navbar-stories"
	],
	"./widgets/Navbar/ui/Navbar.stories.ts": [
		"./src/widgets/Navbar/ui/Navbar.stories.ts",
		"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_axios_index_js-no-89afd5",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_shared_ui_Input_ui_Input_tsx",
		"src_shared_ui_Modal_ui_Modal_tsx",
		"src_features_AuthByUsername_index_ts",
		"widgets-Navbar-ui-Navbar-stories"
	],
	"./widgets/PageError/ui/PageError.stories": [
		"./src/widgets/PageError/ui/PageError.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"widgets-PageError-ui-PageError-stories"
	],
	"./widgets/PageError/ui/PageError.stories.ts": [
		"./src/widgets/PageError/ui/PageError.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"widgets-PageError-ui-PageError-stories"
	],
	"./widgets/PageLoader/ui/PageLoader.stories": [
		"./src/widgets/PageLoader/ui/PageLoader.stories.ts",
		"widgets-PageLoader-ui-PageLoader-stories"
	],
	"./widgets/PageLoader/ui/PageLoader.stories.ts": [
		"./src/widgets/PageLoader/ui/PageLoader.stories.ts",
		"widgets-PageLoader-ui-PageLoader-stories"
	],
	"./widgets/Sidebar/ui/Sidebar/Sidebar.stories": [
		"./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_widgets_LangSwitcher_ui_LangSwitcher_tsx",
		"widgets-Sidebar-ui-Sidebar-Sidebar-stories"
	],
	"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.ts": [
		"./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"src_widgets_LangSwitcher_ui_LangSwitcher_tsx",
		"widgets-Sidebar-ui-Sidebar-Sidebar-stories"
	],
	"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories": [
		"./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"widgets-ThemeSwitcher-ui-ThemeSwitcher-stories"
	],
	"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.ts": [
		"./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.ts",
		"src_shared_ui_Button_ui_Button_tsx",
		"widgets-ThemeSwitcher-ui-ThemeSwitcher-stories"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "@storybook/channels":
/*!************************************************!*\
  !*** external "__STORYBOOK_MODULE_CHANNELS__" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "@storybook/client-logger":
/*!*****************************************************!*\
  !*** external "__STORYBOOK_MODULE_CLIENT_LOGGER__" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "@storybook/core-events":
/*!***************************************************!*\
  !*** external "__STORYBOOK_MODULE_CORE_EVENTS__" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "@storybook/global":
/*!**********************************************!*\
  !*** external "__STORYBOOK_MODULE_GLOBAL__" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_GLOBAL__;

/***/ }),

/***/ "@storybook/preview-api":
/*!***************************************************!*\
  !*** external "__STORYBOOK_MODULE_PREVIEW_API__" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_storybook_addon-essentials_dist_actions_preview_js-node_modules_storyboo-be4071"], () => (__webpack_exec__("./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined"), __webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map