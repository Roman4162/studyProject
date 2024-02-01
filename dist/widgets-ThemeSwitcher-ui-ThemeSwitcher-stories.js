"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["widgets-ThemeSwitcher-ui-ThemeSwitcher-stories"],{

/***/ "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.ts":
/*!***************************************************************!*\
  !*** ./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dark: () => (/* binding */ Dark),
/* harmony export */   Light: () => (/* binding */ Light),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");
/* harmony import */ var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/config/storybook/ThemeDecorator/ThemeDecorator */ "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx");
/* harmony import */ var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeSwitcher */ "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx");




var meta = {
  title: 'widget/ThemeSwitcher',
  component: _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__.ThemeSwitcher,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var Light = {
  args: {}
};
var Dark = {
  args: {},
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
Light.parameters = {
  ...Light.parameters,
  docs: {
    ...Light.parameters?.docs,
    source: {
      originalSource: "{\n  args: {}\n}",
      ...Light.parameters?.docs?.source
    }
  }
};
Dark.parameters = {
  ...Dark.parameters,
  docs: {
    ...Dark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...Dark.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Light","Dark"];

/***/ }),

/***/ "./src/shared/ui/Button/index.ts":
/*!***************************************!*\
  !*** ./src/shared/ui/Button/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* reexport safe */ _ui_Button__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   ButtonSize: () => (/* reexport safe */ _ui_Button__WEBPACK_IMPORTED_MODULE_0__.ButtonSize),
/* harmony export */   ButtonTheme: () => (/* reexport safe */ _ui_Button__WEBPACK_IMPORTED_MODULE_0__.ButtonTheme)
/* harmony export */ });
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Button */ "./src/shared/ui/Button/ui/Button.tsx");



/***/ }),

/***/ "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx":
/*!********************************************************!*\
  !*** ./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitcher: () => (/* binding */ ThemeSwitcher)
/* harmony export */ });
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");
/* harmony import */ var shared_assets_icons_theme_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/assets/icons/theme-light.svg */ "./src/shared/assets/icons/theme-light.svg");
/* harmony import */ var shared_assets_icons_theme_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/assets/icons/theme-dark.svg */ "./src/shared/assets/icons/theme-dark.svg");
/* harmony import */ var shared_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Button */ "./src/shared/ui/Button/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var ThemeSwitcher = function ThemeSwitcher(_ref) {
  var className = _ref.className;
  var _useTheme = (0,app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.useTheme)(),
    theme = _useTheme.theme,
    toggleTheme = _useTheme.toggleTheme;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_ui_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    theme: shared_ui_Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.CLEAR,
    onClick: toggleTheme,
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_5__.classNames)('', {}, [className]),
    children: theme === app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.Theme.DARK ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_assets_icons_theme_dark_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_assets_icons_theme_light_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
};
ThemeSwitcher.displayName = "ThemeSwitcher";
try {
    // @ts-ignore
    ThemeSwitcher.displayName = "ThemeSwitcher";
    // @ts-ignore
    ThemeSwitcher.__docgenInfo = { "description": "", "displayName": "ThemeSwitcher", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher"] = { docgenInfo: ThemeSwitcher.__docgenInfo, name: "ThemeSwitcher", path: "src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/shared/assets/icons/theme-dark.svg":
/*!************************************************!*\
  !*** ./src/shared/assets/icons/theme-dark.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThemeDark = function SvgThemeDark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 40,
    height: 41,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",
    fill: "#0115C6"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m14.97 15.9-2.288-1.439-2.209 1.537.671-2.6-2.15-1.636 2.683-.177.887-2.542 1.006 2.502 2.683.06-2.072 1.714.79 2.58ZM21.48 8.787l-2.92-1.832-2.84 1.97.828-3.35-2.741-2.088 3.451-.236L18.402 0l1.322 3.211 3.412.06-2.663 2.226 1.006 3.29ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4ZM33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58Z",
    fill: "#0115C6"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgThemeDark);

/***/ }),

/***/ "./src/shared/assets/icons/theme-light.svg":
/*!*************************************************!*\
  !*** ./src/shared/assets/icons/theme-light.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path, _path2, _path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThemeLight = function SvgThemeLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 40,
    height: 41,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4Z",
    fill: "#FFC700"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m18.56 6.955 2.92 1.832-1.007-3.29 2.663-2.226-3.412-.06L18.402 0l-1.144 3.25-3.451.237 2.741 2.089-.828 3.349 2.84-1.97Zm-5.878 7.506L14.97 15.9l-.789-2.581 2.072-1.715-2.683-.059-1.006-2.502-.887 2.542-2.683.177 2.15 1.635-.67 2.601 2.208-1.537Z",
    fill: "#FFC700"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",
    fill: "#FFC700"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgThemeLight);

/***/ })

}]);
//# sourceMappingURL=widgets-ThemeSwitcher-ui-ThemeSwitcher-stories.js.map