/*! For license information please see components-Icon-Icon-stories.ef13ea97.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[8311],{"./src/components/Icon/Icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Colorized:()=>Colorized,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/Icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",component:_Icon__WEBPACK_IMPORTED_MODULE_1__.A};function Basic(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{glyph:"icon-menu-checkmark"}))}function Colorized(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{glyph:"icon-menu-checkmark",color:"red"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{glyph:"icon-menu-checkmark",color:"#0000FF"}))}function Disabled(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{glyph:"icon-menu-checkmark",color:"red"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{glyph:"icon-menu-checkmark",disabled:!0,color:"red"}))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  return <div>\n      <Icon glyph={'icon-menu-checkmark'} />\n    </div>;\n}",...Basic.parameters?.docs?.source}}},Colorized.parameters={...Colorized.parameters,docs:{...Colorized.parameters?.docs,source:{originalSource:"function Colorized() {\n  return /* eslint-disable custom/no-hex-colors */(\n    <div>\n      <Icon glyph={'icon-menu-checkmark'} color={'red'} />\n      <Icon glyph={'icon-menu-checkmark'} color={'#0000FF'} />\n    </div>\n    /* eslint-enable custom/no-hex-colors */\n  );\n}",...Colorized.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"function Disabled() {\n  return <div>\n      <Icon glyph={'icon-menu-checkmark'} color={'red'} />\n      <Icon glyph={'icon-menu-checkmark'} disabled color={'red'} />\n    </div>;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Colorized","Disabled"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);