"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["shared-ui-Modal-ui-Modal-stories"],{

/***/ "./src/shared/ui/Modal/ui/Modal.stories.tsx":
/*!**************************************************!*\
  !*** ./src/shared/ui/Modal/ui/Modal.stories.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/shared/ui/Modal/ui/Modal.tsx");


var meta = {
  title: 'shared/Modal',
  component: _Modal__WEBPACK_IMPORTED_MODULE_1__.Modal,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var Primary = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit accusantium dicta. Accusamus at sit voluptatum excepturi quaerat! Modi, dicta quod maiores recusandae alias optio deleniti dolore ex deserunt rem?'
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    isOpen: true,\n    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit accusantium dicta. Accusamus at sit voluptatum excepturi quaerat! Modi, dicta quod maiores recusandae alias optio deleniti dolore ex deserunt rem?'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary"];

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

/***/ })

}]);
//# sourceMappingURL=shared-ui-Modal-ui-Modal-stories.js.map