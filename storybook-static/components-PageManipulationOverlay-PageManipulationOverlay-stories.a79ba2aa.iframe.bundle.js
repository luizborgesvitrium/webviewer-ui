(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[3039],{"./src/components/PageManipulationOverlay/PageManipulationOverlay.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PageManipulationOverlay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PageManipulationOverlay/PageManipulationOverlay.js"),redux__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/FlyoutMenu/FlyoutMenu.scss"),__webpack_require__("./node_modules/redux/es/redux.js")),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/PageManipulationOverlay",component:_PageManipulationOverlay__WEBPACK_IMPORTED_MODULE_1__.A};var initialState={viewer:{disabledElements:{},customElementOverrides:{}}};var testProps={pageNumbers:[],pageManipulationOverlayItems:[{dataElement:"pageAdditionalControls"},{type:"divider"},{dataElement:"pageRotationControls"},{type:"divider"},{dataElement:"pageManipulationControls"}]},store=(0,redux__WEBPACK_IMPORTED_MODULE_4__.y$)((function rootReducer(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState}));function Basic(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"app"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Overlay FlyoutMenu"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageManipulationOverlay__WEBPACK_IMPORTED_MODULE_1__.A,testProps))))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'function Basic() {\n  return <Provider store={store}>\n      <div id="app">\n        <div className="Overlay FlyoutMenu">\n          <PageManipulationOverlay {...testProps} />\n        </div>\n      </div>\n    </Provider>;\n}',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FlyoutMenu/FlyoutMenu.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".open.FlyoutMenu{visibility:visible}.closed.FlyoutMenu{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FlyoutMenu{position:absolute;z-index:95;overflow:auto;display:flex;flex-direction:column;align-items:flex-start;border-radius:4px;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);padding:6px 0}@media(max-height:500px){.App:not(.is-web-component) .FlyoutMenu{max-height:100%;display:block}}@container (max-height: 500px){.App.is-web-component .FlyoutMenu{max-height:100%;display:block}}.FlyoutMenu .row{width:100%;margin:2px 0;height:32px;display:flex;align-items:center;padding-left:12px;padding-right:18px;cursor:pointer}.FlyoutMenu .row:hover{background:var(--popup-button-hover)}.FlyoutMenu .row.active{background:var(--popup-button-active)}.FlyoutMenu .row .title{margin-left:4px}.FlyoutMenu .type{margin-top:2px;margin-bottom:8px;padding-left:12px;padding-right:18px;font-weight:700}.FlyoutMenu .divider{margin:8px}.FlyoutMenu .divider,.FlyoutMenu .dividerSmall{height:1px;background:var(--divider);width:calc(100% - 16px)}.FlyoutMenu .dividerSmall{margin:2px 8px}.FlyoutMenu.mobile{position:fixed;width:100%;left:0;bottom:0;border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px;border:0;box-shadow:0 0 3px 0 var(--document-box-shadow);padding-top:30px;padding-bottom:30px}.FlyoutMenu.mobile .swipe-indicator{background:var(--gray-6);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}.FlyoutMenu.mobile .row,.FlyoutMenu.mobile .type{padding:0 24px}.FlyoutMenu[data-element=pageManipulationOverlay] .Button .Icon path,.FlyoutMenu[data-element=pageManipulationOverlay] .Button .Icon rect{fill:var(--icon-color)}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/FlyoutMenu/FlyoutMenu.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FlyoutMenu/FlyoutMenu.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/DataElementWrapper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_DataElementWrapper});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors=__webpack_require__("./src/redux/selectors/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={id:prop_types_default().string,children:prop_types_default().node,dataElement:prop_types_default().string,type:prop_types_default().string};var DataElementWrapper=react.forwardRef((function(_param,ref){var _param_type=_param.type,type=void 0===_param_type?"div":_param_type,children=_param.children,dataElement=_param.dataElement,props=_object_without_properties(_param,["type","children","dataElement"]),isDisabled=function useIsDisabledWithDefaultValue(selector){var defaultValue=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{return(0,es.d4)(selector)}catch(e){e.message}return defaultValue}((function(state){return selectors.A.isElementDisabled(state,dataElement)}));return isDisabled?null:"button"===type?react.createElement("button",_object_spread({ref,"data-element":dataElement},props),children):react.createElement("div",_object_spread({ref,"data-element":dataElement},props),children)}));DataElementWrapper.displayName="DataElementWrapper",DataElementWrapper.propTypes=propTypes;const DataElementWrapper_DataElementWrapper=DataElementWrapper;DataElementWrapper.__docgenInfo={description:"",methods:[],displayName:"DataElementWrapper",props:{type:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},dataElement:{description:"",type:{name:"string"},required:!1}}};const components_DataElementWrapper=DataElementWrapper_DataElementWrapper;DataElementWrapper_DataElementWrapper.__docgenInfo={description:"",methods:[],displayName:"DataElementWrapper",props:{type:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},dataElement:{description:"",type:{name:"string"},required:!1}}}},"./src/constants/redactionTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{_E:()=>redactionTypeMap,mC:()=>defaultRedactionTypes,s8:()=>mapAnnotationToRedactionType});var _obj,redactionTypeMap={REGION:"region",TEXT:"text",FULL_PAGE:"fullPage",FULL_VIDEO_FRAME:"fullVideoFrame",AUDIO_REDACTION:"audioRedaction",FULL_VIDEO_FRAME_AND_AUDIO:"fullVideoFrameAndAudio",CREDIT_CARD:"creditCard",PHONE:"phone",IMAGE:"image",EMAIL:"email"},defaultRedactionTypes=(_define_property(_obj={},redactionTypeMap.REGION,{icon:"icon-tool-redaction-area",label:"redactionPanel.redactionItem.regionRedaction"}),_define_property(_obj,redactionTypeMap.FULL_PAGE,{icon:"icon-header-page-manipulation-page-transition-page-by-page-line",label:"redactionPanel.redactionItem.fullPageRedaction"}),_define_property(_obj,redactionTypeMap.FULL_VIDEO_FRAME,{icon:"ic-full-frame-video-redact",label:"redactionPanel.redactionItem.fullVideoFrameRedaction"}),_define_property(_obj,redactionTypeMap.AUDIO_REDACTION,{icon:"ic-audio-redact",label:"redactionPanel.redactionItem.audioRedaction"}),_define_property(_obj,redactionTypeMap.FULL_VIDEO_FRAME_AND_AUDIO,{icon:"ic-full-frame-video-and-audio-redact",label:"redactionPanel.redactionItem.fullVideoFrameAndAudioRedaction"}),_define_property(_obj,redactionTypeMap.TEXT,{icon:"icon-form-field-text"}),_define_property(_obj,redactionTypeMap.IMAGE,{icon:"redact-icons-image",label:"redactionPanel.redactionItem.image"}),_obj),mapAnnotationToRedactionType=function(annotation){if(annotation.IsText)return redactionTypeMap.TEXT;var _annotation_type=annotation.type;return void 0===_annotation_type?"region":_annotation_type}}}]);