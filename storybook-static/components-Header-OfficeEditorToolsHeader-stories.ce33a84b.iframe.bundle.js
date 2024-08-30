(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[7615],{"./src/components/Header/OfficeEditorToolsHeader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Overflow:()=>Overflow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/redux/initialState.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),constants_dataElement__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/dataElement.js"),_OfficeEditorToolsHeader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Header/OfficeEditorToolsHeader.js"),core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/core/index.js"),src_constants_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/constants/types.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/OfficeEditorToolsHeader",component:_OfficeEditorToolsHeader__WEBPACK_IMPORTED_MODULE_4__.default};src_redux_initialState__WEBPACK_IMPORTED_MODULE_1__.A.viewer.openElements[constants_dataElement__WEBPACK_IMPORTED_MODULE_3__.A.OFFICE_EDITOR_TOOLS_HEADER]=!0,src_redux_initialState__WEBPACK_IMPORTED_MODULE_1__.A.viewer.openElements.colorPickerOverlay=!1;var store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.U1)({reducer:function(){return src_redux_initialState__WEBPACK_IMPORTED_MODULE_1__.A}}),BasicComponent=function(param){var children=param.children;return core__WEBPACK_IMPORTED_MODULE_5__.A.getOfficeEditor=function(){return{isTextSelected:function(){return!1},isCursorInTable:function(){return!1}}},core__WEBPACK_IMPORTED_MODULE_5__.A.getDocument=function(){return{getType:function(){return src_constants_types__WEBPACK_IMPORTED_MODULE_6__._.OFFICE_EDITOR},addEventListener:function(){},removeEventListener:function(){}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Kq,{store},children)};function Basic(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicComponent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OfficeEditorToolsHeader__WEBPACK_IMPORTED_MODULE_4__.default,null))}function Overflow(){var headerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setTimeout((function(){headerRef.current.querySelector("[data-element=office-editor-more-tools]").click()}),2e3)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicComponent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:headerRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OfficeEditorToolsHeader__WEBPACK_IMPORTED_MODULE_4__.default,null)))}Basic.parameters={chromatic:{viewports:[1400]}},Overflow.parameters={chromatic:{viewports:[850],delay:3e3}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  return <BasicComponent>\n      <OfficeEditorToolsHeader />\n    </BasicComponent>;\n}",...Basic.parameters?.docs?.source}}},Overflow.parameters={...Overflow.parameters,docs:{...Overflow.parameters?.docs,source:{originalSource:"function Overflow() {\n  const headerRef = useRef(null);\n  useEffect(() => {\n    setTimeout(() => {\n      headerRef.current.querySelector('[data-element=office-editor-more-tools]').click();\n    }, 2000);\n  }, []);\n  return <BasicComponent>\n      <div ref={headerRef}>\n        <OfficeEditorToolsHeader />\n      </div>\n    </BasicComponent>;\n}",...Overflow.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Overflow"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FilePickerHandler/FilePickerHandler.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".FilePickerHandler{display:none}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/Header.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.view-header-border{width:100%;height:1px;background:var(--border)}.HeaderToolsContainer{display:flex;align-items:flex-end;width:100%;z-index:71;height:40px;touch-action:none}@media(max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderToolsContainer{height:52px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderToolsContainer.closed{height:0}}@container (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderToolsContainer{height:52px}.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderToolsContainer.closed{height:0}}.HeaderToolsContainer.closed{height:0}.MainHeader{box-sizing:content-box!important;display:flex;flex-direction:column;align-items:center;width:100%;height:36px;background:var(--view-header-background);z-index:72;touch-action:none}.MainHeader:not(.Tools) .Button:hover:enabled{background:var(--view-header-button-hover)}.MainHeader:not(.Tools) .Button.active{background:var(--view-header-button-active)}.MainHeader:not(.Tools) .Button.active .Icon{color:var(--view-header-icon-active-fill)}.MainHeader.Tools{background:var(--tools-header-background);height:40px}@media(max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .MainHeader.Tools{height:52px}}@container (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .MainHeader.Tools{height:52px}}.MainHeader.OfficeTools .picked-option{text-align:left}@media(max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .MainHeader{height:52px}}@container (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .MainHeader{height:52px}}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/HeaderItems/HeaderItems.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.HeaderItems{display:flex;align-items:center;width:100%;height:100%;position:relative;padding:0 4px}.HeaderItems .divider:first-of-type+.divider{display:none}.HeaderItems>.Button,.HeaderItems>.toggle-element-button{margin:0 6px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.Button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.toggle-element-button{margin:0 5px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.Button,.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.toggle-element-button{margin:0 5px}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.Button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.toggle-element-button{margin:0 10px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.Button,.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.toggle-element-button{margin:0 10px}}.HeaderItems .tool-group-button{margin:0 6px}@media(max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems .tool-group-button{margin:0 11px}}@container (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems .tool-group-button{margin:0 11px}}.HeaderItems .spacer{flex:1;height:100%}.HeaderItems>.divider{width:1px;height:20px;margin:0 6px;background:var(--divider);flex-shrink:0}@media(max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.divider{margin:0 4px}}@container (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.divider{margin:0 4px}}.tool-group-buttons-container{overflow:hidden;position:relative;height:100%;display:flex;align-items:center}.tool-group-buttons-container .chevron-scroll{display:flex;align-items:center;position:absolute;z-index:1;height:100%;pointer-events:none;width:64px;background:var(--tools-header-background);top:0;bottom:0;margin:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tool-group-buttons-container .chevron-scroll{background:none}}.tool-group-buttons-container .chevron-scroll .Icon{color:var(--scroll-chevron-color)}.tool-group-buttons-container .chevron-scroll.left{left:0;-webkit-mask-image:-webkit-gradient(linear,right top,left top,from(transparent),to(#000),color-stop(.6,#000));mask-image:-webkit-gradient(linear,right top,left top,from(transparent),to(#000),color-stop(.6,#000));justify-content:flex-start}.tool-group-buttons-container .chevron-scroll.right{right:0;-webkit-mask-image:-webkit-gradient(linear,left top,right top,from(transparent),to(#000),color-stop(.6,#000));mask-image:-webkit-gradient(linear,left top,right top,from(transparent),to(#000),color-stop(.6,#000));justify-content:flex-end}.tool-group-buttons-container .chevron-scroll .scroll-edge{background:var(--tools-header-background);height:100%}.tool-group-buttons-container .chevron-scroll .scroll-edge.left{width:8px}.tool-group-buttons-container .chevron-scroll .scroll-edge.right{right:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .tool-group-buttons-container .chevron-scroll .scroll-edge.right{width:8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .tool-group-buttons-container .chevron-scroll .scroll-edge.right{width:8px}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .tool-group-buttons-container .chevron-scroll .scroll-edge.right{width:16px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .tool-group-buttons-container .chevron-scroll .scroll-edge.right{width:16px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .tool-group-buttons-container .chevron-scroll .scroll-edge.right{width:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .tool-group-buttons-container .chevron-scroll .scroll-edge.right{width:12px}}.tool-group-buttons-container .chevron-scroll .tool-group-button{padding:0;border:none;background-color:transparent;margin:0;pointer-events:all}:host(:not([data-tabbing=true])) .tool-group-buttons-container .chevron-scroll .tool-group-button,html:not([data-tabbing=true]) .tool-group-buttons-container .chevron-scroll .tool-group-button{outline:none}.tool-group-buttons-scroll{display:flex;overflow:auto;scroll-behavior:smooth;height:100%;align-items:center;-ms-overflow-style:none;scrollbar-width:none}.tool-group-buttons-scroll::-webkit-scrollbar{display:none}.tool-group-buttons-scroll :last-child{margin-right:0}.HeaderItems>.divider{margin-left:0}@media(min-width:901px){.App:not(.is-web-component) .HeaderItems>.divider{margin-left:16px;margin-right:16px}}@container (min-width: 901px){.HeaderItems>.divider{margin-left:16px;margin-right:16px}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.divider{margin-left:16px;margin-right:16px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.divider{margin-left:16px;margin-right:16px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderItems>.divider{margin-left:16px;margin-right:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderItems>.divider{margin-left:16px;margin-right:16px}}.HeaderItems .tool-group-button{scroll-snap-align:start}.HeaderItems .tool-group-button,.HeaderItems>.Button{width:32px;height:32px}.HeaderItems .Button:not(.disabled):hover{border-radius:4px;background:var(--tools-button-hover)}.HeaderItems .Button:not(.disabled).active{border-radius:4px;background:var(--tools-button-active)}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/FilePickerHandler/FilePickerHandler.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FilePickerHandler/FilePickerHandler.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Header/Header.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/Header.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/HeaderItems/HeaderItems.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/HeaderItems/HeaderItems.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}}}]);