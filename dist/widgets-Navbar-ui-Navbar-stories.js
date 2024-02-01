"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["widgets-Navbar-ui-Navbar-stories"],{

/***/ "./src/widgets/Navbar/ui/Navbar.stories.ts":
/*!*************************************************!*\
  !*** ./src/widgets/Navbar/ui/Navbar.stories.ts ***!
  \*************************************************/
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
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./src/widgets/Navbar/ui/Navbar.tsx");




var meta = {
  title: 'widget/Navbar',
  component: _Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar,
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

/***/ "./src/widgets/Navbar/ui/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/widgets/Navbar/ui/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var features_AuthByUsername__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/AuthByUsername */ "./src/features/AuthByUsername/index.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/User'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Button */ "./src/shared/ui/Button/index.ts");
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.scss */ "./src/widgets/Navbar/ui/Navbar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Navbar = function Navbar(_ref) {
  var className = _ref.className;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAuthModal = _useState2[0],
    setIsAuthModal = _useState2[1];
  var authData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/User'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsAuthModal(false);
  }, []);
  var onShowModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsAuthModal(true);
  }, []);
  var onLogout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'entities/User'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logout());
  }, [dispatch]);
  if (authData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_8__.classNames)(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Navbar, {}, [className]),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(shared_ui_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
        theme: shared_ui_Button__WEBPACK_IMPORTED_MODULE_4__.ButtonTheme.CLEAR_INVERTED,
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].links,
        onClick: onLogout,
        children: t('Logout')
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_8__.classNames)(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Navbar, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(shared_ui_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      theme: shared_ui_Button__WEBPACK_IMPORTED_MODULE_4__.ButtonTheme.CLEAR_INVERTED,
      className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].links,
      onClick: onShowModal,
      children: t('Login')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(features_AuthByUsername__WEBPACK_IMPORTED_MODULE_2__.LoginModal, {
      isOpen: isAuthModal,
      onClose: onCloseModal
    })]
  });
};
Navbar.displayName = "Navbar";
try {
    // @ts-ignore
    Navbar.displayName = "Navbar";
    // @ts-ignore
    Navbar.__docgenInfo = { "description": "", "displayName": "Navbar", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/widgets/Navbar/ui/Navbar.tsx#Navbar"] = { docgenInfo: Navbar.__docgenInfo, name: "Navbar", path: "src/widgets/Navbar/ui/Navbar.tsx#Navbar" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss ***!
  \************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yKeo4 {
  width: 100%;
  height: var(--navbar-height);
  background: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  padding: 20px;
}

.src-widgets-Navbar-ui-Navbar-module__links--_tl_p1sn {
  margin-left: auto;
}

.src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbPYMH {
  margin-right: 15px;
}`, "",{"version":3,"sources":["webpack://./src/widgets/Navbar/ui/Navbar.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,4BAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ","sourcesContent":[".Navbar {\n    width: 100%;\n    height: var(--navbar-height);\n    background: var(--inverted-bg-color);\n    display: flex;\n    align-items: center;\n    padding: 20px;\n}\n\n.links {\n    margin-left: auto;\n}\n\n.mainLink {\n    margin-right: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Navbar": `src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yKeo4`,
	"links": `src-widgets-Navbar-ui-Navbar-module__links--_tl_p1sn`,
	"mainLink": `src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbPYMH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/widgets/Navbar/ui/Navbar.module.scss":
/*!**************************************************!*\
  !*** ./src/widgets/Navbar/ui/Navbar.module.scss ***!
  \**************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Navbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Navbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Navbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=widgets-Navbar-ui-Navbar-stories.js.map