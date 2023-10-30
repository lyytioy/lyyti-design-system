"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[7932],{"./node_modules/@mui/material/Tab/Tab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tab_Tab});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTabUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTab",slot)}const Tab_tabClasses=(0,generateUtilityClasses.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],TabRoot=(0,styled.ZP)(ButtonBase.Z,{name:"MuiTab",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.label&&ownerState.icon&&styles.labelIcon,styles[`textColor${(0,capitalize.Z)(ownerState.textColor)}`],ownerState.fullWidth&&styles.fullWidth,ownerState.wrapped&&styles.wrapped]}})((({theme,ownerState})=>(0,esm_extends.Z)({},theme.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},ownerState.label&&{flexDirection:"top"===ownerState.iconPosition||"bottom"===ownerState.iconPosition?"column":"row"},{lineHeight:1.25},ownerState.icon&&ownerState.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${Tab_tabClasses.iconWrapper}`]:(0,esm_extends.Z)({},"top"===ownerState.iconPosition&&{marginBottom:6},"bottom"===ownerState.iconPosition&&{marginTop:6},"start"===ownerState.iconPosition&&{marginRight:theme.spacing(1)},"end"===ownerState.iconPosition&&{marginLeft:theme.spacing(1)})},"inherit"===ownerState.textColor&&{color:"inherit",opacity:.6,[`&.${Tab_tabClasses.selected}`]:{opacity:1},[`&.${Tab_tabClasses.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity}},"primary"===ownerState.textColor&&{color:(theme.vars||theme).palette.text.secondary,[`&.${Tab_tabClasses.selected}`]:{color:(theme.vars||theme).palette.primary.main},[`&.${Tab_tabClasses.disabled}`]:{color:(theme.vars||theme).palette.text.disabled}},"secondary"===ownerState.textColor&&{color:(theme.vars||theme).palette.text.secondary,[`&.${Tab_tabClasses.selected}`]:{color:(theme.vars||theme).palette.secondary.main},[`&.${Tab_tabClasses.disabled}`]:{color:(theme.vars||theme).palette.text.disabled}},ownerState.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},ownerState.wrapped&&{fontSize:theme.typography.pxToRem(12)}))),Tab_Tab=react.forwardRef((function Tab(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiTab"}),{className,disabled=!1,disableFocusRipple=!1,fullWidth,icon:iconProp,iconPosition="top",indicator,label,onChange,onClick,onFocus,selected,selectionFollowsFocus,textColor="inherit",value,wrapped=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{disabled,disableFocusRipple,selected,icon:!!iconProp,iconPosition,label:!!label,fullWidth,textColor,wrapped}),classes=(ownerState=>{const{classes,textColor,fullWidth,wrapped,icon,label,selected,disabled}=ownerState,slots={root:["root",icon&&label&&"labelIcon",`textColor${(0,capitalize.Z)(textColor)}`,fullWidth&&"fullWidth",wrapped&&"wrapped",selected&&"selected",disabled&&"disabled"],iconWrapper:["iconWrapper"]};return(0,composeClasses.Z)(slots,getTabUtilityClass,classes)})(ownerState),icon=iconProp&&label&&react.isValidElement(iconProp)?react.cloneElement(iconProp,{className:(0,clsx.Z)(classes.iconWrapper,iconProp.props.className)}):iconProp;return(0,jsx_runtime.jsxs)(TabRoot,(0,esm_extends.Z)({focusRipple:!disableFocusRipple,className:(0,clsx.Z)(classes.root,className),ref,role:"tab","aria-selected":selected,disabled,onClick:event=>{!selected&&onChange&&onChange(event,value),onClick&&onClick(event)},onFocus:event=>{selectionFollowsFocus&&!selected&&onChange&&onChange(event,value),onFocus&&onFocus(event)},ownerState,tabIndex:selected?0:-1},other,{children:["top"===iconPosition||"start"===iconPosition?(0,jsx_runtime.jsxs)(react.Fragment,{children:[icon,label]}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[label,icon]}),indicator]}))}))},"./node_modules/@mui/material/Tabs/Tabs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tabs_Tabs});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("./node_modules/@mui/base/utils/useSlotProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js");let cachedType;function detectScrollType(){if(cachedType)return cachedType;const dummy=document.createElement("div"),container=document.createElement("div");return container.style.width="10px",container.style.height="1px",dummy.appendChild(container),dummy.dir="rtl",dummy.style.fontSize="14px",dummy.style.width="4px",dummy.style.height="1px",dummy.style.position="absolute",dummy.style.top="-1000px",dummy.style.overflow="scroll",document.body.appendChild(dummy),cachedType="reverse",dummy.scrollLeft>0?cachedType="default":(dummy.scrollLeft=1,0===dummy.scrollLeft&&(cachedType="negative")),document.body.removeChild(dummy),cachedType}function getNormalizedScrollLeft(element,direction){const scrollLeft=element.scrollLeft;if("rtl"!==direction)return scrollLeft;switch(detectScrollType()){case"negative":return element.scrollWidth-element.clientWidth+scrollLeft;case"reverse":return element.scrollWidth-element.clientWidth-scrollLeft;default:return scrollLeft}}function easeInOutSin(time){return(1+Math.sin(Math.PI*time-Math.PI/2))/2}var useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["onChange"],styles={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var KeyboardArrowLeft=__webpack_require__("./node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js"),KeyboardArrowRight=__webpack_require__("./node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTabScrollButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTabScrollButton",slot)}const TabScrollButton_tabScrollButtonClasses=(0,generateUtilityClasses.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),TabScrollButton_excluded=["className","slots","slotProps","direction","orientation","disabled"],TabScrollButtonRoot=(0,styled.ZP)(ButtonBase.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.orientation&&styles[ownerState.orientation]]}})((({ownerState})=>(0,esm_extends.Z)({width:40,flexShrink:0,opacity:.8,[`&.${TabScrollButton_tabScrollButtonClasses.disabled}`]:{opacity:0}},"vertical"===ownerState.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${ownerState.isRtl?-90:90}deg)`}}))),TabScrollButton_TabScrollButton=react.forwardRef((function TabScrollButton(inProps,ref){var _slots$StartScrollBut,_slots$EndScrollButto;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiTabScrollButton"}),{className,slots={},slotProps={},direction}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,TabScrollButton_excluded),isRtl="rtl"===(0,useTheme.Z)().direction,ownerState=(0,esm_extends.Z)({isRtl},props),classes=(ownerState=>{const{classes,orientation,disabled}=ownerState,slots={root:["root",orientation,disabled&&"disabled"]};return(0,composeClasses.Z)(slots,getTabScrollButtonUtilityClass,classes)})(ownerState),StartButtonIcon=null!=(_slots$StartScrollBut=slots.StartScrollButtonIcon)?_slots$StartScrollBut:KeyboardArrowLeft.Z,EndButtonIcon=null!=(_slots$EndScrollButto=slots.EndScrollButtonIcon)?_slots$EndScrollButto:KeyboardArrowRight.Z,startButtonIconProps=(0,useSlotProps.y)({elementType:StartButtonIcon,externalSlotProps:slotProps.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState}),endButtonIconProps=(0,useSlotProps.y)({elementType:EndButtonIcon,externalSlotProps:slotProps.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState});return(0,jsx_runtime.jsx)(TabScrollButtonRoot,(0,esm_extends.Z)({component:"div",className:(0,clsx.Z)(classes.root,className),ref,role:null,ownerState,tabIndex:null},other,{children:"left"===direction?(0,jsx_runtime.jsx)(StartButtonIcon,(0,esm_extends.Z)({},startButtonIconProps)):(0,jsx_runtime.jsx)(EndButtonIcon,(0,esm_extends.Z)({},endButtonIconProps))}))}));var useEventCallback=__webpack_require__("./node_modules/@mui/material/utils/useEventCallback.js");function getTabsUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTabs",slot)}const Tabs_tabsClasses=(0,generateUtilityClasses.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js");const Tabs_excluded=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],nextItem=(list,item)=>list===item?list.firstChild:item&&item.nextElementSibling?item.nextElementSibling:list.firstChild,previousItem=(list,item)=>list===item?list.lastChild:item&&item.previousElementSibling?item.previousElementSibling:list.lastChild,moveFocus=(list,currentFocus,traversalFunction)=>{let wrappedOnce=!1,nextFocus=traversalFunction(list,currentFocus);for(;nextFocus;){if(nextFocus===list.firstChild){if(wrappedOnce)return;wrappedOnce=!0}const nextFocusDisabled=nextFocus.disabled||"true"===nextFocus.getAttribute("aria-disabled");if(nextFocus.hasAttribute("tabindex")&&!nextFocusDisabled)return void nextFocus.focus();nextFocus=traversalFunction(list,nextFocus)}},TabsRoot=(0,styled.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${Tabs_tabsClasses.scrollButtons}`]:styles.scrollButtons},{[`& .${Tabs_tabsClasses.scrollButtons}`]:ownerState.scrollButtonsHideMobile&&styles.scrollButtonsHideMobile},styles.root,ownerState.vertical&&styles.vertical]}})((({ownerState,theme})=>(0,esm_extends.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},ownerState.vertical&&{flexDirection:"column"},ownerState.scrollButtonsHideMobile&&{[`& .${Tabs_tabsClasses.scrollButtons}`]:{[theme.breakpoints.down("sm")]:{display:"none"}}}))),TabsScroller=(0,styled.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.scroller,ownerState.fixed&&styles.fixed,ownerState.hideScrollbar&&styles.hideScrollbar,ownerState.scrollableX&&styles.scrollableX,ownerState.scrollableY&&styles.scrollableY]}})((({ownerState})=>(0,esm_extends.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},ownerState.fixed&&{overflowX:"hidden",width:"100%"},ownerState.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},ownerState.scrollableX&&{overflowX:"auto",overflowY:"hidden"},ownerState.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),FlexContainer=(0,styled.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.flexContainer,ownerState.vertical&&styles.flexContainerVertical,ownerState.centered&&styles.centered]}})((({ownerState})=>(0,esm_extends.Z)({display:"flex"},ownerState.vertical&&{flexDirection:"column"},ownerState.centered&&{justifyContent:"center"}))),TabsIndicator=(0,styled.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(props,styles)=>styles.indicator})((({ownerState,theme})=>(0,esm_extends.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:theme.transitions.create()},"primary"===ownerState.indicatorColor&&{backgroundColor:(theme.vars||theme).palette.primary.main},"secondary"===ownerState.indicatorColor&&{backgroundColor:(theme.vars||theme).palette.secondary.main},ownerState.vertical&&{height:"100%",width:2,right:0}))),TabsScrollbarSize=(0,styled.ZP)((function ScrollbarSize(props){const{onChange}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),scrollbarHeight=react.useRef(),nodeRef=react.useRef(null),setMeasurements=()=>{scrollbarHeight.current=nodeRef.current.offsetHeight-nodeRef.current.clientHeight};return(0,useEnhancedEffect.Z)((()=>{const handleResize=(0,debounce.Z)((()=>{const prevHeight=scrollbarHeight.current;setMeasurements(),prevHeight!==scrollbarHeight.current&&onChange(scrollbarHeight.current)})),containerWindow=(0,ownerWindow.Z)(nodeRef.current);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[onChange]),react.useEffect((()=>{setMeasurements(),onChange(scrollbarHeight.current)}),[onChange]),(0,jsx_runtime.jsx)("div",(0,esm_extends.Z)({style:styles,ref:nodeRef},other))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),defaultIndicatorStyle={};const Tabs_Tabs=react.forwardRef((function Tabs(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiTabs"}),theme=(0,useTheme.Z)(),isRtl="rtl"===theme.direction,{"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,action,centered=!1,children:childrenProp,className,component="div",allowScrollButtonsMobile=!1,indicatorColor="primary",onChange,orientation="horizontal",ScrollButtonComponent=TabScrollButton_TabScrollButton,scrollButtons="auto",selectionFollowsFocus,slots={},slotProps={},TabIndicatorProps={},TabScrollButtonProps={},textColor="primary",value,variant="standard",visibleScrollbar=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,Tabs_excluded),scrollable="scrollable"===variant,vertical="vertical"===orientation,scrollStart=vertical?"scrollTop":"scrollLeft",start=vertical?"top":"left",end=vertical?"bottom":"right",clientSize=vertical?"clientHeight":"clientWidth",size=vertical?"height":"width",ownerState=(0,esm_extends.Z)({},props,{component,allowScrollButtonsMobile,indicatorColor,orientation,vertical,scrollButtons,textColor,variant,visibleScrollbar,fixed:!scrollable,hideScrollbar:scrollable&&!visibleScrollbar,scrollableX:scrollable&&!vertical,scrollableY:scrollable&&vertical,centered:centered&&!scrollable,scrollButtonsHideMobile:!allowScrollButtonsMobile}),classes=(ownerState=>{const{vertical,fixed,hideScrollbar,scrollableX,scrollableY,centered,scrollButtonsHideMobile,classes}=ownerState,slots={root:["root",vertical&&"vertical"],scroller:["scroller",fixed&&"fixed",hideScrollbar&&"hideScrollbar",scrollableX&&"scrollableX",scrollableY&&"scrollableY"],flexContainer:["flexContainer",vertical&&"flexContainerVertical",centered&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",scrollButtonsHideMobile&&"scrollButtonsHideMobile"],scrollableX:[scrollableX&&"scrollableX"],hideScrollbar:[hideScrollbar&&"hideScrollbar"]};return(0,composeClasses.Z)(slots,getTabsUtilityClass,classes)})(ownerState),startScrollButtonIconProps=(0,useSlotProps.y)({elementType:slots.StartScrollButtonIcon,externalSlotProps:slotProps.startScrollButtonIcon,ownerState}),endScrollButtonIconProps=(0,useSlotProps.y)({elementType:slots.EndScrollButtonIcon,externalSlotProps:slotProps.endScrollButtonIcon,ownerState});const[mounted,setMounted]=react.useState(!1),[indicatorStyle,setIndicatorStyle]=react.useState(defaultIndicatorStyle),[displayStartScroll,setDisplayStartScroll]=react.useState(!1),[displayEndScroll,setDisplayEndScroll]=react.useState(!1),[updateScrollObserver,setUpdateScrollObserver]=react.useState(!1),[scrollerStyle,setScrollerStyle]=react.useState({overflow:"hidden",scrollbarWidth:0}),valueToIndex=new Map,tabsRef=react.useRef(null),tabListRef=react.useRef(null),getTabsMeta=()=>{const tabsNode=tabsRef.current;let tabsMeta,tabMeta;if(tabsNode){const rect=tabsNode.getBoundingClientRect();tabsMeta={clientWidth:tabsNode.clientWidth,scrollLeft:tabsNode.scrollLeft,scrollTop:tabsNode.scrollTop,scrollLeftNormalized:getNormalizedScrollLeft(tabsNode,theme.direction),scrollWidth:tabsNode.scrollWidth,top:rect.top,bottom:rect.bottom,left:rect.left,right:rect.right}}if(tabsNode&&!1!==value){const children=tabListRef.current.children;if(children.length>0){const tab=children[valueToIndex.get(value)];0,tabMeta=tab?tab.getBoundingClientRect():null}}return{tabsMeta,tabMeta}},updateIndicatorState=(0,useEventCallback.Z)((()=>{const{tabsMeta,tabMeta}=getTabsMeta();let startIndicator,startValue=0;if(vertical)startIndicator="top",tabMeta&&tabsMeta&&(startValue=tabMeta.top-tabsMeta.top+tabsMeta.scrollTop);else if(startIndicator=isRtl?"right":"left",tabMeta&&tabsMeta){const correction=isRtl?tabsMeta.scrollLeftNormalized+tabsMeta.clientWidth-tabsMeta.scrollWidth:tabsMeta.scrollLeft;startValue=(isRtl?-1:1)*(tabMeta[startIndicator]-tabsMeta[startIndicator]+correction)}const newIndicatorStyle={[startIndicator]:startValue,[size]:tabMeta?tabMeta[size]:0};if(isNaN(indicatorStyle[startIndicator])||isNaN(indicatorStyle[size]))setIndicatorStyle(newIndicatorStyle);else{const dStart=Math.abs(indicatorStyle[startIndicator]-newIndicatorStyle[startIndicator]),dSize=Math.abs(indicatorStyle[size]-newIndicatorStyle[size]);(dStart>=1||dSize>=1)&&setIndicatorStyle(newIndicatorStyle)}})),scroll=(scrollValue,{animation=!0}={})=>{animation?function animate(property,element,to,options={},cb=(()=>{})){const{ease=easeInOutSin,duration=300}=options;let start=null;const from=element[property];let cancelled=!1;const cancel=()=>{cancelled=!0},step=timestamp=>{if(cancelled)return void cb(new Error("Animation cancelled"));null===start&&(start=timestamp);const time=Math.min(1,(timestamp-start)/duration);element[property]=ease(time)*(to-from)+from,time>=1?requestAnimationFrame((()=>{cb(null)})):requestAnimationFrame(step)};return from===to?(cb(new Error("Element already at target position")),cancel):(requestAnimationFrame(step),cancel)}(scrollStart,tabsRef.current,scrollValue,{duration:theme.transitions.duration.standard}):tabsRef.current[scrollStart]=scrollValue},moveTabsScroll=delta=>{let scrollValue=tabsRef.current[scrollStart];vertical?scrollValue+=delta:(scrollValue+=delta*(isRtl?-1:1),scrollValue*=isRtl&&"reverse"===detectScrollType()?-1:1),scroll(scrollValue)},getScrollSize=()=>{const containerSize=tabsRef.current[clientSize];let totalSize=0;const children=Array.from(tabListRef.current.children);for(let i=0;i<children.length;i+=1){const tab=children[i];if(totalSize+tab[clientSize]>containerSize){0===i&&(totalSize=containerSize);break}totalSize+=tab[clientSize]}return totalSize},handleStartScrollClick=()=>{moveTabsScroll(-1*getScrollSize())},handleEndScrollClick=()=>{moveTabsScroll(getScrollSize())},handleScrollbarSizeChange=react.useCallback((scrollbarWidth=>{setScrollerStyle({overflow:null,scrollbarWidth})}),[]),scrollSelectedIntoView=(0,useEventCallback.Z)((animation=>{const{tabsMeta,tabMeta}=getTabsMeta();if(tabMeta&&tabsMeta)if(tabMeta[start]<tabsMeta[start]){const nextScrollStart=tabsMeta[scrollStart]+(tabMeta[start]-tabsMeta[start]);scroll(nextScrollStart,{animation})}else if(tabMeta[end]>tabsMeta[end]){const nextScrollStart=tabsMeta[scrollStart]+(tabMeta[end]-tabsMeta[end]);scroll(nextScrollStart,{animation})}})),updateScrollButtonState=(0,useEventCallback.Z)((()=>{scrollable&&!1!==scrollButtons&&setUpdateScrollObserver(!updateScrollObserver)}));react.useEffect((()=>{const handleResize=(0,debounce.Z)((()=>{tabsRef.current&&updateIndicatorState()})),win=(0,ownerWindow.Z)(tabsRef.current);let resizeObserver;return win.addEventListener("resize",handleResize),"undefined"!=typeof ResizeObserver&&(resizeObserver=new ResizeObserver(handleResize),Array.from(tabListRef.current.children).forEach((child=>{resizeObserver.observe(child)}))),()=>{handleResize.clear(),win.removeEventListener("resize",handleResize),resizeObserver&&resizeObserver.disconnect()}}),[updateIndicatorState]),react.useEffect((()=>{const tabListChildren=Array.from(tabListRef.current.children),length=tabListChildren.length;if("undefined"!=typeof IntersectionObserver&&length>0&&scrollable&&!1!==scrollButtons){const firstTab=tabListChildren[0],lastTab=tabListChildren[length-1],observerOptions={root:tabsRef.current,threshold:.99},firstObserver=new IntersectionObserver((entries=>{setDisplayStartScroll(!entries[0].isIntersecting)}),observerOptions);firstObserver.observe(firstTab);const lastObserver=new IntersectionObserver((entries=>{setDisplayEndScroll(!entries[0].isIntersecting)}),observerOptions);return lastObserver.observe(lastTab),()=>{firstObserver.disconnect(),lastObserver.disconnect()}}}),[scrollable,scrollButtons,updateScrollObserver,null==childrenProp?void 0:childrenProp.length]),react.useEffect((()=>{setMounted(!0)}),[]),react.useEffect((()=>{updateIndicatorState()})),react.useEffect((()=>{scrollSelectedIntoView(defaultIndicatorStyle!==indicatorStyle)}),[scrollSelectedIntoView,indicatorStyle]),react.useImperativeHandle(action,(()=>({updateIndicator:updateIndicatorState,updateScrollButtons:updateScrollButtonState})),[updateIndicatorState,updateScrollButtonState]);const indicator=(0,jsx_runtime.jsx)(TabsIndicator,(0,esm_extends.Z)({},TabIndicatorProps,{className:(0,clsx.Z)(classes.indicator,TabIndicatorProps.className),ownerState,style:(0,esm_extends.Z)({},indicatorStyle,TabIndicatorProps.style)}));let childIndex=0;const children=react.Children.map(childrenProp,(child=>{if(!react.isValidElement(child))return null;const childValue=void 0===child.props.value?childIndex:child.props.value;valueToIndex.set(childValue,childIndex);const selected=childValue===value;return childIndex+=1,react.cloneElement(child,(0,esm_extends.Z)({fullWidth:"fullWidth"===variant,indicator:selected&&!mounted&&indicator,selected,selectionFollowsFocus,onChange,textColor,value:childValue},1!==childIndex||!1!==value||child.props.tabIndex?{}:{tabIndex:0}))})),conditionalElements=(()=>{const conditionalElements={};conditionalElements.scrollbarSizeListener=scrollable?(0,jsx_runtime.jsx)(TabsScrollbarSize,{onChange:handleScrollbarSizeChange,className:(0,clsx.Z)(classes.scrollableX,classes.hideScrollbar)}):null;const showScrollButtons=scrollable&&("auto"===scrollButtons&&(displayStartScroll||displayEndScroll)||!0===scrollButtons);return conditionalElements.scrollButtonStart=showScrollButtons?(0,jsx_runtime.jsx)(ScrollButtonComponent,(0,esm_extends.Z)({slots:{StartScrollButtonIcon:slots.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:startScrollButtonIconProps},orientation,direction:isRtl?"right":"left",onClick:handleStartScrollClick,disabled:!displayStartScroll},TabScrollButtonProps,{className:(0,clsx.Z)(classes.scrollButtons,TabScrollButtonProps.className)})):null,conditionalElements.scrollButtonEnd=showScrollButtons?(0,jsx_runtime.jsx)(ScrollButtonComponent,(0,esm_extends.Z)({slots:{EndScrollButtonIcon:slots.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:endScrollButtonIconProps},orientation,direction:isRtl?"left":"right",onClick:handleEndScrollClick,disabled:!displayEndScroll},TabScrollButtonProps,{className:(0,clsx.Z)(classes.scrollButtons,TabScrollButtonProps.className)})):null,conditionalElements})();return(0,jsx_runtime.jsxs)(TabsRoot,(0,esm_extends.Z)({className:(0,clsx.Z)(classes.root,className),ownerState,ref,as:component},other,{children:[conditionalElements.scrollButtonStart,conditionalElements.scrollbarSizeListener,(0,jsx_runtime.jsxs)(TabsScroller,{className:classes.scroller,ownerState,style:{overflow:scrollerStyle.overflow,[vertical?"margin"+(isRtl?"Left":"Right"):"marginBottom"]:visibleScrollbar?void 0:-scrollerStyle.scrollbarWidth},ref:tabsRef,children:[(0,jsx_runtime.jsx)(FlexContainer,{"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-orientation":"vertical"===orientation?"vertical":null,className:classes.flexContainer,ownerState,onKeyDown:event=>{const list=tabListRef.current,currentFocus=(0,ownerDocument.Z)(list).activeElement;if("tab"!==currentFocus.getAttribute("role"))return;let previousItemKey="horizontal"===orientation?"ArrowLeft":"ArrowUp",nextItemKey="horizontal"===orientation?"ArrowRight":"ArrowDown";switch("horizontal"===orientation&&isRtl&&(previousItemKey="ArrowRight",nextItemKey="ArrowLeft"),event.key){case previousItemKey:event.preventDefault(),moveFocus(list,currentFocus,previousItem);break;case nextItemKey:event.preventDefault(),moveFocus(list,currentFocus,nextItem);break;case"Home":event.preventDefault(),moveFocus(list,null,nextItem);break;case"End":event.preventDefault(),moveFocus(list,null,previousItem)}},ref:tabListRef,role:"tablist",children}),mounted&&indicator]}),conditionalElements.scrollButtonEnd]}))}))}}]);