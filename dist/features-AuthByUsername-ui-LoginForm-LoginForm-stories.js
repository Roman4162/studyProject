"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["features-AuthByUsername-ui-LoginForm-LoginForm-stories"],{

/***/ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.ts":
/*!***********************************************************************!*\
  !*** ./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");
/* harmony import */ var shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/config/storybook/StoreDecorator/StoreDecorator */ "./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm */ "./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx");



var meta = {
  title: 'features/LoginForm',
  component: _LoginForm__WEBPACK_IMPORTED_MODULE_2__.LoginForm,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var Primary = {
  args: {},
  decorators: [(0,shared_config_storybook_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.StoreDecorator)({
    loginForm: {
      username: 'username',
      password: 'password',
      error: 'Error'
    }
  })]
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {},\n  decorators: [StoreDecorator({\n    loginForm: {\n      username: 'username',\n      password: 'password',\n      error: 'Error'\n    }\n  })]\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary"];

/***/ }),

/***/ "./src/app/providers/StoreProvider/config/StateSchema.ts":
/*!***************************************************************!*\
  !*** ./src/app/providers/StoreProvider/config/StateSchema.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/app/providers/StoreProvider/config/store.ts":
/*!*********************************************************!*\
  !*** ./src/app/providers/StoreProvider/config/store.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReduxStore: () => (/* binding */ createReduxStore)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var features_AuthByUsername__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! features/AuthByUsername */ "./src/features/AuthByUsername/index.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/Counter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/User'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function createReduxStore(initialState) {
  var rootReducers = {
    counter: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/Counter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    user: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/User'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    loginForm: features_AuthByUsername__WEBPACK_IMPORTED_MODULE_0__.loginReducer
  };
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState
  });
}

/***/ }),

/***/ "./src/app/providers/StoreProvider/index.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/StoreProvider/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateSchema: () => (/* reexport safe */ _config_StateSchema__WEBPACK_IMPORTED_MODULE_2__.StateSchema),
/* harmony export */   StoreProvider: () => (/* reexport safe */ _ui_StoreProvider__WEBPACK_IMPORTED_MODULE_0__.StoreProvider),
/* harmony export */   createReduxStore: () => (/* reexport safe */ _config_store__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)
/* harmony export */ });
/* harmony import */ var _ui_StoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/StoreProvider */ "./src/app/providers/StoreProvider/ui/StoreProvider.tsx");
/* harmony import */ var _config_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/store */ "./src/app/providers/StoreProvider/config/store.ts");
/* harmony import */ var _config_StateSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/StateSchema */ "./src/app/providers/StoreProvider/config/StateSchema.ts");





/***/ }),

/***/ "./src/app/providers/StoreProvider/ui/StoreProvider.tsx":
/*!**************************************************************!*\
  !*** ./src/app/providers/StoreProvider/ui/StoreProvider.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreProvider: () => (/* binding */ StoreProvider)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/store */ "./src/app/providers/StoreProvider/config/store.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var StoreProvider = function StoreProvider(props) {
  var children = props.children,
    initialState = props.initialState;
  var store = (0,_config_store__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(initialState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: store,
    children: children
  });
};
StoreProvider.displayName = "StoreProvider";
try {
    // @ts-ignore
    StoreProvider.displayName = "StoreProvider";
    // @ts-ignore
    StoreProvider.__docgenInfo = { "description": "", "displayName": "StoreProvider", "props": { "initialState": { "defaultValue": null, "description": "", "name": "initialState", "required": false, "type": { "name": "DeepPartial<StateSchema>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/app/providers/StoreProvider/ui/StoreProvider.tsx#StoreProvider"] = { docgenInfo: StoreProvider.__docgenInfo, name: "StoreProvider", path: "src/app/providers/StoreProvider/ui/StoreProvider.tsx#StoreProvider" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreDecorator: () => (/* binding */ StoreDecorator)
/* harmony export */ });
/* harmony import */ var app_providers_StoreProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/providers/StoreProvider */ "./src/app/providers/StoreProvider/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var StoreDecorator = function StoreDecorator(state) {
  return function (Story) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(app_providers_StoreProvider__WEBPACK_IMPORTED_MODULE_0__.StoreProvider, {
      initialState: state,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story, {})
    });
  };
};
try {
    // @ts-ignore
    StoreDecorator.displayName = "StoreDecorator";
    // @ts-ignore
    StoreDecorator.__docgenInfo = { "description": "", "displayName": "StoreDecorator", "props": { "counter": { "defaultValue": null, "description": "", "name": "counter", "required": false, "type": { "name": "DeepPartial<CounterSchema>" } }, "user": { "defaultValue": null, "description": "", "name": "user", "required": false, "type": { "name": "DeepPartial<UserSchema>" } }, "loginForm": { "defaultValue": null, "description": "", "name": "loginForm", "required": false, "type": { "name": "DeepPartial<LoginSchema>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx#StoreDecorator"] = { docgenInfo: StoreDecorator.__docgenInfo, name: "StoreDecorator", path: "src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx#StoreDecorator" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);
//# sourceMappingURL=features-AuthByUsername-ui-LoginForm-LoginForm-stories.js.map