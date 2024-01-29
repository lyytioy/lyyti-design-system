/*! For license information please see 1947.eccbf8b1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[1947],{"./node_modules/@mui/material/Grow/Grow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_transitions_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/transitions/utils.js"),_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function getScale(value){return`scale(${value}, ${value**2})`}const styles={entering:{opacity:1,transform:getScale(1)},entered:{opacity:1,transform:"none"}},isWebKit154="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Grow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Grow(props,ref){const{addEndListener,appear=!0,children,easing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout="auto",TransitionComponent=react_transition_group__WEBPACK_IMPORTED_MODULE_2__.ZP}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded),timer=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),autoTimeout=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),theme=(0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__.Z)(),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__.Z)(nodeRef,children.ref,ref),normalizedTransitionCallback=callback=>maybeIsAppearing=>{if(callback){const node=nodeRef.current;void 0===maybeIsAppearing?callback(node):callback(node,maybeIsAppearing)}},handleEntering=normalizedTransitionCallback(onEntering),handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.n)(node);const{duration:transitionDuration,delay,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"enter"});let duration;"auto"===timeout?(duration=theme.transitions.getAutoHeightDuration(node.clientHeight),autoTimeout.current=duration):duration=transitionDuration,node.style.transition=[theme.transitions.create("opacity",{duration,delay}),theme.transitions.create("transform",{duration:isWebKit154?duration:.666*duration,delay,easing:transitionTimingFunction})].join(","),onEnter&&onEnter(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const{duration:transitionDuration,delay,easing:transitionTimingFunction}=(0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__.C)({style,timeout,easing},{mode:"exit"});let duration;"auto"===timeout?(duration=theme.transitions.getAutoHeightDuration(node.clientHeight),autoTimeout.current=duration):duration=transitionDuration,node.style.transition=[theme.transitions.create("opacity",{duration,delay}),theme.transitions.create("transform",{duration:isWebKit154?duration:.666*duration,delay:isWebKit154?delay:delay||.333*duration,easing:transitionTimingFunction})].join(","),node.style.opacity=0,node.style.transform=getScale(.75),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback(onExited);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(timer.current)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({appear,in:inProp,nodeRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{"auto"===timeout&&(timer.current=setTimeout(next,autoTimeout.current||0)),addEndListener&&addEndListener(nodeRef.current,next)},timeout:"auto"===timeout?null:timeout},other,{children:(state,childProps)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({opacity:0,transform:getScale(.75),visibility:"exited"!==state||inProp?void 0:"hidden"},styles[state],style,children.props.style),ref:handleRef},childProps))}))}));Grow.muiSupportAuto=!0;const __WEBPACK_DEFAULT_EXPORT__=Grow},"./node_modules/@mui/material/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>List_List});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiList",slot)}(0,generateUtilityClasses.Z)("MuiList",["root","padding","dense","subheader"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["children","className","component","dense","disablePadding","subheader"],ListRoot=(0,styled.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disablePadding&&styles.padding,ownerState.dense&&styles.dense,ownerState.subheader&&styles.subheader]}})((({ownerState})=>(0,esm_extends.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!ownerState.disablePadding&&{paddingTop:8,paddingBottom:8},ownerState.subheader&&{paddingTop:0}))),List_List=react.forwardRef((function List(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiList"}),{children,className,component="ul",dense=!1,disablePadding=!1,subheader}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useMemo((()=>({dense})),[dense]),ownerState=(0,esm_extends.Z)({},props,{component,dense,disablePadding}),classes=(ownerState=>{const{classes,disablePadding,dense,subheader}=ownerState,slots={root:["root",!disablePadding&&"padding",dense&&"dense",subheader&&"subheader"]};return(0,composeClasses.Z)(slots,getListUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:context,children:(0,jsx_runtime.jsxs)(ListRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,className),ref,ownerState},other,{children:[subheader,children]}))})}))},"./node_modules/@mui/material/List/ListContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createContext({})},"./node_modules/@mui/material/Menu/Menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Menu_Menu});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.mjs")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/base/utils/useSlotProps.js"),MenuList=__webpack_require__("./node_modules/@mui/material/MenuList/MenuList.js"),isHostComponent=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/base/utils/isHostComponent.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js"),ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPopoverUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiPopover",slot)}(0,generateUtilityClasses.Z)("MuiPopover",["root","paper"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["onEntering"],_excluded2=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],_excluded3=["slotProps"];function getOffsetTop(rect,vertical){let offset=0;return"number"==typeof vertical?offset=vertical:"center"===vertical?offset=rect.height/2:"bottom"===vertical&&(offset=rect.height),offset}function getOffsetLeft(rect,horizontal){let offset=0;return"number"==typeof horizontal?offset=horizontal:"center"===horizontal?offset=rect.width/2:"right"===horizontal&&(offset=rect.width),offset}function getTransformOriginValue(transformOrigin){return[transformOrigin.horizontal,transformOrigin.vertical].map((n=>"number"==typeof n?`${n}px`:n)).join(" ")}function resolveAnchorEl(anchorEl){return"function"==typeof anchorEl?anchorEl():anchorEl}const PopoverRoot=(0,styled.ZP)(Modal.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),PopoverPaper=(0,styled.ZP)(Paper.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(props,styles)=>styles.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Popover_Popover=react.forwardRef((function Popover(inProps,ref){var _slotProps$paper,_slots$root,_slots$paper;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPopover"}),{action,anchorEl,anchorOrigin={vertical:"top",horizontal:"left"},anchorPosition,anchorReference="anchorEl",children,className,container:containerProp,elevation=8,marginThreshold=16,open,PaperProps:PaperPropsProp={},slots,slotProps,transformOrigin={vertical:"top",horizontal:"left"},TransitionComponent=Grow.Z,transitionDuration:transitionDurationProp="auto",TransitionProps:{onEntering}={},disableScrollLock=!1}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),externalPaperSlotProps=null!=(_slotProps$paper=null==slotProps?void 0:slotProps.paper)?_slotProps$paper:PaperPropsProp,paperRef=react.useRef(),handlePaperRef=(0,useForkRef.Z)(paperRef,externalPaperSlotProps.ref),ownerState=(0,esm_extends.Z)({},props,{anchorOrigin,anchorReference,elevation,marginThreshold,externalPaperSlotProps,transformOrigin,TransitionComponent,transitionDuration:transitionDurationProp,TransitionProps}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],paper:["paper"]},getPopoverUtilityClass,classes)})(ownerState),getAnchorOffset=react.useCallback((()=>{if("anchorPosition"===anchorReference)return anchorPosition;const resolvedAnchorEl=resolveAnchorEl(anchorEl),anchorRect=(resolvedAnchorEl&&1===resolvedAnchorEl.nodeType?resolvedAnchorEl:(0,ownerDocument.Z)(paperRef.current).body).getBoundingClientRect();return{top:anchorRect.top+getOffsetTop(anchorRect,anchorOrigin.vertical),left:anchorRect.left+getOffsetLeft(anchorRect,anchorOrigin.horizontal)}}),[anchorEl,anchorOrigin.horizontal,anchorOrigin.vertical,anchorPosition,anchorReference]),getTransformOrigin=react.useCallback((elemRect=>({vertical:getOffsetTop(elemRect,transformOrigin.vertical),horizontal:getOffsetLeft(elemRect,transformOrigin.horizontal)})),[transformOrigin.horizontal,transformOrigin.vertical]),getPositioningStyle=react.useCallback((element=>{const elemRect={width:element.offsetWidth,height:element.offsetHeight},elemTransformOrigin=getTransformOrigin(elemRect);if("none"===anchorReference)return{top:null,left:null,transformOrigin:getTransformOriginValue(elemTransformOrigin)};const anchorOffset=getAnchorOffset();let top=anchorOffset.top-elemTransformOrigin.vertical,left=anchorOffset.left-elemTransformOrigin.horizontal;const bottom=top+elemRect.height,right=left+elemRect.width,containerWindow=(0,ownerWindow.Z)(resolveAnchorEl(anchorEl)),heightThreshold=containerWindow.innerHeight-marginThreshold,widthThreshold=containerWindow.innerWidth-marginThreshold;if(null!==marginThreshold&&top<marginThreshold){const diff=top-marginThreshold;top-=diff,elemTransformOrigin.vertical+=diff}else if(null!==marginThreshold&&bottom>heightThreshold){const diff=bottom-heightThreshold;top-=diff,elemTransformOrigin.vertical+=diff}if(null!==marginThreshold&&left<marginThreshold){const diff=left-marginThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}else if(right>widthThreshold){const diff=right-widthThreshold;left-=diff,elemTransformOrigin.horizontal+=diff}return{top:`${Math.round(top)}px`,left:`${Math.round(left)}px`,transformOrigin:getTransformOriginValue(elemTransformOrigin)}}),[anchorEl,anchorReference,getAnchorOffset,getTransformOrigin,marginThreshold]),[isPositioned,setIsPositioned]=react.useState(open),setPositioningStyles=react.useCallback((()=>{const element=paperRef.current;if(!element)return;const positioning=getPositioningStyle(element);null!==positioning.top&&(element.style.top=positioning.top),null!==positioning.left&&(element.style.left=positioning.left),element.style.transformOrigin=positioning.transformOrigin,setIsPositioned(!0)}),[getPositioningStyle]);react.useEffect((()=>(disableScrollLock&&window.addEventListener("scroll",setPositioningStyles),()=>window.removeEventListener("scroll",setPositioningStyles))),[anchorEl,disableScrollLock,setPositioningStyles]);react.useEffect((()=>{open&&setPositioningStyles()})),react.useImperativeHandle(action,(()=>open?{updatePosition:()=>{setPositioningStyles()}}:null),[open,setPositioningStyles]),react.useEffect((()=>{if(!open)return;const handleResize=(0,debounce.Z)((()=>{setPositioningStyles()})),containerWindow=(0,ownerWindow.Z)(anchorEl);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[anchorEl,open,setPositioningStyles]);let transitionDuration=transitionDurationProp;"auto"!==transitionDurationProp||TransitionComponent.muiSupportAuto||(transitionDuration=void 0);const container=containerProp||(anchorEl?(0,ownerDocument.Z)(resolveAnchorEl(anchorEl)).body:void 0),RootSlot=null!=(_slots$root=null==slots?void 0:slots.root)?_slots$root:PopoverRoot,PaperSlot=null!=(_slots$paper=null==slots?void 0:slots.paper)?_slots$paper:PopoverPaper,paperProps=(0,useSlotProps.y)({elementType:PaperSlot,externalSlotProps:(0,esm_extends.Z)({},externalPaperSlotProps,{style:isPositioned?externalPaperSlotProps.style:(0,esm_extends.Z)({},externalPaperSlotProps.style,{opacity:0})}),additionalProps:{elevation,ref:handlePaperRef},ownerState,className:(0,clsx.Z)(classes.paper,null==externalPaperSlotProps?void 0:externalPaperSlotProps.className)}),_useSlotProps=(0,useSlotProps.y)({elementType:RootSlot,externalSlotProps:(null==slotProps?void 0:slotProps.root)||{},externalForwardedProps:other,additionalProps:{ref,slotProps:{backdrop:{invisible:!0}},container,open},ownerState,className:(0,clsx.Z)(classes.root,className)}),{slotProps:rootSlotPropsProp}=_useSlotProps,rootProps=(0,objectWithoutPropertiesLoose.Z)(_useSlotProps,_excluded3);return(0,jsx_runtime.jsx)(RootSlot,(0,esm_extends.Z)({},rootProps,!(0,isHostComponent.X)(RootSlot)&&{slotProps:rootSlotPropsProp,disableScrollLock},{children:(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({appear:!0,in:open,onEntering:(element,isAppearing)=>{onEntering&&onEntering(element,isAppearing),setPositioningStyles()},onExited:()=>{setIsPositioned(!1)},timeout:transitionDuration},TransitionProps,{children:(0,jsx_runtime.jsx)(PaperSlot,(0,esm_extends.Z)({},paperProps,{children}))}))}))}));var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js");function getMenuUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiMenu",slot)}(0,generateUtilityClasses.Z)("MuiMenu",["root","paper","list"]);const Menu_excluded=["onEntering"],Menu_excluded2=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],RTL_ORIGIN={vertical:"top",horizontal:"right"},LTR_ORIGIN={vertical:"top",horizontal:"left"},MenuRoot=(0,styled.ZP)(Popover_Popover,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiMenu",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),MenuPaper=(0,styled.ZP)(PopoverPaper,{name:"MuiMenu",slot:"Paper",overridesResolver:(props,styles)=>styles.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),MenuMenuList=(0,styled.ZP)(MenuList.Z,{name:"MuiMenu",slot:"List",overridesResolver:(props,styles)=>styles.list})({outline:0}),Menu_Menu=react.forwardRef((function Menu(inProps,ref){var _slots$paper,_slotProps$paper;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiMenu"}),{autoFocus=!0,children,className,disableAutoFocusItem=!1,MenuListProps={},onClose,open,PaperProps={},PopoverClasses,transitionDuration="auto",TransitionProps:{onEntering}={},variant="selectedMenu",slots={},slotProps={}}=props,TransitionProps=(0,objectWithoutPropertiesLoose.Z)(props.TransitionProps,Menu_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,Menu_excluded2),theme=(0,useTheme.Z)(),isRtl="rtl"===theme.direction,ownerState=(0,esm_extends.Z)({},props,{autoFocus,disableAutoFocusItem,MenuListProps,onEntering,PaperProps,transitionDuration,TransitionProps,variant}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],paper:["paper"],list:["list"]},getMenuUtilityClass,classes)})(ownerState),autoFocusItem=autoFocus&&!disableAutoFocusItem&&open,menuListActionsRef=react.useRef(null);let activeItemIndex=-1;react.Children.map(children,((child,index)=>{react.isValidElement(child)&&(child.props.disabled||("selectedMenu"===variant&&child.props.selected||-1===activeItemIndex)&&(activeItemIndex=index))}));const PaperSlot=null!=(_slots$paper=slots.paper)?_slots$paper:MenuPaper,paperExternalSlotProps=null!=(_slotProps$paper=slotProps.paper)?_slotProps$paper:PaperProps,rootSlotProps=(0,useSlotProps.y)({elementType:slots.root,externalSlotProps:slotProps.root,ownerState,className:[classes.root,className]}),paperSlotProps=(0,useSlotProps.y)({elementType:PaperSlot,externalSlotProps:paperExternalSlotProps,ownerState,className:classes.paper});return(0,jsx_runtime.jsx)(MenuRoot,(0,esm_extends.Z)({onClose,anchorOrigin:{vertical:"bottom",horizontal:isRtl?"right":"left"},transformOrigin:isRtl?RTL_ORIGIN:LTR_ORIGIN,slots:{paper:PaperSlot,root:slots.root},slotProps:{root:rootSlotProps,paper:paperSlotProps},open,ref,transitionDuration,TransitionProps:(0,esm_extends.Z)({onEntering:(element,isAppearing)=>{menuListActionsRef.current&&menuListActionsRef.current.adjustStyleForScrollbar(element,theme),onEntering&&onEntering(element,isAppearing)}},TransitionProps),ownerState},other,{classes:PopoverClasses,children:(0,jsx_runtime.jsx)(MenuMenuList,(0,esm_extends.Z)({onKeyDown:event=>{"Tab"===event.key&&(event.preventDefault(),onClose&&onClose(event,"tabKeyDown"))},actions:menuListActionsRef,autoFocus:autoFocus&&(-1===activeItemIndex||disableAutoFocusItem),autoFocusItem,variant},MenuListProps,{className:(0,clsx.Z)(classes.list,MenuListProps.className),children}))}))}))},"./node_modules/@mui/material/MenuList/MenuList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuList_MenuList});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ownerDocument=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js")),List=__webpack_require__("./node_modules/@mui/material/List/List.js");const utils_getScrollbarSize=__webpack_require__("./node_modules/@mui/utils/esm/getScrollbarSize.js").Z;var useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function nextItem(list,item,disableListWrap){return list===item?list.firstChild:item&&item.nextElementSibling?item.nextElementSibling:disableListWrap?null:list.firstChild}function previousItem(list,item,disableListWrap){return list===item?disableListWrap?list.firstChild:list.lastChild:item&&item.previousElementSibling?item.previousElementSibling:disableListWrap?null:list.lastChild}function textCriteriaMatches(nextFocus,textCriteria){if(void 0===textCriteria)return!0;let text=nextFocus.innerText;return void 0===text&&(text=nextFocus.textContent),text=text.trim().toLowerCase(),0!==text.length&&(textCriteria.repeating?text[0]===textCriteria.keys[0]:0===text.indexOf(textCriteria.keys.join("")))}function moveFocus(list,currentFocus,disableListWrap,disabledItemsFocusable,traversalFunction,textCriteria){let wrappedOnce=!1,nextFocus=traversalFunction(list,currentFocus,!!currentFocus&&disableListWrap);for(;nextFocus;){if(nextFocus===list.firstChild){if(wrappedOnce)return!1;wrappedOnce=!0}const nextFocusDisabled=!disabledItemsFocusable&&(nextFocus.disabled||"true"===nextFocus.getAttribute("aria-disabled"));if(nextFocus.hasAttribute("tabindex")&&textCriteriaMatches(nextFocus,textCriteria)&&!nextFocusDisabled)return nextFocus.focus(),!0;nextFocus=traversalFunction(list,nextFocus,disableListWrap)}return!1}const MenuList_MenuList=react.forwardRef((function MenuList(props,ref){const{actions,autoFocus=!1,autoFocusItem=!1,children,className,disabledItemsFocusable=!1,disableListWrap=!1,onKeyDown,variant="selectedMenu"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),listRef=react.useRef(null),textCriteriaRef=react.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,useEnhancedEffect.Z)((()=>{autoFocus&&listRef.current.focus()}),[autoFocus]),react.useImperativeHandle(actions,(()=>({adjustStyleForScrollbar:(containerElement,theme)=>{const noExplicitWidth=!listRef.current.style.width;if(containerElement.clientHeight<listRef.current.clientHeight&&noExplicitWidth){const scrollbarSize=`${utils_getScrollbarSize((0,ownerDocument.Z)(containerElement))}px`;listRef.current.style["rtl"===theme.direction?"paddingLeft":"paddingRight"]=scrollbarSize,listRef.current.style.width=`calc(100% + ${scrollbarSize})`}return listRef.current}})),[]);const handleRef=(0,useForkRef.Z)(listRef,ref);let activeItemIndex=-1;react.Children.forEach(children,((child,index)=>{react.isValidElement(child)?(child.props.disabled||("selectedMenu"===variant&&child.props.selected||-1===activeItemIndex)&&(activeItemIndex=index),activeItemIndex===index&&(child.props.disabled||child.props.muiSkipListHighlight||child.type.muiSkipListHighlight)&&(activeItemIndex+=1,activeItemIndex>=children.length&&(activeItemIndex=-1))):activeItemIndex===index&&(activeItemIndex+=1,activeItemIndex>=children.length&&(activeItemIndex=-1))}));const items=react.Children.map(children,((child,index)=>{if(index===activeItemIndex){const newChildProps={};return autoFocusItem&&(newChildProps.autoFocus=!0),void 0===child.props.tabIndex&&"selectedMenu"===variant&&(newChildProps.tabIndex=0),react.cloneElement(child,newChildProps)}return child}));return(0,jsx_runtime.jsx)(List.Z,(0,esm_extends.Z)({role:"menu",ref:handleRef,className,onKeyDown:event=>{const list=listRef.current,key=event.key,currentFocus=(0,ownerDocument.Z)(list).activeElement;if("ArrowDown"===key)event.preventDefault(),moveFocus(list,currentFocus,disableListWrap,disabledItemsFocusable,nextItem);else if("ArrowUp"===key)event.preventDefault(),moveFocus(list,currentFocus,disableListWrap,disabledItemsFocusable,previousItem);else if("Home"===key)event.preventDefault(),moveFocus(list,null,disableListWrap,disabledItemsFocusable,nextItem);else if("End"===key)event.preventDefault(),moveFocus(list,null,disableListWrap,disabledItemsFocusable,previousItem);else if(1===key.length){const criteria=textCriteriaRef.current,lowerKey=key.toLowerCase(),currTime=performance.now();criteria.keys.length>0&&(currTime-criteria.lastTime>500?(criteria.keys=[],criteria.repeating=!0,criteria.previousKeyMatched=!0):criteria.repeating&&lowerKey!==criteria.keys[0]&&(criteria.repeating=!1)),criteria.lastTime=currTime,criteria.keys.push(lowerKey);const keepFocusOnCurrent=currentFocus&&!criteria.repeating&&textCriteriaMatches(currentFocus,criteria);criteria.previousKeyMatched&&(keepFocusOnCurrent||moveFocus(list,currentFocus,!1,disabledItemsFocusable,nextItem,criteria))?event.preventDefault():criteria.previousKeyMatched=!1}onKeyDown&&onKeyDown(event)},tabIndex:autoFocus?0:-1},other,{children:items}))}))},"./node_modules/@mui/material/utils/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/debounce/debounce.js").Z},"./node_modules/@mui/material/utils/ownerDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js").Z},"./node_modules/@mui/material/utils/ownerWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js").Z},"./node_modules/@mui/material/utils/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js").Z},"./node_modules/@mui/utils/esm/debounce/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout((()=>{func.apply(this,args)}),wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced}__webpack_require__.d(__webpack_exports__,{Z:()=>debounce})},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);