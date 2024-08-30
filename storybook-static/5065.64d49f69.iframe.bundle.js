"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[5065],{"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/FocusTrap/FocusTrap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>FocusTrap});var react=__webpack_require__("./node_modules/react/index.js"),domUtils=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/utils/domUtils.js");function useFocusTrap(locked,options){void 0===locked&&(locked=!1),void 0===options&&(options={});var focusLastOnUnlock=options.focusLastOnUnlock,focusRef=(0,react.useRef)(null),getFocusableElements=(0,react.useCallback)((function(){return focusRef.current.querySelectorAll(domUtils.O1)}),[]),lockFocus=(0,react.useCallback)((function(event){if(locked&&(!event||"Tab"===event.key)&&focusRef.current){var focusableElements=getFocusableElements();if(!focusableElements.length)return null==event?void 0:event.preventDefault();var focusedItemIndex=findFocusableIndex(focusableElements,document.activeElement);if(-1===focusedItemIndex||event)return-1===focusedItemIndex||!(null==event?void 0:event.shiftKey)&&focusedItemIndex===focusableElements.length-1?(focusableElements[0].focus(),null==event?void 0:event.preventDefault()):(null==event?void 0:event.shiftKey)&&0===focusedItemIndex?(focusableElements[focusableElements.length-1].focus(),null==event?void 0:event.preventDefault()):void 0}}),[getFocusableElements,locked]),checkFocus=(0,react.useCallback)((function(event){var _a;if(locked&&focusRef.current){var focusableElements=getFocusableElements();return focusableElements.length?-1===findFocusableIndex(focusableElements,event.target)?focusableElements[0].focus():void 0:null===(_a=event.target)||void 0===_a?void 0:_a.blur()}}),[getFocusableElements,locked]);(0,react.useEffect)((function(){if("undefined"!=typeof window)return document.addEventListener("keydown",lockFocus),document.addEventListener("focusin",checkFocus),function(){document.removeEventListener("keydown",lockFocus),document.removeEventListener("focusin",checkFocus)}}),[checkFocus,lockFocus]);var focusLastOnUnlockRef=function useCurrentRef(toRef){var toRefRef=(0,react.useRef)(toRef);return(0,react.useEffect)((function(){toRefRef.current=toRef})),toRefRef}(focusLastOnUnlock);return(0,react.useEffect)((function(){var _a,lastFocusedElement;if("undefined"!=typeof window&&locked){if(focusLastOnUnlockRef.current&&!(null===(_a=focusRef.current)||void 0===_a?void 0:_a.contains(document.activeElement)))return lastFocusedElement=document.activeElement,lockFocus(),function(){return lastFocusedElement.focus()};lockFocus()}}),[focusLastOnUnlockRef,lockFocus,locked]),focusRef}function findFocusableIndex(elements,toFind){var index=-1;if(!toFind)return index;for(var i=0;i<elements.length;i++)if(elements[i]===toFind){index=i;break}return index}var FocusTrap=function(_a){var locked=_a.locked,focusLastOnUnlock=_a.focusLastOnUnlock,children=_a.children,focusRef=useFocusTrap(locked,{focusLastOnUnlock});return(0,react.cloneElement)(children,{ref:focusRef})}},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Input/Input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/node_modules/tslib/tslib.es6.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useFocus.js"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Icon/Icon.js"),Input=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_a,ref){var _b=_a.message,message=void 0===_b?"default":_b,messageText=_a.messageText,fillWidth=_a.fillWidth,wrapperClassName=_a.wrapperClassName,padMessageText=_a.padMessageText,className=_a.className,onFocus=_a.onFocus,onBlur=_a.onBlur,rightElement=_a.rightElement,leftElement=_a.leftElement,_c=_a.type,type=void 0===_c?"text":_c,props=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Tt)(_a,["message","messageText","fillWidth","wrapperClassName","padMessageText","className","onFocus","onBlur","rightElement","leftElement","type"]),_d=(0,_hooks__WEBPACK_IMPORTED_MODULE_3__.i)(onFocus,onBlur),focused=_d.focused,handleOnFocus=_d.handleOnFocus,handleOnBlur=_d.handleOnBlur,rightIcon=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){if(rightElement)return rightElement;var icon=void 0;switch(message){case"warning":icon="Warning";break;case"error":icon="Error"}return icon?react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{className:"ui__input__icon",icon}):void 0}),[message,rightElement]),wrapperClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ui__base ui__input__wrapper",{"ui__input__wrapper--fill":fillWidth,"ui__input__wrapper--pad":padMessageText&&!messageText},wrapperClassName),mainClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ui__input","ui__input--message-"+message,{"ui__input--focused":focused}),inputClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ui__input__input",{"ui__input__input--disabled":props.disabled},className);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:wrapperClass},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:mainClass},leftElement,react__WEBPACK_IMPORTED_MODULE_1__.createElement("input",(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},props,{type,onFocus:handleOnFocus,onBlur:handleOnBlur,className:inputClass,ref})),rightIcon),messageText?react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"ui__input__messageText"},messageText):void 0)}))},"./src/components/SaveModal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SaveModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SaveModal/SaveModal.js");const __WEBPACK_DEFAULT_EXPORT__=_SaveModal__WEBPACK_IMPORTED_MODULE_0__.A;_SaveModal__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"SaveModal"}}}]);