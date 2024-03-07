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
    name,
    email,
    age,
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
    value: name,
    onChange: newName => {
      setAttributes({
        name: newName
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    placeholder: "Enter text",
    value: age,
    onChange: newAge => {
      setAttributes({
        age: newAge
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    placeholder: "Enter descriptions",
    value: email,
    onChange: newEmail => {
      setAttributes({
        email: newEmail
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['core/image', 'core/gallery', 'core/paragraph', 'core/video'],
    template: [['core/image']]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

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








function Edit({
  attributes,
  setAttributes
}) {
  const {
    tabs,
    active_tab,
    tabs_data
  } = attributes;
  const [activeTd, setActiveTd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)();
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
      url: ''
    };
    setAttributes({
      tabs_data: [...tabs_data, newData]
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setAttributes({
      active_tab: "1"
    });
  }, []);
  const deleteTab = id => {
    const updatedTabs = tabs.filter(tab => tab.id !== id);
    const updatedTabsData = tabs_data.filter(data => data.tabId !== id);
    setAttributes({
      tabs: updatedTabs,
      tabs_data: updatedTabsData
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-list"
  }, tabs?.map((tab, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      onClick: () => tabButtonClicked(tab.id, tabs_data),
      className: "tab-button",
      tagName: "p",
      key: index,
      onChange: e => onChangeTitle(e, tab.id),
      value: tab.title
    });
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-more-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => addNewTab(tabs?.length + 1),
    className: "tab-button"
  }, "+")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
    group: "inline"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    onClick: () => deleteTab(active_tab)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Tab', 'demo-tabs')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tabs?.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: tab.id,
    style: {
      display: tab.id === active_tab ? 'block' : 'none'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: activeTd,
    setAttributes: setAttributes,
    tabs_data: tabs_data,
    active_tab: active_tab
  })))));
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
  icon: 'admin-home',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

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
      }, " ", !isModalOpen ? 'Open Modal' : 'Close Modal');
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modal Settings Options', 'demo-tabs')
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalDivider, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.MenuGroup, {
    label: "Modal Content Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      justifyContent: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: () => setAttributes({
      modalTextAlign: 'left'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
    icon: "align-left"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: () => setAttributes({
      modalTextAlign: 'center'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Dashicon, {
    icon: "align-center"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
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
  icon: 'admin-media',
  keywords: ['demo', 'modal'],
  icon: 'admin-generic',
  attributes: {
    name: {
      type: 'string'
    },
    age: {
      type: 'string'
    },
    email: {
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
      type: 'string',
      default: '17'
    },
    modalWidth: {
      type: 'string',
      default: '600'
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
    name,
    age,
    email,
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
      borderRadius: buttonBorderRadius + 'px'
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
    value: name
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: age
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: email
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
    active_tab
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-list"
  }, tabs?.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab.id,
    "data-info": tab.id,
    className: "tab-button"
  }, tab.title))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab_data"
  }, tabs_data?.map(td => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: td.id,
    className: `div-data-${td.tabId} btn-all inactive`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: td.title,
    tagName: "h4"
  })))));
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
  active_tab
}) {
  const title = data?.title;
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: title ? title : "Enter a Title",
    placeholder: "Enter Name",
    onChange: e => {
      onChangeTitle(e, data.tabId, tabs_data);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    placeholder: "Enter age",
    onChange: e => {
      // setTabValues(e, 'ageChange', data.tabId)
    }
  }));
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