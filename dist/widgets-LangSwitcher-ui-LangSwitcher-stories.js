"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["widgets-LangSwitcher-ui-LangSwitcher-stories"],{

/***/ "./src/widgets/LangSwitcher/ui/LangSwitcher.stories.ts":
/*!*************************************************************!*\
  !*** ./src/widgets/LangSwitcher/ui/LangSwitcher.stories.ts ***!
  \*************************************************************/
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
/* harmony import */ var _LangSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LangSwitcher */ "./src/widgets/LangSwitcher/ui/LangSwitcher.tsx");




var meta = {
  title: 'widget/LangSwitcher',
  component: _LangSwitcher__WEBPACK_IMPORTED_MODULE_3__.LangSwitcher,
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

/***/ })

}]);
//# sourceMappingURL=widgets-LangSwitcher-ui-LangSwitcher-stories.js.map