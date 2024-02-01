"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["shared-ui-Text-ui-Text-stories"],{

/***/ "./src/shared/ui/Text/ui/Text.stories.tsx":
/*!************************************************!*\
  !*** ./src/shared/ui/Text/ui/Text.stories.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error: () => (/* binding */ Error),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   PrimaryDark: () => (/* binding */ PrimaryDark),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onlyText: () => (/* binding */ onlyText),
/* harmony export */   onlyTextDark: () => (/* binding */ onlyTextDark),
/* harmony export */   onlyTitle: () => (/* binding */ onlyTitle),
/* harmony export */   onlyTitleDark: () => (/* binding */ onlyTitleDark)
/* harmony export */ });
/* harmony import */ var shared_ui_Text_ui_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ui/Text/ui/Text */ "./src/shared/ui/Text/ui/Text.tsx");
/* harmony import */ var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/config/storybook/ThemeDecorator/ThemeDecorator */ "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx");
/* harmony import */ var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");




var meta = {
  title: 'shared/Text',
  component: shared_ui_Text_ui_Text__WEBPACK_IMPORTED_MODULE_0__.Text,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var Primary = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description'
  }
};
var Error = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: shared_ui_Text_ui_Text__WEBPACK_IMPORTED_MODULE_0__.TextTheme.ERROR
  }
};
var onlyTitle = {
  args: {
    title: 'Title lorem ipsun'
  }
};
var onlyText = {
  args: {
    text: 'Description Description Description Description'
  }
};
var PrimaryDark = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description'
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
var onlyTitleDark = {
  args: {
    title: 'Title lorem ipsun'
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
var onlyTextDark = {
  args: {
    text: 'Description Description Description Description'
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Title lorem ipsun',\n    text: 'Description Description Description Description'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Title lorem ipsun',\n    text: 'Description Description Description Description',\n    theme: TextTheme.ERROR\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
onlyTitle.parameters = {
  ...onlyTitle.parameters,
  docs: {
    ...onlyTitle.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Title lorem ipsun'\n  }\n}",
      ...onlyTitle.parameters?.docs?.source
    }
  }
};
onlyText.parameters = {
  ...onlyText.parameters,
  docs: {
    ...onlyText.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    text: 'Description Description Description Description'\n  }\n}",
      ...onlyText.parameters?.docs?.source
    }
  }
};
PrimaryDark.parameters = {
  ...PrimaryDark.parameters,
  docs: {
    ...PrimaryDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Title lorem ipsun',\n    text: 'Description Description Description Description'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...PrimaryDark.parameters?.docs?.source
    }
  }
};
onlyTitleDark.parameters = {
  ...onlyTitleDark.parameters,
  docs: {
    ...onlyTitleDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Title lorem ipsun'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...onlyTitleDark.parameters?.docs?.source
    }
  }
};
onlyTextDark.parameters = {
  ...onlyTextDark.parameters,
  docs: {
    ...onlyTextDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    text: 'Description Description Description Description'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...onlyTextDark.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Error","onlyTitle","onlyText","PrimaryDark","onlyTitleDark","onlyTextDark"];

/***/ }),

/***/ "./src/shared/lib/classNames/classNames.ts":
/*!*************************************************!*\
  !*** ./src/shared/lib/classNames/classNames.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ classNames)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function classNames(cls) {
  var mods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var additional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return [cls].concat(_toConsumableArray(additional.filter(Boolean)), _toConsumableArray(Object.entries(mods).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      _ = _ref2[0],
      value = _ref2[1];
    return Boolean(value);
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      className = _ref4[0];
    return className;
  }))).join(' ');
}

/***/ }),

/***/ "./src/shared/ui/Text/ui/Text.tsx":
/*!****************************************!*\
  !*** ./src/shared/ui/Text/ui/Text.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TextTheme: () => (/* binding */ TextTheme)
/* harmony export */ });
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Text_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.module.scss */ "./src/shared/ui/Text/ui/Text.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var TextTheme = /*#__PURE__*/function (TextTheme) {
  TextTheme["PRIMARY"] = "primary";
  TextTheme["ERROR"] = "error";
  return TextTheme;
}({});
var Text = function Text(props) {
  var className = props.className,
    text = props.text,
    title = props.title,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? TextTheme.PRIMARY : _props$theme;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_Text_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Text, _defineProperty({}, _Text_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"][theme], true), [className]),
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: _Text_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title,
      children: title
    }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: _Text_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].text,
      children: text
    })]
  });
};
Text.displayName = "Text";
try {
    // @ts-ignore
    Text.displayName = "Text";
    // @ts-ignore
    Text.__docgenInfo = { "description": "", "displayName": "Text", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "text": { "defaultValue": null, "description": "", "name": "text", "required": false, "type": { "name": "string" } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"error\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/shared/ui/Text/ui/Text.tsx#Text"] = { docgenInfo: Text.__docgenInfo, name: "Text", path: "src/shared/ui/Text/ui/Text.tsx#Text" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/ui/Text.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/ui/Text.module.scss ***!
  \**********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Text-ui-Text-module__title--JDoegl3e {
  font: var(--font-l);
  color: var(--primary-color);
}

.src-shared-ui-Text-ui-Text-module__text--Az3m2gsu {
  font: var(--font-m);
  color: var(--secondary-color);
}

.src-shared-ui-Text-ui-Text-module__error--VCxWSrMC .src-shared-ui-Text-ui-Text-module__title--JDoegl3e {
  color: var(--red-light);
}
.src-shared-ui-Text-ui-Text-module__error--VCxWSrMC .src-shared-ui-Text-ui-Text-module__text--Az3m2gsu {
  color: var(--red-dark);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Text/ui/Text.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,2BAAA;AACJ;;AAEA;EACI,mBAAA;EACA,6BAAA;AACJ;;AAGI;EACI,uBAAA;AAAR;AAGI;EACI,sBAAA;AADR","sourcesContent":[".title {\n    font: var(--font-l);\n    color: var(--primary-color);\n}\n\n.text {\n    font: var(--font-m);\n    color: var(--secondary-color);\n}\n\n.error {\n    .title {\n        color: var(--red-light);\n    }\n\n    .text {\n        color: var(--red-dark);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": `src-shared-ui-Text-ui-Text-module__title--JDoegl3e`,
	"text": `src-shared-ui-Text-ui-Text-module__text--Az3m2gsu`,
	"error": `src-shared-ui-Text-ui-Text-module__error--VCxWSrMC`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Text/ui/Text.module.scss":
/*!************************************************!*\
  !*** ./src/shared/ui/Text/ui/Text.module.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/ui/Text.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/ui/Text.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/ui/Text.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=shared-ui-Text-ui-Text-stories.js.map