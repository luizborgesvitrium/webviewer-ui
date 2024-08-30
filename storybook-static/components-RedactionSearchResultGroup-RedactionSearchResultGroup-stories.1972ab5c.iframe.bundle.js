"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[1279],{"./src/components/RedactionSearchResultGroup/RedactionSearchResultGroup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,mockSearchResults:()=>mockSearchResults});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_RedactionSearchResultGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RedactionSearchResultGroup/RedactionSearchResultGroup.js"),redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/redux/es/redux.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),constants_redactionTypes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/redactionTypes.js"),_RedactionPanel_RedactionPanel_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/RedactionPanel/RedactionPanel.stories.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var initialState={viewer:{disabledElements:{},customElementOverrides:{}}};var store=(0,redux__WEBPACK_IMPORTED_MODULE_5__.y$)((function rootReducer(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState})),RedactionSearchResultGroupWithRedux=function(props){var mockContext=_object_spread({},props.mockContext);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RedactionPanel_RedactionPanel_stories__WEBPACK_IMPORTED_MODULE_4__.RedactionContextMock,{mockContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RedactionSearchResultGroup__WEBPACK_IMPORTED_MODULE_1__.A,props)))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/RedactionSearchPanel/RedactionSearchResultGroup",component:_RedactionSearchResultGroup__WEBPACK_IMPORTED_MODULE_1__.A,includeStories:["Basic"]};var mockSearchResults=[{type:constants_redactionTypes__WEBPACK_IMPORTED_MODULE_3__._E.TEXT,resultStr:"spice",ambientStr:"The spice must flow.",resultStrStart:4,resultStrEnd:9,index:0,icon:"icon-form-field-text"},{type:constants_redactionTypes__WEBPACK_IMPORTED_MODULE_3__._E.CREDIT_CARD,resultStr:"4242 4242 4242 4242",index:1,icon:"redact-icons-credit-card"},{type:constants_redactionTypes__WEBPACK_IMPORTED_MODULE_3__._E.IMAGE,resultStr:"Image",index:2,icon:"redact-icons-image"},{type:constants_redactionTypes__WEBPACK_IMPORTED_MODULE_3__._E.PHONE,resultStr:"867-5309",index:3,icon:"redact-icons-phone-number"},{type:constants_redactionTypes__WEBPACK_IMPORTED_MODULE_3__._E.EMAIL,resultStr:"paul.atreides@dune.com",index:4,icon:"redact-icons-email"}],basicProps={pageNumber:1,searchResults:mockSearchResults};function Basic(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({0:!1,1:!1,2:!1,3:!1,4:!1}),2),selectedSearchResultIndexes=_useState[0],setSelectedSearchResultIndexes=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"330px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(RedactionSearchResultGroupWithRedux,_object_spread({selectedSearchResultIndexes,setSelectedSearchResultIndexes},basicProps)))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  const [selectedSearchResultIndexes, setSelectedSearchResultIndexes] = useState({\n    0: false,\n    1: false,\n    2: false,\n    3: false,\n    4: false\n  });\n  return <div style={{\n    width: '330px'\n  }}>\n      <RedactionSearchResultGroupWithRedux selectedSearchResultIndexes={selectedSearchResultIndexes} setSelectedSearchResultIndexes={setSelectedSearchResultIndexes} {...basicProps} />\n    </div>;\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["mockSearchResults","Basic"]}}]);