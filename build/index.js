/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Modal = ({
  isOpen,
  attributes,
  setAttributes
}) => {
  const {
    title,
    desc,
    modalWidth,
    modalBorderRadius,
    modalTextAlign,
    modalHeadingTagName
  } = attributes;
  if (!isOpen) return null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: modalWidth + 'px',
      borderRadius: modalBorderRadius + 'px',
      textAlign: modalTextAlign
    },
    id: "modal-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: modalHeadingTagName,
    placeholder: "Modal Title",
    value: title,
    onChange: title => {
      setAttributes({
        title: title
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    placeholder: "enter description",
    value: desc,
    onChange: newDesc => {
      setAttributes({
        desc: newDesc
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['core/image', 'core/gallery', 'core/paragraph', 'core/video'],
    template: [['core/image']]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/tabs/advanceSettings.js":
/*!************************************************!*\
  !*** ./src/components/tabs/advanceSettings.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const AdvanceSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    responsiveConditions
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Conditions', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide On Desktop"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions?.desktop,
    onChange: newValue => {
      setAttributes({
        responsiveConditions: {
          ...responsiveConditions,
          desktop: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide On Tablet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions?.tablet,
    onChange: newValue => {
      setAttributes({
        responsiveConditions: {
          ...responsiveConditions,
          tablet: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide On Mobile"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions?.mobile,
    onChange: newValue => {
      setAttributes({
        responsiveConditions: {
          ...responsiveConditions,
          mobile: newValue
        }
      });
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvanceSettings);

/***/ }),

/***/ "./src/components/tabs/generalSettings.js":
/*!************************************************!*\
  !*** ./src/components/tabs/generalSettings.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const GeneralSettings = ({
  tabTags,
  attributes,
  setAttributes
}) => {
  const {
    tabWidth
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Heading Tag Name', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, tabTags?.map((tag, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: i,
    className: "button-tag",
    onClick: () => setAttributes({
      tabHeadingTagName: tag
    })
  }, tag)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Direction', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "button-tb-alignment",
    onClick: () => setAttributes({
      buttonAlignment: 'row'
    })
  }, "Row ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-right"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "button-tb-alignment",
    onClick: () => setAttributes({
      buttonAlignment: 'column'
    })
  }, "Column ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-down"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Alignment', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, ['left', 'center', 'right'].map((align, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: i,
    className: "button-text-alignment",
    title: align,
    onClick: () => setAttributes({
      tabTextAlignment: align
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: `align-${align}`
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Width Controller', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: tabWidth,
    min: 250,
    max: 800,
    onChange: w => setAttributes({
      tabWidth: w
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/components/tabs/styleSettings.js":
/*!**********************************************!*\
  !*** ./src/components/tabs/styleSettings.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../local */ "./src/local.js");






const StyleSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    active_tab,
    tabsColor,
    tabBtnBorderColor,
    tabBtnBgColor,
    tabBtnTextColor,
    tabBtnType,
    activeBtnColor,
    hoverBtnColor,
    fontFamily,
    fontVisualStyle,
    fontWidth,
    textDecoration,
    lineHeight,
    fontSize,
    letterSpacing,
    hasBorderRadius,
    btnBorderRadius,
    tabPadding,
    tabBorder,
    tabBorderRadius,
    fontVariants
  } = attributes;
  const [fontFamilies, setFontFamilies] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [allFonts, setAllFonts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${_local__WEBPACK_IMPORTED_MODULE_5__.API_KEY}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
      const allFonts = data.items;
      setAllFonts(allFonts);
      const labels = allFonts.map((f, i) => ({
        label: f.family,
        variants: f.variants,
        id: i
      }));
      setFontFamilies(labels);
    }).catch(error => {
      console.error('Error fetching fonts:', error);
    });
  }, []);

  // function for change tab content color and background color
  const onChangeTabColor = (color, activeTab, action) => {
    if (activeTab) {
      const updatedTabsColor = tabsColor?.map(tc => {
        if (tc.tabId == activeTab) {
          if (action === 'textColor') {
            return {
              ...tc,
              textColor: color
            };
          } else {
            return {
              ...tc,
              bgColor: color
            };
          }
        }
        return tc;
      });
      setAttributes({
        tabsColor: updatedTabsColor
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Button Settings', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    style: {
      display: 'flex'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      tabBtnType: 'primary'
    }),
    className: "button-tb-alignment",
    variant: "primary"
  }, "Primary"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      tabBtnType: 'secondary'
    }),
    className: "button-tb-alignment",
    variant: "secondary"
  }, "Secondary"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      tabBtnType: 'custom'
    }),
    className: "button-tb-alignment",
    variant: "secondary"
  }, "Custom ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "admin-customizer"
  }))), tabBtnType === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Button Color Settings', 'demo-tabs'),
    icon: "admin-appearance",
    initialOpen: true,
    disableCustomColors: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'demo-tabs'),
      value: tabBtnTextColor,
      onChange: c => {
        setAttributes({
          tabBtnTextColor: c
        });
      }
    }, tabBtnType !== 'secondary' && {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'demo-tabs'),
      value: tabBtnBgColor,
      onChange: bg => {
        setAttributes({
          tabBtnBgColor: bg
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'demo-tabs'),
      value: tabBtnBorderColor,
      onChange: br => {
        setAttributes({
          tabBtnBorderColor: br
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Active Button Color', 'demo-tabs'),
      value: activeBtnColor,
      onChange: ac => {
        setAttributes({
          activeBtnColor: ac
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Button Color', 'demo-tabs'),
      value: hoverBtnColor,
      onChange: hc => {
        setAttributes({
          hoverBtnColor: hc
        });
      }
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Enable Border Radius",
    checked: hasBorderRadius,
    onChange: newValue => {
      setAttributes({
        btnBorderRadius: 0,
        hasBorderRadius: newValue
      });
    }
  }), hasBorderRadius && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: btnBorderRadius,
    label: "Add Border Radius",
    min: 0,
    max: 50,
    onChange: val => {
      setAttributes({
        btnBorderRadius: val
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Content Color Settings', 'demo-tabs'),
    icon: "admin-appearance",
    initialOpen: true,
    disableCustomColors: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'demo-tabs'),
      value: tabsColor?.find(t => t.tabId == active_tab)?.textColor,
      onChange: newColor => {
        onChangeTabColor(newColor, active_tab, 'textColor');
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'demo-tabs'),
      value: tabsColor?.find(t => t.tabId == active_tab)?.bgColor,
      onChange: newColor => {
        onChangeTabColor(newColor, active_tab, 'bgColor');
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "TYPOGRAPHY"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
    icon: "admin-customizer"
  }, ({
    onClose
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: '240px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Font Family', 'demo-tabs'),
    value: fontFamily,
    options: fontFamilies,
    onChange: value => {
      const font = allFonts.find(f => f.family === value);
      const fontVariantsLabel = (font?.variants || []).filter(f => !isNaN(f)).map((f, i) => ({
        label: f,
        value: f,
        id: i
      }));
      const defaultVariants = [{
        label: 400,
        value: 400,
        id: 1
      }, {
        label: 600,
        value: 600,
        id: 2
      }];
      setAttributes({
        fontFamily: font.family,
        fontCategory: font.category,
        fontVariants: fontVariantsLabel.length > 1 ? fontVariantsLabel : defaultVariants
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Style', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: fontVisualStyle,
    options: [{
      label: 'Default',
      value: 'normal'
    }, {
      label: 'Italic',
      value: 'italic'
    }],
    onChange: change => {
      setAttributes({
        fontVisualStyle: change
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Width', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: fontWidth,
    options: fontVariants,
    onChange: change => {
      setAttributes({
        fontWidth: change
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Decoration', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    onChange: state => {
      setAttributes({
        textDecoration: state
      });
    },
    value: textDecoration,
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "none",
    label: "T"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "underline",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "editor-underline"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "line-through",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "editor-strikethrough"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "overline",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "editor-paste-text"
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Font Size', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: fontSize,
    min: 10,
    max: 30,
    onChange: v => {
      setAttributes({
        fontSize: v
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: letterSpacing,
    min: 0,
    max: 15,
    onChange: v => {
      setAttributes({
        letterSpacing: v
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: lineHeight,
    min: 0,
    max: 6,
    onChange: v => {
      setAttributes({
        lineHeight: v
      });
    }
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Padding', 'demo-tabs'),
    values: tabPadding,
    onChange: nextValues => {
      setAttributes({
        tabPadding: nextValues
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Border', 'demo-tabs'),
    onChange: newBorder => {
      setAttributes({
        tabBorder: newBorder
      });
    },
    value: tabBorder
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Border Radius', 'demo-tabs'),
    value: tabBorderRadius,
    min: 0,
    max: 40,
    onChange: v => {
      setAttributes({
        tabBorderRadius: v
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSettings);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab */ "./src/tab.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_tabs_generalSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tabs/generalSettings */ "./src/components/tabs/generalSettings.js");
/* harmony import */ var _components_tabs_styleSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs/styleSettings */ "./src/components/tabs/styleSettings.js");
/* harmony import */ var _components_tabs_advanceSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs/advanceSettings */ "./src/components/tabs/advanceSettings.js");











function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    tabs,
    active_tab,
    tabs_data,
    tabsColor,
    settingsPanelState,
    buttonAlignment,
    tabTextAlignment,
    tabWidth,
    tabBtnType,
    tabBtnTextColor,
    tabBtnBgColor,
    tabBtnBorderColor,
    activeBtnColor,
    hoverBtnColor,
    btnBorderRadius,
    fontFamily,
    fontCategory,
    fontVisualStyle,
    fontWidth,
    textDecoration,
    lineHeight,
    letterSpacing,
    tabPadding,
    tabBorder,
    tabBorderRadius
  } = attributes;
  const [activeTd, setActiveTd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const tabTags = ['h1', 'h2', 'h3', 'h4', 'p'];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const data = tabs_data.find(td => td.tabId === active_tab);
    setActiveTd(data);
  }, [active_tab]);

  // function for create a new tab
  const addNewTab = tabId => {
    const newTab = {
      id: `${tabId}`,
      title: `Tab-${tabId}`,
      active: false
    };
    setAttributes({
      tabs: [...tabs, newTab]
    });
    const newData = {
      tabId: `${tabId}`,
      title: `demo title ${tabId}`,
      desc: '',
      img: ''
    };
    setAttributes({
      tabs_data: [...tabs_data, newData]
    });

    // create color template
    const newColor = {
      textColor: '#000000',
      bgColor: '#F9F9F9',
      tabId: `${tabId}`
    };
    setAttributes({
      tabsColor: [...tabsColor, newColor]
    });
  };
  const onChangeTitle = (newText, id) => {
    setAttributes(tabs.find(t => t.id === id).title = newText);
  };
  const tabButtonClicked = (tabId, tabs_data) => {
    setAttributes({
      active_tab: tabId
    });
    const data = tabs_data.find(td => td.tabId === tabId);
    setActiveTd(data);
  };
  const deleteTab = id => {
    const updatedTabs = tabs.filter(tab => tab.id !== id);
    const updatedTabsData = tabs_data.filter(data => data.tabId !== id);
    setAttributes({
      tabs: updatedTabs,
      tabs_data: updatedTabsData
    });
  };
  const activeClass = (tabBtnType, tabId, activeTab) => {
    if (tabBtnType === 'primary') {
      if (tabId == activeTab) {
        return 'primary-button-active';
      } else {
        return 'tab-button-primary';
      }
    } else if (tabBtnType === 'secondary') {
      if (tabId == activeTab) {
        return 'secondary-button-active';
      } else {
        return 'tab-button-secondary';
      }
    } else {
      return 'tab-button';
    }
  };
  const getCustomStyles = (tabBtnType, tabId, active_tab) => {
    if (tabBtnType === 'custom') {
      if (tabId == active_tab) {
        return {
          color: tabBtnTextColor,
          border: `2px solid ${tabBtnBorderColor}`,
          backgroundColor: activeBtnColor
        };
      }
      return {
        color: tabBtnTextColor,
        border: `2px solid ${tabBtnBorderColor}`,
        backgroundColor: tabBtnBgColor
      };
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setAttributes({
      customStyle: getCustomStyles(tabBtnType, 1, '*')
    });
    setAttributes({
      customClass: activeClass(tabBtnType, 1, '*')
    });
  }, [active_tab, tabBtnType, tabBtnBgColor, tabBtnBorderColor, tabBtnTextColor]);
  const removeTabImage = tabId => {
    if (tabId) {
      const updatedTabs = tabs_data.map(tab => {
        if (tab.tabId === tabId) {
          return {
            ...tab,
            img: null
          };
        }
        return tab;
      });
      setAttributes({
        tabs_data: updatedTabs
      });
      const data = updatedTabs.find(td => td.tabId == tabId);
      setActiveTd(data);
    }
  };
  const onSelectURL = (url, tabId) => {
    if (tabId) {
      const updatedTabs = tabs_data.map(tab => {
        if (tab.tabId === tabId) {
          return {
            ...tab,
            img: url
          };
        }
        return tab;
      });
      setAttributes({
        tabs_data: updatedTabs
      });
      const data = updatedTabs.find(td => td.tabId == tabId);
      setActiveTd(data);
    }
  };
  const onSelectImage = (img, tabId) => {
    if (tabId) {
      const updatedTabs = tabs_data.map(tab => {
        if (tab.tabId === tabId) {
          return {
            ...tab,
            img: img.url
          };
        }
        return tab;
      });
      setAttributes({
        tabs_data: updatedTabs
      });
      const data = updatedTabs.find(td => td.tabId == tabId);
      setActiveTd(data);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
    group: "inline"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    onClick: () => deleteTab(active_tab)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Tab', 'demo-tabs')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    onClick: () => removeTabImage(active_tab)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'demo-tabs')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaReplaceFlow, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace Image', 'demo-tabs'),
    onSelect: image => onSelectImage(image, active_tab),
    onSelectURL: newURL => onSelectURL(newURL, active_tab),
    accept: "image/*",
    allowedTypes: ['image']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Settings Panel', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControl, {
    onChange: state => setAttributes({
      settingsPanelState: state
    }),
    value: settingsPanelState,
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
    value: "general",
    label: "General"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
    value: "styles",
    label: "Styles"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
    value: "advanced",
    label: "Advanced"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalDivider, null), settingsPanelState === 'general' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs_generalSettings__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tabTags: tabTags,
    attributes: attributes,
    setAttributes: setAttributes
  }), settingsPanelState === 'styles' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs_styleSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), settingsPanelState === 'advanced' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs_advanceSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexDirection: buttonAlignment,
      width: tabWidth + 'px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: buttonAlignment === 'row' ? {
      width: '20%'
    } : {
      width: '100%'
    },
    className: "tab-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: buttonAlignment === 'column' ? 'tab-list' : 'tab-list-col'
  }, tabs?.map((tab, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      onClick: () => tabButtonClicked(tab.id, tabs_data),
      style: {
        ...getCustomStyles(tabBtnType, tab.id, active_tab),
        borderRadius: btnBorderRadius,
        fontFamily: `${(fontFamily, fontCategory)}`,
        fontWeight: fontWidth,
        textDecoration: textDecoration,
        fontStyle: fontVisualStyle
      },
      className: activeClass(tabBtnType, tab.id, active_tab),
      tagName: "p",
      key: index,
      onChange: e => onChangeTitle(e, tab.id),
      value: tab.title
    }), index === tabs?.length - 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "add-more-btn"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      style: {
        ...getCustomStyles(tabBtnType, tab.id + 1, '*'),
        textAlign: 'center',
        borderRadius: btnBorderRadius,
        fontFamily: `${(fontFamily, fontCategory)}`,
        fontWeight: fontWidth,
        textDecoration: textDecoration,
        fontStyle: fontVisualStyle
      },
      tagName: "p",
      onClick: () => addNewTab(tabs?.length + 1),
      className: activeClass(tabBtnType, tab.id, '*'),
      value: "+"
    })));
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: tabsColor?.find(t => t.tabId === active_tab)?.bgColor,
      ...(buttonAlignment === 'row' ? {
        width: '80%'
      } : {
        width: '100%',
        fontFamily: `${fontFamily}`
      }),
      paddingTop: tabPadding?.top,
      paddingRight: tabPadding?.right,
      paddingBottom: tabPadding?.bottom,
      paddingLeft: tabPadding?.left,
      border: `${tabBorder?.width} ${tabBorder?.style} ${tabBorder?.color}`,
      borderRadius: tabBorderRadius + 'px'
    },
    className: "tab-content"
  }, tabs?.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: tab.id,
    style: {
      display: tab.id === active_tab ? 'block' : 'none',
      padding: '10px',
      textAlign: tabTextAlignment,
      fontFamily: `${fontFamily}`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    data: activeTd,
    setAttributes: setAttributes,
    tabs_data: tabs_data,
    active_tab: active_tab,
    mediaFunctions: {
      onSelectImage,
      onSelectURL
    }
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/demo-tabs', {
  icon: 'table-row-after',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/local.js":
/*!**********************!*\
  !*** ./src/local.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* binding */ API_KEY)
/* harmony export */ });
const API_KEY = 'AIzaSyDk4pe9MNGVrt3llulmdlfNWaQxzCc_b88';

/***/ }),

/***/ "./src/modal/edit.js":
/*!***************************!*\
  !*** ./src/modal/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _style_editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/editor.css */ "./src/modal/style/editor.css");
/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/modal.css */ "./src/modal/style/modal.css");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);








function Edit({
  attributes,
  setAttributes
}) {
  const {
    openButton,
    closeButton,
    openIcon,
    closeIcon,
    buttonType,
    buttonLayout,
    buttonBgColor,
    buttonColor,
    buttonFontSize,
    modalWidth,
    modalBorderRadius,
    buttonBorderRadius
  } = attributes;
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const modalTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
  const ModalButton = ({
    setIsModalOpen,
    isModalOpen
  }) => {
    // dynamic css
    let buttonStyles = buttonLayout === 'custom' ? {
      backgroundColor: buttonBgColor,
      color: buttonColor,
      fontSize: buttonFontSize + 'px',
      borderRadius: buttonBorderRadius + 'px'
    } : {};
    let classNames = `${buttonLayout === 'primary' && 'modal-primary-button'}
		${buttonLayout === 'secondary' && 'modal-secondary-button'} 
		${buttonLayout === 'custom' && 'custom-button'}`;
    if (buttonType === 'default') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        style: {
          ...buttonStyles,
          borderRadius: buttonBorderRadius + 'px'
        },
        className: classNames,
        onClick: () => setIsModalOpen(!isModalOpen)
      }, ' ', !isModalOpen ? 'Open Modal' : 'Close Modal');
    } else if (buttonType === 'textBox') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        style: {
          ...buttonStyles,
          borderRadius: buttonBorderRadius + 'px'
        },
        className: classNames,
        onClick: () => setIsModalOpen(!isModalOpen)
      }, !isModalOpen ? openButton : closeButton);
    } else if (buttonType === 'icon') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
        style: {
          ...buttonStyles,
          borderRadius: buttonBorderRadius + 'px'
        },
        className: classNames,
        onClick: () => setIsModalOpen(!isModalOpen),
        icon: !isModalOpen ? openIcon : closeIcon
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ModalButton, {
    setIsModalOpen: setIsModalOpen,
    isModalOpen: isModalOpen,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modal Button Setting Options', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Button Content Type', 'demo-tabs'),
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Text Box',
      value: 'textBox'
    }, {
      label: 'Icon',
      value: 'icon'
    }],
    value: buttonType,
    onChange: text => setAttributes({
      buttonType: text
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null), buttonType === 'textBox' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
    text: "button information"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Add Modal Button Text Here")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    onChange: e => setAttributes({
      openButton: e
    }),
    tagName: "h5",
    value: openButton,
    placeholder: "Modal Open Button"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    onChange: e => setAttributes({
      closeButton: e
    }),
    tagName: "h5",
    value: closeButton,
    placeholder: "Modal Close Button"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null)), buttonType === 'icon' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
    text: "button icon information"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Add Modal Button Icon Name Here")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    onChange: e => setAttributes({
      openIcon: e
    }),
    tagName: "h5",
    value: openIcon,
    placeholder: "Enter Icon Name"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    onChange: e => setAttributes({
      closeIcon: e
    }),
    tagName: "h5",
    value: closeIcon,
    placeholder: "Enter close Icon Name"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
    text: "button-groups information"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Choose a Button Layout "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: () => setAttributes({
      buttonLayout: 'primary'
    }),
    variant: "primary"
  }, "Primary"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    style: {
      marginBottom: '5px'
    },
    onClick: () => setAttributes({
      buttonLayout: 'secondary'
    }),
    variant: "secondary"
  }, "Secondary"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    variant: "secondary",
    onClick: () => setAttributes({
      buttonLayout: 'custom'
    })
  }, "Customize ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
    icon: "admin-customizer"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
    text: "button border radius information"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Button Border Radius Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
    min: 0,
    max: 50,
    onChange: c => setAttributes({
      buttonBorderRadius: c
    }),
    value: buttonBorderRadius
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null)), buttonLayout === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
    text: "Button Color information"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Choose Text Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPalette, {
    value: buttonColor,
    onChange: e => setAttributes({
      buttonColor: e
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Choose Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPalette, {
    value: buttonBgColor,
    onChange: e => setAttributes({
      buttonBgColor: e
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Font Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
    min: 14,
    max: 25,
    onChange: c => setAttributes({
      buttonFontSize: c
    }),
    value: buttonFontSize
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modal Content Options', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.MenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Modal width"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "px")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
    min: 280,
    max: 600,
    onChange: c => setAttributes({
      modalWidth: c
    }),
    value: modalWidth
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Border Radius"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "px")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
    min: 0,
    max: 30,
    onChange: c => setAttributes({
      modalBorderRadius: c
    }),
    value: modalBorderRadius
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Text Alignment"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    style: {
      width: '33%'
    },
    onClick: () => setAttributes({
      modalTextAlign: 'left'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
    icon: "align-left"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    style: {
      width: '33%'
    },
    onClick: () => setAttributes({
      modalTextAlign: 'center'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
    icon: "align-center"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    style: {
      width: '33%'
    },
    onClick: () => setAttributes({
      modalTextAlign: 'right'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
    icon: "align-right"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Heading Tag Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, modalTags?.map((tag, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: () => setAttributes({
      modalHeadingTagName: tag
    })
  }, tag))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isModalOpen,
    attributes: attributes,
    setAttributes: setAttributes
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/modal/index.js":
/*!****************************!*\
  !*** ./src/modal/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/modal/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/modal/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/modal', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Demo Modal', 'demo-tabs'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Demo Modal description', 'demo-tabs'),
  keywords: ['demo', 'modal'],
  icon: 'external',
  attributes: {
    title: {
      type: 'string'
    },
    desc: {
      type: 'string'
    },
    buttonType: {
      type: 'string',
      default: 'default'
    },
    openButton: {
      type: 'string'
    },
    closeButton: {
      type: 'string'
    },
    openIcon: {
      type: 'string'
    },
    closeIcon: {
      type: 'string'
    },
    buttonLayout: {
      type: 'string',
      default: 'primary'
    },
    buttonBgColor: {
      type: 'string',
      default: '#007bff'
    },
    buttonColor: {
      type: 'string',
      default: '#fff'
    },
    buttonFontSize: {
      type: 'number',
      default: '17'
    },
    modalWidth: {
      type: 'number',
      default: '540'
    },
    modalBorderRadius: {
      type: 'number',
      default: 0
    },
    modalTextAlign: {
      type: 'string',
      default: 'left'
    },
    modalHeadingTagName: {
      type: 'string',
      default: 'h5'
    },
    buttonBorderRadius: {
      type: 'number',
      default: 0
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/modal/save.js":
/*!***************************!*\
  !*** ./src/modal/save.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    title,
    desc,
    openButton,
    closeButton,
    openIcon,
    closeIcon,
    buttonType,
    buttonLayout,
    buttonBgColor,
    buttonColor,
    buttonFontSize,
    modalHeadingTagName,
    modalWidth,
    modalBorderRadius,
    modalTextAlign,
    buttonBorderRadius
  } = attributes;
  let buttonStyles = buttonLayout === 'custom' ? {
    backgroundColor: buttonBgColor,
    color: buttonColor,
    fontSize: buttonFontSize + 'px'
  } : {};
  let classNames = `${buttonLayout === 'primary' && 'modal-primary-button'}
	${buttonLayout === 'secondary' && 'modal-secondary-button'} 
	${buttonLayout === 'custom' && 'custom-button'}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'modal-body'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    style: {
      ...buttonStyles,
      borderRadius: buttonBorderRadius + 'px'
    },
    className: classNames,
    id: "modal-button"
  }, buttonType === 'textBox' && openButton || buttonType === 'icon' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: openIcon
  }) || buttonType === 'default' && 'Open Modal')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: modalWidth + 'px'
    },
    className: "close-btn-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    style: {
      ...buttonStyles,
      borderRadius: buttonBorderRadius + 'px',
      marginRight: '-40px'
    },
    className: classNames,
    id: "modal-close"
  }, buttonType === 'textBox' && closeButton || buttonType === 'icon' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: closeIcon
  }) || buttonType === 'default' && 'X')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: modalWidth + 'px',
      borderRadius: modalBorderRadius + 'px',
      textAlign: modalTextAlign
    },
    id: "modal-content",
    className: "modal-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: modalHeadingTagName,
    value: title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: desc
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



function save({
  attributes
}) {
  const {
    tabs,
    tabs_data,
    tabsColor,
    tabHeadingTagName,
    customClass,
    customStyle,
    activeBtnColor,
    buttonAlignment,
    tabWidth,
    tabBtnType,
    btnBorderRadius,
    fontFamily,
    fontCategory,
    fontVisualStyle,
    fontWidth,
    textDecoration,
    lineHeight,
    fontSize,
    letterSpacing,
    tabPadding,
    tabBorder,
    tabBorderRadius,
    tabTextAlignment,
    responsiveConditions
  } = attributes;
  const {
    mobile,
    tablet,
    desktop
  } = responsiveConditions;
  const classes = `${desktop === true && 'hidden-desktop'} ${tablet === true && 'hidden-tablet'} ${mobile === true && 'hidden-mobile'}`;
  const imageStyles = {
    width: `${tabWidth - (parseInt(tabPadding?.right) + parseInt(tabPadding?.left))}px`,
    height: '400px'
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexDirection: buttonAlignment,
      width: tabWidth + 'px',
      fontFamily: `${(fontFamily, fontCategory)}`
    },
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: tabBtnType,
    id: "hidden-field",
    type: "hidden",
    value: activeBtnColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "hidden-field2",
    type: "hidden",
    value: customStyle?.backgroundColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: buttonAlignment === 'row' ? {
      width: '20%'
    } : {
      width: tabWidth,
      marginBottom: '5px'
    },
    className: buttonAlignment === 'column' ? 'tab-list' : 'tab-list-col'
  }, tabs?.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab.id,
    "data-info": tab.id,
    style: {
      ...customStyle,
      borderRadius: btnBorderRadius,
      fontFamily: `${(fontFamily, fontCategory)}`,
      fontWeight: fontWidth,
      textDecoration: textDecoration,
      fontSize: fontSize,
      fontStyle: fontVisualStyle,
      width: buttonAlignment === 'row' && tabWidth / 6.8
    },
    id: `tab-button-${tab.id}`,
    className: `tab-button ${customClass} ${classes}`
  }, tab.title))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: tabWidth + 'px',
      border: `${tabBorder?.width} ${tabBorder?.style} ${tabBorder?.color}`,
      borderRadius: tabBorderRadius + 'px'
    },
    className: `tab-content-frontend ${classes}`
  }, tabs_data?.map(td => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      color: tabsColor?.find(t => t.tabId == td.tabId)?.textColor,
      backgroundColor: tabsColor?.find(t => t.tabId == td.tabId)?.bgColor,
      ...(buttonAlignment === 'row' ? {
        width: '80%'
      } : {
        width: '100%'
      }),
      fontFamily: `${(fontFamily, fontCategory)}`,
      fontWeight: fontWidth,
      textDecoration: textDecoration,
      fontSize: fontSize,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      fontStyle: fontVisualStyle,
      borderRadius: tabBorderRadius + 'px',
      textAlign: tabTextAlignment
    },
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: td.id,
    className: `div-data-${td.tabId} btn-all inactive tab-content`,
    style: {
      paddingTop: tabPadding?.top,
      paddingRight: tabPadding?.right,
      paddingBottom: tabPadding?.bottom,
      paddingLeft: tabPadding?.left
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    style: {
      color: tabsColor?.find(t => t.tabId == td.tabId)?.textColor,
      fontFamily: `${(fontFamily, fontCategory)}`,
      textDecoration: textDecoration,
      letterSpacing: letterSpacing,
      fontStyle: fontVisualStyle
    },
    className: "tab-title",
    value: td.title ? td.title : 'demo title',
    tagName: tabHeadingTagName
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    style: {
      fontSize: fontSize
    },
    value: td.desc ? td.desc : 'demo description',
    tagName: "p"
  }), td?.img && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    style: imageStyles,
    className: "tab-image",
    src: td?.img,
    alt: "tab image"
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Tab({
  data,
  setAttributes,
  tabs_data,
  active_tab,
  attributes,
  mediaFunctions
}) {
  const title = data?.title;
  const desc = data?.desc;
  const url = data?.img;
  const {
    tabHeadingTagName,
    tabsColor,
    fontFamily,
    fontCategory,
    fontVisualStyle,
    fontWidth,
    textDecoration,
    lineHeight,
    fontSize,
    letterSpacing,
    tabWidth,
    buttonAlignment,
    tabPadding
  } = attributes;
  const {
    onSelectImage,
    onSelectURL
  } = mediaFunctions;
  const onChangeTitle = (newTitle, tabId) => {
    if (tabId) {
      const updatedTabs = tabs_data.map(tab => {
        if (tab.tabId === tabId) {
          return {
            ...tab,
            title: newTitle
          };
        }
        return tab;
      });
      setAttributes({
        tabs_data: updatedTabs
      });
    }
  };
  const onChangeDesc = (newDesc, tabId) => {
    if (tabId) {
      const updatedTabs = tabs_data.map(tab => {
        if (tab.tabId === tabId) {
          return {
            ...tab,
            desc: newDesc
          };
        }
        return tab;
      });
      setAttributes({
        tabs_data: updatedTabs
      });
    }
  };
  const imageStyles = {
    width: `${tabWidth - (parseInt(tabPadding?.right) + parseInt(tabPadding?.left))}px`,
    height: '400px'
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      color: tabsColor?.find(t => t?.tabId == active_tab).textColor,
      backgroundColor: tabsColor?.find(t => t?.tabId == active_tab).bgColor,
      fontFamily: `${(fontFamily, fontCategory)}`,
      fontWeight: fontWidth,
      textDecoration: textDecoration,
      fontSize: fontSize,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      fontStyle: fontVisualStyle
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    style: {
      color: tabsColor?.find(t => t.tabId == active_tab)?.textColor,
      fontFamily: `${(fontFamily, fontCategory)}`
    },
    className: "tab-title",
    tagName: tabHeadingTagName,
    value: title ? title : 'Enter a Title',
    onChange: e => {
      onChangeTitle(e, data?.tabId, tabs_data);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    style: {
      fontFamily: `${(fontFamily, fontCategory)}`
    },
    placeholder: "Enter description",
    onChange: e => onChangeDesc(e, data?.tabId, tabs_data),
    value: desc ? desc : 'enter description'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    icon: "admin-users",
    onSelect: url => onSelectImage(url, data.tabId),
    onSelectURL: url => onSelectURL(url, data.tabId),
    accept: "image/*",
    allowedTypes: ['image'],
    disableMediaButtons: url
  }), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    style: imageStyles,
    className: "tab-image",
    src: url,
    alt: "tab image"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ }),

/***/ "./src/modal/style/editor.css":
/*!************************************!*\
  !*** ./src/modal/style/editor.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modal/style/modal.css":
/*!***********************************!*\
  !*** ./src/modal/style/modal.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkdemo_tabs"] = globalThis["webpackChunkdemo_tabs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map