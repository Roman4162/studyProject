"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["widgets-Sidebar-ui-Sidebar-Sidebar-stories"],{

/***/ "./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.ts":
/*!***********************************************************!*\
  !*** ./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.ts ***!
  \***********************************************************/
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
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx");




var meta = {
  title: 'widget/Sidebar',
  component: _Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar,
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

/***/ "./src/pages/AboutPage/index.ts":
/*!**************************************!*\
  !*** ./src/pages/AboutPage/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPage: () => (/* reexport safe */ _ui_AboutPage_async__WEBPACK_IMPORTED_MODULE_0__.AboutPageAsync)
/* harmony export */ });
/* harmony import */ var _ui_AboutPage_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/AboutPage.async */ "./src/pages/AboutPage/ui/AboutPage.async.tsx");



/***/ }),

/***/ "./src/pages/AboutPage/ui/AboutPage.async.tsx":
/*!****************************************************!*\
  !*** ./src/pages/AboutPage/ui/AboutPage.async.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageAsync: () => (/* binding */ AboutPageAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var AboutPageAsync = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return new Promise(function (resolve) {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(function () {
      return resolve(__webpack_require__.e(/*! import() */ "src_pages_AboutPage_ui_AboutPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./AboutPage */ "./src/pages/AboutPage/ui/AboutPage.tsx")));
    }, 1500);
  });
});
try {
    // @ts-ignore
    AboutPageAsync.displayName = "AboutPageAsync";
    // @ts-ignore
    AboutPageAsync.__docgenInfo = { "description": "", "displayName": "AboutPageAsync", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/pages/AboutPage/ui/AboutPage.async.tsx#AboutPageAsync"] = { docgenInfo: AboutPageAsync.__docgenInfo, name: "AboutPageAsync", path: "src/pages/AboutPage/ui/AboutPage.async.tsx#AboutPageAsync" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/pages/MainPage/index.ts":
/*!*************************************!*\
  !*** ./src/pages/MainPage/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPage: () => (/* reexport safe */ _ui_MainPage_async__WEBPACK_IMPORTED_MODULE_0__.MainPageAsync)
/* harmony export */ });
/* harmony import */ var _ui_MainPage_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/MainPage.async */ "./src/pages/MainPage/ui/MainPage.async.tsx");



/***/ }),

/***/ "./src/pages/MainPage/ui/MainPage.async.tsx":
/*!**************************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.async.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageAsync: () => (/* binding */ MainPageAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var MainPageAsync = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return new Promise(function (resolve) {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(function () {
      return resolve(__webpack_require__.e(/*! import() */ "src_pages_MainPage_ui_MainPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./MainPage */ "./src/pages/MainPage/ui/MainPage.tsx")));
    }, 1500);
  });
});
try {
    // @ts-ignore
    MainPageAsync.displayName = "MainPageAsync";
    // @ts-ignore
    MainPageAsync.__docgenInfo = { "description": "", "displayName": "MainPageAsync", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/pages/MainPage/ui/MainPage.async.tsx#MainPageAsync"] = { docgenInfo: MainPageAsync.__docgenInfo, name: "MainPageAsync", path: "src/pages/MainPage/ui/MainPage.async.tsx#MainPageAsync" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/pages/NotFoundPage/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/NotFoundPage/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundPage: () => (/* reexport safe */ _ui_NotFoundPage__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage)
/* harmony export */ });
/* harmony import */ var _ui_NotFoundPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/NotFoundPage */ "./src/pages/NotFoundPage/ui/NotFoundPage.tsx");



/***/ }),

/***/ "./src/pages/NotFoundPage/ui/NotFoundPage.tsx":
/*!****************************************************!*\
  !*** ./src/pages/NotFoundPage/ui/NotFoundPage.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundPage: () => (/* binding */ NotFoundPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundPage.module.scss */ "./src/pages/NotFoundPage/ui/NotFoundPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var NotFoundPage = function NotFoundPage(_ref) {
  var className = _ref.className;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].NotFoundPage, {}, [className]),
    children: t('Not found page')
  });
};
NotFoundPage.displayName = "NotFoundPage";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
try {
    // @ts-ignore
    NotFoundPage.displayName = "NotFoundPage";
    // @ts-ignore
    NotFoundPage.__docgenInfo = { "description": "", "displayName": "NotFoundPage", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage"] = { docgenInfo: NotFoundPage.__docgenInfo, name: "NotFoundPage", path: "src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/shared/config/routeConfig/routeConfig.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/config/routeConfig/routeConfig.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutes: () => (/* binding */ AppRoutes),
/* harmony export */   RoutePath: () => (/* binding */ RoutePath),
/* harmony export */   routeConfig: () => (/* binding */ routeConfig)
/* harmony export */ });
/* harmony import */ var pages_AboutPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages/AboutPage */ "./src/pages/AboutPage/index.ts");
/* harmony import */ var pages_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/MainPage */ "./src/pages/MainPage/index.ts");
/* harmony import */ var pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/NotFoundPage */ "./src/pages/NotFoundPage/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var AppRoutes = /*#__PURE__*/function (AppRoutes) {
  AppRoutes["MAIN"] = "main";
  AppRoutes["ABOUT"] = "about";
  AppRoutes["NOT_FOUND"] = "not_found";
  return AppRoutes;
}({});
var RoutePath = _defineProperty(_defineProperty(_defineProperty({}, AppRoutes.MAIN, '/'), AppRoutes.ABOUT, '/about'), AppRoutes.NOT_FOUND, '*');
var routeConfig = _defineProperty(_defineProperty(_defineProperty({}, AppRoutes.MAIN, {
  path: RoutePath.main,
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(pages_MainPage__WEBPACK_IMPORTED_MODULE_1__.MainPage, {})
}), AppRoutes.ABOUT, {
  path: RoutePath.about,
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(pages_AboutPage__WEBPACK_IMPORTED_MODULE_0__.AboutPage, {})
}), AppRoutes.NOT_FOUND, {
  path: RoutePath.not_found,
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_2__.NotFoundPage, {})
});

/***/ }),

/***/ "./src/shared/ui/AppLink/index.ts":
/*!****************************************!*\
  !*** ./src/shared/ui/AppLink/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLink: () => (/* reexport safe */ _ui_AppLink__WEBPACK_IMPORTED_MODULE_0__.AppLink),
/* harmony export */   AppLinkTheme: () => (/* reexport safe */ _ui_AppLink__WEBPACK_IMPORTED_MODULE_0__.AppLinkTheme)
/* harmony export */ });
/* harmony import */ var _ui_AppLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/AppLink */ "./src/shared/ui/AppLink/ui/AppLink.tsx");



/***/ }),

/***/ "./src/shared/ui/AppLink/ui/AppLink.tsx":
/*!**********************************************!*\
  !*** ./src/shared/ui/AppLink/ui/AppLink.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLink: () => (/* binding */ AppLink),
/* harmony export */   AppLinkTheme: () => (/* binding */ AppLinkTheme)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _AppLink_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLink.module.scss */ "./src/shared/ui/AppLink/ui/AppLink.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["to", "className", "children", "theme"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var AppLinkTheme = /*#__PURE__*/function (AppLinkTheme) {
  AppLinkTheme["PRIMARY"] = "primary";
  AppLinkTheme["SECONDARY"] = "secondary";
  return AppLinkTheme;
}({});
var AppLink = function AppLink(props) {
  var to = props.to,
    className = props.className,
    children = props.children,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? AppLinkTheme.PRIMARY : _props$theme,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, _objectSpread(_objectSpread({
    to: to,
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].AppLink, {}, [className, _AppLink_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"][theme]])
  }, otherProps), {}, {
    children: children
  }));
};
AppLink.displayName = "AppLink";
try {
    // @ts-ignore
    AppLink.displayName = "AppLink";
    // @ts-ignore
    AppLink.__docgenInfo = { "description": "", "displayName": "AppLink", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/shared/ui/AppLink/ui/AppLink.tsx#AppLink"] = { docgenInfo: AppLink.__docgenInfo, name: "AppLink", path: "src/shared/ui/AppLink/ui/AppLink.tsx#AppLink" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/widgets/LangSwitcher/index.ts":
/*!*******************************************!*\
  !*** ./src/widgets/LangSwitcher/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangSwitcher: () => (/* reexport safe */ _ui_LangSwitcher__WEBPACK_IMPORTED_MODULE_0__.LangSwitcher)
/* harmony export */ });
/* harmony import */ var _ui_LangSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/LangSwitcher */ "./src/widgets/LangSwitcher/ui/LangSwitcher.tsx");



/***/ }),

/***/ "./src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx":
/*!****************************************************!*\
  !*** ./src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var widgets_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/ThemeSwitcher */ "./src/widgets/ThemeSwitcher/index.ts");
/* harmony import */ var widgets_LangSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/LangSwitcher */ "./src/widgets/LangSwitcher/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/config/routeConfig/routeConfig */ "./src/shared/config/routeConfig/routeConfig.tsx");
/* harmony import */ var shared_assets_icons_about_20_20_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/assets/icons/about-20-20.svg */ "./src/shared/assets/icons/about-20-20.svg");
/* harmony import */ var shared_assets_icons_main_20_20_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/assets/icons/main-20-20.svg */ "./src/shared/assets/icons/main-20-20.svg");
/* harmony import */ var shared_ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ui/Button */ "./src/shared/ui/Button/index.ts");
/* harmony import */ var shared_ui_AppLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/AppLink */ "./src/shared/ui/AppLink/index.ts");
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar.module.scss */ "./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Sidebar = function Sidebar(_ref) {
  var className = _ref.className;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var onToggle = function onToggle() {
    setCollapsed(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    "data-testid": "sidebar",
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_11__.classNames)(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].Sidebar, _defineProperty({}, _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].collapsed, collapsed), [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_ui_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
      "data-testid": "sidebar-toggle",
      onClick: onToggle,
      className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].collapseBtn,
      theme: shared_ui_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonTheme.BACKGROUND_INVERTED,
      square: true,
      size: shared_ui_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonSize.L,
      children: collapsed ? '>' : '<'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].items,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(shared_ui_AppLink__WEBPACK_IMPORTED_MODULE_7__.AppLink, {
        theme: shared_ui_AppLink__WEBPACK_IMPORTED_MODULE_7__.AppLinkTheme.SECONDARY,
        to: shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_3__.RoutePath.main,
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].item,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_assets_icons_main_20_20_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].link,
          children: t('Главная')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(shared_ui_AppLink__WEBPACK_IMPORTED_MODULE_7__.AppLink, {
        theme: shared_ui_AppLink__WEBPACK_IMPORTED_MODULE_7__.AppLinkTheme.SECONDARY,
        to: shared_config_routeConfig_routeConfig__WEBPACK_IMPORTED_MODULE_3__.RoutePath.about,
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].item,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(shared_assets_icons_about_20_20_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].link,
          children: t('О сайте')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].switchers,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(widgets_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitcher, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(widgets_LangSwitcher__WEBPACK_IMPORTED_MODULE_2__.LangSwitcher, {
        className: _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].lang,
        "short": collapsed
      })]
    })]
  });
};
Sidebar.displayName = "Sidebar";
try {
    // @ts-ignore
    Sidebar.displayName = "Sidebar";
    // @ts-ignore
    Sidebar.__docgenInfo = { "description": "", "displayName": "Sidebar", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar"] = { docgenInfo: Sidebar.__docgenInfo, name: "Sidebar", path: "src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/widgets/ThemeSwitcher/index.ts":
/*!********************************************!*\
  !*** ./src/widgets/ThemeSwitcher/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitcher: () => (/* reexport safe */ _ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcher)
/* harmony export */ });
/* harmony import */ var _ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ThemeSwitcher */ "./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx");



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

/***/ "./src/shared/assets/icons/about-20-20.svg":
/*!*************************************************!*\
  !*** ./src/shared/assets/icons/about-20-20.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path, _path2, _path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAbout2020 = function SvgAbout2020(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.333 6.667h5v1.11h-5v-1.11ZM8.333 8.889h5V10h-5V8.889ZM8.333 11.111h5v1.111h-5v-1.11ZM8.333 13.333h5v1.111h-5v-1.11ZM6.111 4.444h1.111v1.112h-1.11V4.444ZM6.111 6.667h1.111v1.11h-1.11v-1.11ZM6.111 8.889h1.111V10h-1.11V8.889ZM6.111 11.111h1.111v1.111h-1.11v-1.11ZM6.111 13.333h1.111v1.111h-1.11v-1.11ZM8.333 4.444v1.112h4.811a4.14 4.14 0 0 1-.494-1.112H8.333Z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.556 7.344v10.434H4.444V2.222h8.212a4.14 4.14 0 0 1 .488-1.11h-8.7a1.111 1.111 0 0 0-1.11 1.11v15.556a1.111 1.111 0 0 0 1.11 1.11h11.111a1.111 1.111 0 0 0 1.112-1.11V7.5a4.162 4.162 0 0 1-1.112-.156Z"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16.667 6.111a2.778 2.778 0 1 0 0-5.555 2.778 2.778 0 0 0 0 5.555Z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAbout2020);

/***/ }),

/***/ "./src/shared/assets/icons/main-20-20.svg":
/*!************************************************!*\
  !*** ./src/shared/assets/icons/main-20-20.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMain2020 = function SvgMain2020(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M.415 9.84 8.939.818 9.51.214A.676.676 0 0 1 10 0c.184 0 .36.077.49.214l9.095 9.625c.134.141.239.309.31.493.072.185.107.383.105.582-.009.822-.655 1.478-1.432 1.478h-.937V20H2.369v-7.608h-.957c-.377 0-.733-.156-1-.439a1.494 1.494 0 0 1-.306-.485A1.562 1.562 0 0 1 0 10.895c0-.397.148-.773.415-1.056Zm8.35 8.478h2.47v-4.765h-2.47v4.765Zm-4.807-7.607v7.607h3.395v-5.325c0-.517.395-.935.882-.935h3.53c.487 0 .882.418.882.935v5.325h3.395v-7.607h2.118L9.998 2.075l-.51.54-7.65 8.096h2.12Z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMain2020);

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI958s {
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--font-l);
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;AACJ","sourcesContent":[".NotFoundPage {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font: var(--font-l);\n    height: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NotFoundPage": `src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI958s`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-AppLink-ui-AppLink-module__AppLink--sD2Wy7f_ {
  color: var(--primary-color);
}

.src-shared-ui-AppLink-ui-AppLink-module__primary--hqeiMANp {
  color: var(--primary-color);
}

.src-shared-ui-AppLink-ui-AppLink-module__secondary--Xse3kWB9 {
  color: var(--inverted-primary-color);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/AppLink/ui/AppLink.module.scss"],"names":[],"mappings":"AAAA;EACI,2BAAA;AACJ;;AAEA;EACI,2BAAA;AACJ;;AAEA;EACI,oCAAA;AACJ","sourcesContent":[".AppLink {\n    color: var(--primary-color);\n}\n\n.primary {\n    color: var(--primary-color);\n}\n\n.secondary {\n    color: var(--inverted-primary-color);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AppLink": `src-shared-ui-AppLink-ui-AppLink-module__AppLink--sD2Wy7f_`,
	"primary": `src-shared-ui-AppLink-ui-AppLink-module__primary--hqeiMANp`,
	"secondary": `src-shared-ui-AppLink-ui-AppLink-module__secondary--Xse3kWB9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FUo_e {
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background: var(--inverted-bg-color);
  position: relative;
  transition: width 0.3s;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIwYBn {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZdtA {
  margin-left: 20px;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapseBtn--yI4nnHz0 {
  position: absolute;
  right: -32px;
  bottom: 32px;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__items--rzn_g8kL {
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__item--vtqgDCnx {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__link--qgMR9tkG {
  margin-left: 10px;
  opacity: 1;
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__icon--PRb0ayeN {
  fill: var(--inverted-primary-color);
}

.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhCrau {
  width: var(--sidebar-width-collapsed);
}
.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhCrau .src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIwYBn {
  flex-direction: column;
  align-items: center;
}
.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhCrau .src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZdtA {
  margin-left: 0;
}
.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhCrau .src-widgets-Sidebar-ui-Sidebar-Sidebar-module__link--qgMR9tkG {
  opacity: 0;
  transition: 0.2s opacity;
  width: 0;
}`, "",{"version":3,"sources":["webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"],"names":[],"mappings":"AAAA;EACI,0CAAA;EACA,2BAAA;EACA,oCAAA;EACA,kBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,WAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,YAAA;EACA,YAAA;AACJ;;AAEA;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,UAAA;AACJ;;AAEA;EACI,mCAAA;AACJ;;AAEA;EACI,qCAAA;AACJ;AACI;EACI,sBAAA;EACA,mBAAA;AACR;AAEI;EACI,cAAA;AAAR;AAGI;EACI,UAAA;EACA,wBAAA;EACA,QAAA;AADR","sourcesContent":[".Sidebar {\n    height: calc(100vh - var(--navbar-height));\n    width: var(--sidebar-width);\n    background: var(--inverted-bg-color);\n    position: relative;\n    transition: width 0.3s;\n}\n\n.switchers {\n    position: absolute;\n    bottom: 20px;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.lang {\n    margin-left: 20px;\n}\n\n.collapseBtn {\n    position: absolute;\n    right: -32px;\n    bottom: 32px;\n}\n\n.items {\n    margin-top: 20px;\n    margin-left: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.item {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.link {\n    margin-left: 10px;\n    opacity: 1;\n}\n\n.icon {\n    fill: var(--inverted-primary-color);\n}\n\n.collapsed {\n    width: var(--sidebar-width-collapsed);\n\n    .switchers {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .lang {\n        margin-left: 0;\n    }\n\n    .link {\n        opacity: 0;\n        transition: 0.2s opacity;\n        width: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Sidebar": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FUo_e`,
	"switchers": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIwYBn`,
	"lang": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZdtA`,
	"collapseBtn": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapseBtn--yI4nnHz0`,
	"items": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__items--rzn_g8kL`,
	"item": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__item--vtqgDCnx`,
	"link": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__link--qgMR9tkG`,
	"icon": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__icon--PRb0ayeN`,
	"collapsed": `src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhCrau`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/NotFoundPage/ui/NotFoundPage.module.scss":
/*!************************************************************!*\
  !*** ./src/pages/NotFoundPage/ui/NotFoundPage.module.scss ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NotFoundPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NotFoundPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NotFoundPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_NotFoundPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/AppLink/ui/AppLink.module.scss":
/*!******************************************************!*\
  !*** ./src/shared/ui/AppLink/ui/AppLink.module.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AppLink.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AppLink.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AppLink.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_AppLink_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss":
/*!************************************************************!*\
  !*** ./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Sidebar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Sidebar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Sidebar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=widgets-Sidebar-ui-Sidebar-Sidebar-stories.js.map