"use strict";
(self["webpackChunkstudyproject"] = self["webpackChunkstudyproject"] || []).push([["shared-ui-Button-ui-Button-stories"],{

/***/ "./src/shared/ui/Button/ui/Button.stories.ts":
/*!***************************************************!*\
  !*** ./src/shared/ui/Button/ui/Button.stories.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundInverted: () => (/* binding */ BackgroundInverted),
/* harmony export */   BackgroundTheme: () => (/* binding */ BackgroundTheme),
/* harmony export */   Clear: () => (/* binding */ Clear),
/* harmony export */   ClearDark: () => (/* binding */ ClearDark),
/* harmony export */   ClearInverted: () => (/* binding */ ClearInverted),
/* harmony export */   ClearInvertedDark: () => (/* binding */ ClearInvertedDark),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   OutlineSizeL: () => (/* binding */ OutlineSizeL),
/* harmony export */   OutlineSizeXL: () => (/* binding */ OutlineSizeXL),
/* harmony export */   Outlined: () => (/* binding */ Outlined),
/* harmony export */   OutlinedDark: () => (/* binding */ OutlinedDark),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   PrimaryDark: () => (/* binding */ PrimaryDark),
/* harmony export */   Square: () => (/* binding */ Square),
/* harmony export */   SquareL: () => (/* binding */ SquareL),
/* harmony export */   SquareXL: () => (/* binding */ SquareXL),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/styles/index.scss */ "./src/app/styles/index.scss");
/* harmony import */ var shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/config/storybook/ThemeDecorator/ThemeDecorator */ "./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx");
/* harmony import */ var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/shared/ui/Button/ui/Button.tsx");




var meta = {
  title: 'shared/Button',
  component: _Button__WEBPACK_IMPORTED_MODULE_3__.Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
var Primary = {
  args: {
    children: 'TEXT'
  }
};
var PrimaryDark = {
  args: {
    children: 'TEXT'
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
var Clear = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.CLEAR
  }
};
var ClearInverted = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.CLEAR_INVERTED
  }
};
var ClearDark = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.CLEAR
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
var ClearInvertedDark = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.CLEAR_INVERTED
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
var Outlined = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.OUTLINE
  }
};
var OutlinedDark = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.OUTLINE
  },
  decorators: [(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.ThemeDecorator)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Theme.DARK)]
};
var BackgroundTheme = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.BACKGROUND
  }
};
var BackgroundInverted = {
  args: {
    children: 'TEXT',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.BACKGROUND_INVERTED
  }
};
var Square = {
  args: {
    children: '>',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.BACKGROUND_INVERTED,
    square: true
  }
};
var SquareL = {
  args: {
    children: '>',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.L
  }
};
var SquareXL = {
  args: {
    children: '>',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.XL
  }
};
var OutlineSizeL = {
  args: {
    children: '>',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.OUTLINE,
    size: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.L
  }
};
var OutlineSizeXL = {
  args: {
    children: '>',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.OUTLINE,
    size: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.XL
  }
};
var Disabled = {
  args: {
    children: '>',
    theme: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.OUTLINE,
    disabled: true
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
PrimaryDark.parameters = {
  ...PrimaryDark.parameters,
  docs: {
    ...PrimaryDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...PrimaryDark.parameters?.docs?.source
    }
  }
};
Clear.parameters = {
  ...Clear.parameters,
  docs: {
    ...Clear.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.CLEAR\n  }\n}",
      ...Clear.parameters?.docs?.source
    }
  }
};
ClearInverted.parameters = {
  ...ClearInverted.parameters,
  docs: {
    ...ClearInverted.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.CLEAR_INVERTED\n  }\n}",
      ...ClearInverted.parameters?.docs?.source
    }
  }
};
ClearDark.parameters = {
  ...ClearDark.parameters,
  docs: {
    ...ClearDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.CLEAR\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...ClearDark.parameters?.docs?.source
    }
  }
};
ClearInvertedDark.parameters = {
  ...ClearInvertedDark.parameters,
  docs: {
    ...ClearInvertedDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.CLEAR_INVERTED\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...ClearInvertedDark.parameters?.docs?.source
    }
  }
};
Outlined.parameters = {
  ...Outlined.parameters,
  docs: {
    ...Outlined.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.OUTLINE\n  }\n}",
      ...Outlined.parameters?.docs?.source
    }
  }
};
OutlinedDark.parameters = {
  ...OutlinedDark.parameters,
  docs: {
    ...OutlinedDark.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.OUTLINE\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
      ...OutlinedDark.parameters?.docs?.source
    }
  }
};
BackgroundTheme.parameters = {
  ...BackgroundTheme.parameters,
  docs: {
    ...BackgroundTheme.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.BACKGROUND\n  }\n}",
      ...BackgroundTheme.parameters?.docs?.source
    }
  }
};
BackgroundInverted.parameters = {
  ...BackgroundInverted.parameters,
  docs: {
    ...BackgroundInverted.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'TEXT',\n    theme: ButtonTheme.BACKGROUND_INVERTED\n  }\n}",
      ...BackgroundInverted.parameters?.docs?.source
    }
  }
};
Square.parameters = {
  ...Square.parameters,
  docs: {
    ...Square.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: '>',\n    theme: ButtonTheme.BACKGROUND_INVERTED,\n    square: true\n  }\n}",
      ...Square.parameters?.docs?.source
    }
  }
};
SquareL.parameters = {
  ...SquareL.parameters,
  docs: {
    ...SquareL.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: '>',\n    theme: ButtonTheme.BACKGROUND_INVERTED,\n    square: true,\n    size: ButtonSize.L\n  }\n}",
      ...SquareL.parameters?.docs?.source
    }
  }
};
SquareXL.parameters = {
  ...SquareXL.parameters,
  docs: {
    ...SquareXL.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: '>',\n    theme: ButtonTheme.BACKGROUND_INVERTED,\n    square: true,\n    size: ButtonSize.XL\n  }\n}",
      ...SquareXL.parameters?.docs?.source
    }
  }
};
OutlineSizeL.parameters = {
  ...OutlineSizeL.parameters,
  docs: {
    ...OutlineSizeL.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: '>',\n    theme: ButtonTheme.OUTLINE,\n    size: ButtonSize.L\n  }\n}",
      ...OutlineSizeL.parameters?.docs?.source
    }
  }
};
OutlineSizeXL.parameters = {
  ...OutlineSizeXL.parameters,
  docs: {
    ...OutlineSizeXL.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: '>',\n    theme: ButtonTheme.OUTLINE,\n    size: ButtonSize.XL\n  }\n}",
      ...OutlineSizeXL.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: '>',\n    theme: ButtonTheme.OUTLINE,\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","PrimaryDark","Clear","ClearInverted","ClearDark","ClearInvertedDark","Outlined","OutlinedDark","BackgroundTheme","BackgroundInverted","Square","SquareL","SquareXL","OutlineSizeL","OutlineSizeXL","Disabled"];

/***/ })

}]);
//# sourceMappingURL=shared-ui-Button-ui-Button-stories.js.map