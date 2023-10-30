"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[5555],{"./node_modules/@mui/material/Slide/Slide.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),_utils_debounce__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/utils/debounce.js"),_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_transitions_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/transitions/utils.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function setTranslateValue(direction,node,containerProp){const transform=function getTranslateValue(direction,node,resolvedContainer){const rect=node.getBoundingClientRect(),containerRect=resolvedContainer&&resolvedContainer.getBoundingClientRect(),containerWindow=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(node);let transform;if(node.fakeTransform)transform=node.fakeTransform;else{const computedStyle=containerWindow.getComputedStyle(node);transform=computedStyle.getPropertyValue("-webkit-transform")||computedStyle.getPropertyValue("transform")}let offsetX=0,offsetY=0;if(transform&&"none"!==transform&&"string"==typeof transform){const transformValues=transform.split("(")[1].split(")")[0].split(",");offsetX=parseInt(transformValues[4],10),offsetY=parseInt(transformValues[5],10)}return"left"===direction?containerRect?`translateX(${containerRect.right+offsetX-rect.left}px)`:`translateX(${containerWindow.innerWidth+offsetX-rect.left}px)`:"right"===direction?containerRect?`translateX(-${rect.right-containerRect.left-offsetX}px)`:`translateX(-${rect.left+rect.width-offsetX}px)`:"up"===direction?containerRect?`translateY(${containerRect.bottom+offsetY-rect.top}px)`:`translateY(${containerWindow.innerHeight+offsetY-rect.top}px)`:containerRect?`translateY(-${rect.top-containerRect.top+rect.height-offsetY}px)`:`translateY(-${rect.top+rect.height-offsetY}px)`}(direction,node,function resolveContainer(containerPropProp){return"function"==typeof containerPropProp?containerPropProp():containerPropProp}(containerProp));transform&&(node.style.webkitTransform=transform,node.style.transform=transform)}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Slide(props,ref){const theme=(0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__.Z)(),defaultEasing={enter:theme.transitions.easing.easeOut,exit:theme.transitions.easing.sharp},defaultTimeout={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{addEndListener,appear=!0,children,container:containerProp,direction="down",easing:easingProp=defaultEasing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout=defaultTimeout,TransitionComponent=react_transition_group__WEBPACK_IMPORTED_MODULE_4__.ZP}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__.Z)(props,_excluded),childrenRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__.Z)(children.ref,childrenRef,ref),normalizedTransitionCallback=callback=>isAppearing=>{callback&&(void 0===isAppearing?callback(childrenRef.current):callback(childrenRef.current,isAppearing))},handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{setTranslateValue(direction,node,containerProp),(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.n)(node),onEnter&&onEnter(node,isAppearing)})),handleEntering=normalizedTransitionCallback(((node,isAppearing)=>{const transitionProps=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.C)({timeout,style,easing:easingProp},{mode:"enter"});node.style.webkitTransition=theme.transitions.create("-webkit-transform",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},transitionProps)),node.style.transition=theme.transitions.create("transform",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({},transitionProps)),node.style.webkitTransform="none",node.style.transform="none",onEntering&&onEntering(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const transitionProps=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.C)({timeout,style,easing:easingProp},{mode:"exit"});node.style.webkitTransition=theme.transitions.create("-webkit-transform",transitionProps),node.style.transition=theme.transitions.create("transform",transitionProps),setTranslateValue(direction,node,containerProp),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback((node=>{node.style.webkitTransition="",node.style.transition="",onExited&&onExited(node)})),updatePosition=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)}),[direction,containerProp]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(inProp||"down"===direction||"right"===direction)return;const handleResize=(0,_utils_debounce__WEBPACK_IMPORTED_MODULE_9__.Z)((()=>{childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)})),containerWindow=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(childrenRef.current);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[direction,inProp,containerProp]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{inProp||updatePosition()}),[inProp,updatePosition]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({nodeRef:childrenRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{addEndListener&&addEndListener(childrenRef.current,next)},appear,in:inProp,timeout},other,{children:(state,childProps)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({ref:handleRef,style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.Z)({visibility:"exited"!==state||inProp?void 0:"hidden"},style,children.props.style)},childProps))}))}))},"./node_modules/@mui/material/Snackbar/Snackbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Snackbar_Snackbar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("./node_modules/@mui/base/utils/useSlotProps.js"),ClickAwayListener=__webpack_require__("./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js"),useEventCallback=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"),extractEventHandlers=__webpack_require__("./node_modules/@mui/base/utils/extractEventHandlers.js");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSnackbarContentUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSnackbarContent",slot)}(0,generateUtilityClasses.Z)("MuiSnackbarContent",["root","message","action"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["action","className","message","role"],SnackbarContentRoot=(0,styled.ZP)(Paper.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>{const emphasis="light"===theme.palette.mode?.8:.98,backgroundColor=(0,colorManipulator._4)(theme.palette.background.default,emphasis);return(0,esm_extends.Z)({},theme.typography.body2,{color:theme.vars?theme.vars.palette.SnackbarContent.color:theme.palette.getContrastText(backgroundColor),backgroundColor:theme.vars?theme.vars.palette.SnackbarContent.bg:backgroundColor,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(theme.vars||theme).shape.borderRadius,flexGrow:1,[theme.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})})),SnackbarContentMessage=(0,styled.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(props,styles)=>styles.message})({padding:"8px 0"}),SnackbarContentAction=(0,styled.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(props,styles)=>styles.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),SnackbarContent_SnackbarContent=react.forwardRef((function SnackbarContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSnackbarContent"}),{action,className,message,role="alert"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],action:["action"],message:["message"]},getSnackbarContentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SnackbarContentRoot,(0,esm_extends.Z)({role,square:!0,elevation:6,className:(0,clsx.Z)(classes.root,className),ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SnackbarContentMessage,{className:classes.message,ownerState,children:message}),action?(0,jsx_runtime.jsx)(SnackbarContentAction,{className:classes.action,ownerState,children:action}):null]}))}));function getSnackbarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSnackbar",slot)}(0,generateUtilityClasses.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Snackbar_excluded=["onEnter","onExited"],_excluded2=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],SnackbarRoot=(0,styled.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`anchorOrigin${(0,capitalize.Z)(ownerState.anchorOrigin.vertical)}${(0,capitalize.Z)(ownerState.anchorOrigin.horizontal)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({zIndex:(theme.vars||theme).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===ownerState.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===ownerState.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===ownerState.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[theme.breakpoints.up("sm")]:(0,esm_extends.Z)({},"top"===ownerState.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===ownerState.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===ownerState.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===ownerState.anchorOrigin.horizontal&&{right:24,left:"auto"})}))),Snackbar_Snackbar=react.forwardRef((function Snackbar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSnackbar"}),theme=(0,useTheme.Z)(),defaultTransitionDuration={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{action,anchorOrigin:{vertical,horizontal}={vertical:"bottom",horizontal:"left"},autoHideDuration=null,children,className,ClickAwayListenerProps,ContentProps,disableWindowBlurListener=!1,message,open,TransitionComponent=Grow.Z,transitionDuration=defaultTransitionDuration,TransitionProps:{onEnter,onExited}={}}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,Snackbar_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),ownerState=(0,esm_extends.Z)({},props,{anchorOrigin:{vertical,horizontal},autoHideDuration,disableWindowBlurListener,TransitionComponent,transitionDuration}),classes=(ownerState=>{const{classes,anchorOrigin}=ownerState,slots={root:["root",`anchorOrigin${(0,capitalize.Z)(anchorOrigin.vertical)}${(0,capitalize.Z)(anchorOrigin.horizontal)}`]};return(0,composeClasses.Z)(slots,getSnackbarUtilityClass,classes)})(ownerState),{getRootProps,onClickAway}=function useSnackbar(parameters={}){const{autoHideDuration=null,disableWindowBlurListener=!1,onClose,open,resumeHideDuration}=parameters,timerAutoHide=react.useRef();react.useEffect((()=>{if(open)return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)};function handleKeyDown(nativeEvent){nativeEvent.defaultPrevented||"Escape"!==nativeEvent.key&&"Esc"!==nativeEvent.key||null==onClose||onClose(nativeEvent,"escapeKeyDown")}}),[open,onClose]);const handleClose=(0,useEventCallback.Z)(((event,reason)=>{null==onClose||onClose(event,reason)})),setAutoHideTimer=(0,useEventCallback.Z)((autoHideDurationParam=>{onClose&&null!=autoHideDurationParam&&(clearTimeout(timerAutoHide.current),timerAutoHide.current=setTimeout((()=>{handleClose(null,"timeout")}),autoHideDurationParam))}));react.useEffect((()=>(open&&setAutoHideTimer(autoHideDuration),()=>{clearTimeout(timerAutoHide.current)})),[open,autoHideDuration,setAutoHideTimer]);const handlePause=()=>{clearTimeout(timerAutoHide.current)},handleResume=react.useCallback((()=>{null!=autoHideDuration&&setAutoHideTimer(null!=resumeHideDuration?resumeHideDuration:.5*autoHideDuration)}),[autoHideDuration,resumeHideDuration,setAutoHideTimer]),createHandleFocus=otherHandlers=>event=>{const onFocusCallback=otherHandlers.onFocus;null==onFocusCallback||onFocusCallback(event),handlePause()},createMouseEnter=otherHandlers=>event=>{const onMouseEnterCallback=otherHandlers.onMouseEnter;null==onMouseEnterCallback||onMouseEnterCallback(event),handlePause()},createMouseLeave=otherHandlers=>event=>{const onMouseLeaveCallback=otherHandlers.onMouseLeave;null==onMouseLeaveCallback||onMouseLeaveCallback(event),handleResume()};return react.useEffect((()=>{if(!disableWindowBlurListener&&open)return window.addEventListener("focus",handleResume),window.addEventListener("blur",handlePause),()=>{window.removeEventListener("focus",handleResume),window.removeEventListener("blur",handlePause)}}),[disableWindowBlurListener,handleResume,open]),{getRootProps:(externalProps={})=>{const externalEventHandlers=(0,esm_extends.Z)({},(0,extractEventHandlers._)(parameters),(0,extractEventHandlers._)(externalProps));return(0,esm_extends.Z)({role:"presentation"},externalProps,externalEventHandlers,{onBlur:(otherHandlers=externalEventHandlers,event=>{const onBlurCallback=otherHandlers.onBlur;null==onBlurCallback||onBlurCallback(event),handleResume()}),onFocus:createHandleFocus(externalEventHandlers),onMouseEnter:createMouseEnter(externalEventHandlers),onMouseLeave:createMouseLeave(externalEventHandlers)});var otherHandlers},onClickAway:event=>{null==onClose||onClose(event,"clickaway")}}}((0,esm_extends.Z)({},ownerState)),[exited,setExited]=react.useState(!0),rootProps=(0,useSlotProps.y)({elementType:SnackbarRoot,getSlotProps:getRootProps,externalForwardedProps:other,ownerState,additionalProps:{ref},className:[classes.root,className]});return!open&&exited?null:(0,jsx_runtime.jsx)(ClickAwayListener.d,(0,esm_extends.Z)({onClickAway},ClickAwayListenerProps,{children:(0,jsx_runtime.jsx)(SnackbarRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({appear:!0,in:open,timeout:transitionDuration,direction:"top"===vertical?"down":"up",onEnter:(node,isAppearing)=>{setExited(!1),onEnter&&onEnter(node,isAppearing)},onExited:node=>{setExited(!0),onExited&&onExited(node)}},TransitionProps,{children:children||(0,jsx_runtime.jsx)(SnackbarContent_SnackbarContent,(0,esm_extends.Z)({message,action},ContentProps))}))}))}))}))}}]);