(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[9668],{"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FilePicker/FilePicker.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.file-picker-component{width:100%;height:100%;position:relative;border-radius:4px;background:var(--signature-draw-background);border:1px solid var(--modal-stroke-and-border);padding:8px}.file-picker-component .file-picker-container{position:relative;border:1px dashed var(--modal-stroke-and-border);display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.file-picker-component .file-picker-container.dragging{background:var(--file-picker-drop-background);border:1px dashed var(--file-picker-drop-border)}.file-picker-component .file-picker-container .file-picker-body{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;color:var(--faded-text)}.file-picker-component .file-picker-container .file-picker-body .label-separator{margin:10px}.file-picker-component .file-picker-container .file-picker-body .modal-btn-file{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer}.file-picker-component .file-picker-container .file-picker-body .modal-btn-file:hover{border-color:var(--blue-6);color:var(--blue-6)}.file-picker-component .file-picker-container .file-picker-body .Icon{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:15px}.file-picker-component .file-picker-container .file-picker-body .Icon svg{height:45px}.file-picker-component .file-picker-container .file-picker-body .file-picker-separator{margin:10px}.file-picker-component .file-picker-container .file-picker-error{position:absolute;color:red;bottom:0;right:0;margin:0 5px 5px 0}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/FilePicker/FilePicker.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FilePicker/FilePicker.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/FilePicker/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_FilePicker});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),device=__webpack_require__("./src/helpers/device.js");__webpack_require__("./src/components/FilePicker/FilePicker.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var FilePicker_FilePicker=function(param){var _ref,_param_onChange=param.onChange,onChange=void 0===_param_onChange?function(){}:_param_onChange,_param_onDrop=param.onDrop,onDrop=void 0===_param_onDrop?function(){}:_param_onDrop,_param_shouldShowIcon=param.shouldShowIcon,shouldShowIcon=void 0!==_param_shouldShowIcon&&_param_shouldShowIcon,acceptFormats=param.acceptFormats,_param_allowMultiple=param.allowMultiple,allowMultiple=void 0!==_param_allowMultiple&&_param_allowMultiple,_param_errorMessage=param.errorMessage,errorMessage=void 0===_param_errorMessage?"":_param_errorMessage,t=_sliced_to_array((0,useTranslation.B)(),1)[0],_useState=_sliced_to_array((0,react.useState)(!1),2),isDragging=_useState[0],setIsDragging=_useState[1],fileInputRef=(0,react.useRef)(null),onClick=function(){var _fileInputRef_current;null==fileInputRef||null===(_fileInputRef_current=fileInputRef.current)||void 0===_fileInputRef_current||_fileInputRef_current.click()},handleFileDrop=(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(e){var files;return _ts_generator(this,(function(_state){return e.preventDefault(),setIsDragging(!1),(files=e.dataTransfer.files).length>0&&onDrop(Array.from(files)),[2]}))})),function handleFileDrop(e){return _ref.apply(this,arguments)});return react.createElement("div",{className:"file-picker-component"},react.createElement("div",{className:classnames_default()("file-picker-container",{dragging:isDragging}),onDragEnter:function(e){e.preventDefault(),setIsDragging(!0)},onDragLeave:function(e){e.preventDefault(),e.target.parentNode.contains(e.relatedTarget)||setIsDragging(!1)},onDragOver:function(e){e.preventDefault()},onDrop:handleFileDrop,onDragExit:function(e){e.preventDefault(),setIsDragging(!1)}},react.createElement("div",{className:"file-picker-body"},shouldShowIcon&&react.createElement(Icon.A,{glyph:"icon-open-folder"}),(0,device.Fr)()?react.createElement("div",{className:"file-picker-separator"},t("filePicker.selectFile")):react.createElement(react.Fragment,null,react.createElement("div",null,t("filePicker.dragAndDrop")),react.createElement("div",{className:"file-picker-separator"},t("filePicker.or"))),react.createElement("div",{className:"md-row modal-btn-file",tabIndex:"0",onKeyDown:function(event){"Enter"===event.key&&onClick()},onClick},t("action.browse"),react.createElement("input",{ref:fileInputRef,multiple:allowMultiple,style:{display:"none"},type:"file",accept:acceptFormats,onChange:function(event){var files;(files=event.target.files).length>0&&onChange(Array.from(files)),event.target.value=null}}))),errorMessage&&react.createElement("div",{className:"file-picker-error"},errorMessage)))};const components_FilePicker_FilePicker=FilePicker_FilePicker;FilePicker_FilePicker.__docgenInfo={description:"",methods:[],displayName:"FilePicker",props:{onChange:{defaultValue:{value:"() => { }",computed:!1},required:!1},onDrop:{defaultValue:{value:"() => { }",computed:!1},required:!1},shouldShowIcon:{defaultValue:{value:"false",computed:!1},required:!1},allowMultiple:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:"''",computed:!1},required:!1}}};const components_FilePicker=components_FilePicker_FilePicker;components_FilePicker_FilePicker.__docgenInfo={description:"",methods:[],displayName:"FilePicker",props:{onChange:{defaultValue:{value:"() => { }",computed:!1},required:!1},onDrop:{defaultValue:{value:"() => { }",computed:!1},required:!1},shouldShowIcon:{defaultValue:{value:"false",computed:!1},required:!1},allowMultiple:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:"''",computed:!1},required:!1}}}},"./src/components/PageReplacementModal/FilePickerPanel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>PageReplacementModal_FilePickerPanel});var react=__webpack_require__("./node_modules/react/index.js"),core=__webpack_require__("./src/core/index.js"),FilePicker=__webpack_require__("./src/components/FilePicker/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var FilePickerPanel=function(param){var onFileProcessed=param.onFileProcessed,shouldShowIcon=param.shouldShowIcon,mergeDocuments=function mergeDocuments(sourceArray){return _mergeDocuments.apply(this,arguments)},_useState=_sliced_to_array((0,react.useState)(""),2),errorMessage=_useState[0],setErrorMessage=_useState[1],_useState1=_sliced_to_array((0,react.useState)(""),2),acceptFormats=_useState1[0],setAcceptFormats=_useState1[1];(0,react.useEffect)((function(){setAcceptFormats(core.A.getAllowedFileExtensions())}),[]);var _ref,onDrop=(_ref=_async_to_generator((function(files){var processedFile;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return processedFile=files[0],files.length>1?[4,mergeDocuments(files)]:[3,2];case 1:processedFile=_state.sent(),_state.label=2;case 2:return onFileProcessed(processedFile),[2]}}))})),function onDrop(files){return _ref.apply(this,arguments)});function _mergeDocuments(){return _mergeDocuments=_async_to_generator((function(sourceArray){var nextCount,document,_arguments=arguments;return _ts_generator(this,(function(_state){return nextCount=_arguments.length>1&&void 0!==_arguments[1]?_arguments[1]:1,document=_arguments.length>2&&void 0!==_arguments[2]?_arguments[2]:null,[2,new Promise(function(){var _ref=_async_to_generator((function(resolve){var newDocument,newDocumentPageCount,pages,pageIndexToInsert;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return document?[3,2]:[4,core.A.createDocument(sourceArray[0])];case 1:document=_state.sent(),_state.label=2;case 2:return[4,core.A.createDocument(sourceArray[nextCount])];case 3:return newDocument=_state.sent(),newDocumentPageCount=newDocument.getPageCount(),pages=Array.from({length:newDocumentPageCount},(function(v,k){return k+1})),pageIndexToInsert=document.getPageCount()+1,document.insertPages(newDocument,pages,pageIndexToInsert).then((function(){resolve({next:sourceArray.length-1>nextCount,document})})),[2]}}))}));return function(resolve){return _ref.apply(this,arguments)}}()).then((function(response){return response.next?mergeDocuments(sourceArray,nextCount+1,response.document):response.document})).catch((function(error){setErrorMessage(error)}))]}))})),_mergeDocuments.apply(this,arguments)}return react.createElement(FilePicker.A,{onChange:function(files){onFileProcessed(files[0])},onDrop,shouldShowIcon,acceptFormats,allowMultiple:!1,errorMessage})};const FilePickerPanel_FilePickerPanel=FilePickerPanel;FilePickerPanel.__docgenInfo={description:"",methods:[],displayName:"FilePickerPanel"};const PageReplacementModal_FilePickerPanel=FilePickerPanel_FilePickerPanel;FilePickerPanel_FilePickerPanel.__docgenInfo={description:"",methods:[],displayName:"FilePickerPanel"}}}]);