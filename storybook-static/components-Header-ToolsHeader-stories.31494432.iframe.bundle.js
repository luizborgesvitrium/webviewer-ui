(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4346],{"./src/components/Header/ToolsHeader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToolsHeaderNoPreset:()=>ToolsHeaderNoPreset,ToolsHeaderToolActive:()=>ToolsHeaderToolActive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ToolsHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Header/ToolsHeader.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/initialState.js"),redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/redux/es/redux.js"),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js"),src_redux_reducers_viewerReducer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/redux/reducers/viewerReducer.js"),src_redux_reducers_featureFlagsReducer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/redux/reducers/featureFlagsReducer.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Header/ToolsHeader",component:_ToolsHeader__WEBPACK_IMPORTED_MODULE_1__.A};var store=(0,redux__WEBPACK_IMPORTED_MODULE_5__.y$)((0,redux__WEBPACK_IMPORTED_MODULE_5__.HY)({viewer:(0,src_redux_reducers_viewerReducer__WEBPACK_IMPORTED_MODULE_4__.A)(src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A.viewer),featureFlags:(0,src_redux_reducers_featureFlagsReducer__WEBPACK_IMPORTED_MODULE_6__.A)(src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A.featureFlags)})),BasicComponent=function(param){var props=param.props,store=param.store;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolsHeader__WEBPACK_IMPORTED_MODULE_1__.A,props))},ToolsHeaderNoPreset=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicComponent,{store})},mockInitialViewerState=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A.viewer),{activeToolGroup:"freeHandTools",activeToolName:"AnnotationCreateFreeHand"}),reducer=(0,redux__WEBPACK_IMPORTED_MODULE_5__.HY)({viewer:(0,src_redux_reducers_viewerReducer__WEBPACK_IMPORTED_MODULE_4__.A)(mockInitialViewerState),featureFlags:(0,src_redux_reducers_featureFlagsReducer__WEBPACK_IMPORTED_MODULE_6__.A)(src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A.featureFlags)}),storeWithToolSelected=(0,redux__WEBPACK_IMPORTED_MODULE_5__.y$)(reducer),ToolsHeaderToolActive=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicComponent,{store:storeWithToolSelected})};ToolsHeaderNoPreset.parameters={...ToolsHeaderNoPreset.parameters,docs:{...ToolsHeaderNoPreset.parameters?.docs,source:{originalSource:"() => {\n  return <BasicComponent store={store} />;\n}",...ToolsHeaderNoPreset.parameters?.docs?.source}}},ToolsHeaderToolActive.parameters={...ToolsHeaderToolActive.parameters,docs:{...ToolsHeaderToolActive.parameters?.docs,source:{originalSource:"() => {\n  return <BasicComponent store={storeWithToolSelected} />;\n}",...ToolsHeaderToolActive.parameters?.docs?.source}}};const __namedExportsOrder=["ToolsHeaderNoPreset","ToolsHeaderToolActive"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ModularComponents/StatefulButton/StatefulButton.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.StatefulButton{padding:5px;width:-moz-fit-content;width:fit-content;background-color:var(--gray-4)}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/ModularComponents/StatefulButton/StatefulButton.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ModularComponents/StatefulButton/StatefulButton.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Header/ToolsHeader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/actions/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),components_HeaderItems__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/HeaderItems/index.js"),helpers_getDeviceSize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/helpers/getDeviceSize.js"),selectors__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/redux/selectors/index.js");__webpack_require__("./src/components/Header/Header.scss");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return _get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_get_prototype_of(o)}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _possible_constructor_return(self,call){return!call||"object"!==function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}(call)&&"function"!=typeof call?function _assert_this_initialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _set_prototype_of(o,p){return _set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o},_set_prototype_of(o,p)}function _create_super(Derived){var hasNativeReflectConstruct=function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var ToolsHeader=function(_superClass){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}(ToolsHeader,_superClass);var _super=_create_super(ToolsHeader);function ToolsHeader(){return function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToolsHeader),_super.apply(this,arguments)}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ToolsHeader,[{key:"render",value:function render(){var _this_props=this.props,isDisabled=_this_props.isDisabled,isHeaderDisabled=_this_props.isHeaderDisabled,activeHeaderItems=_this_props.activeHeaderItems,isOpen=_this_props.isOpen,currentToolbarGroup=_this_props.currentToolbarGroup,isToolGroupReorderingEnabled=_this_props.isToolGroupReorderingEnabled,isInDesktopOnlyMode=_this_props.isInDesktopOnlyMode,isVisible=!(isDisabled||isHeaderDisabled)&&isOpen&&"toolbarGroup-View"!==currentToolbarGroup;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()({HeaderToolsContainer:!0,closed:!isVisible}),"data-element":"toolsHeader"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MainHeader Tools"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_HeaderItems__WEBPACK_IMPORTED_MODULE_4__.A,{items:activeHeaderItems,isToolGroupReorderingEnabled,isInDesktopOnlyMode})))}}]),ToolsHeader}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(ToolsHeader,"propTypes",{isDisabled:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,isHeaderDisabled:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,activeHeaderItems:prop_types__WEBPACK_IMPORTED_MODULE_8___default().array.isRequired,isToolGroupReorderingEnabled:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,isInDesktopOnlyMode:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool});var mapDispatchToProps={setActiveToolGroup:actions__WEBPACK_IMPORTED_MODULE_2__.A.setActiveToolGroup},ConnectedToolsHeader=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.Ng)((function(state){return{currentToolbarGroup:selectors__WEBPACK_IMPORTED_MODULE_6__.A.getCurrentToolbarGroup(state),isDisabled:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementDisabled(state,"toolsHeader"),isHeaderDisabled:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementDisabled(state,"header"),isOpen:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementOpen(state,"toolsHeader"),activeHeaderItems:selectors__WEBPACK_IMPORTED_MODULE_6__.A.getToolsHeaderItems(state),isToolsOverlayOpen:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementOpen(state,"toolsOverlay"),isToolsOverlayDisabled:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementDisabled(state,"toolsOverlay"),isSignatureOverlayOpen:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementOpen(state,"signatureOverlay"),isSignatureOverlayDisabled:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isElementDisabled(state,"signatureOverlay"),isToolGroupReorderingEnabled:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isToolGroupReorderingEnabled(state),isInDesktopOnlyMode:selectors__WEBPACK_IMPORTED_MODULE_6__.A.isInDesktopOnlyMode(state)}}),mapDispatchToProps)(ToolsHeader),connectedComponent=function(props){var isMobile=(0,helpers_getDeviceSize__WEBPACK_IMPORTED_MODULE_5__.IS)(),isTabletAndMobile=(0,helpers_getDeviceSize__WEBPACK_IMPORTED_MODULE_5__.$p)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectedToolsHeader,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},props),{isMobile,isTabletAndMobile}))};const __WEBPACK_DEFAULT_EXPORT__=connectedComponent;connectedComponent.__docgenInfo={description:"",methods:[],displayName:"connectedComponent"}},"./src/redux/reducers/featureFlagsReducer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function __WEBPACK_DEFAULT_EXPORT__(initialState){return function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0,type=action.type,payload=action.payload;switch(type){case"ENABLE_FEATURE_FLAG":return _object_spread_props(_object_spread({},state),_define_property({},payload.featureFlag,!0));case"DISABLE_FEATURE_FLAG":return _object_spread_props(_object_spread({},state),_define_property({},payload.featureFlag,!1));default:return state}}}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__})}}]);