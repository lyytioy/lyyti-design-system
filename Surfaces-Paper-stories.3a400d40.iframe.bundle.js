"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[7308,1046],{"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectDestructuringEmpty})},"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const styles_getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)};var useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other))}))},"./node_modules/@mui/material/Skeleton/Skeleton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton_Skeleton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");function getUnit(input){return String(input).match(/[\d.\-+]*\s*(.*)/)[1]||""}function toUnitless(length){return parseFloat(length)}var colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSkeletonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSkeleton",slot)}(0,generateUtilityClasses.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["animation","className","component","height","style","variant","width"];let _t,_t2,_t3,_t4,_=t=>t;const pulseKeyframe=(0,emotion_react_browser_esm.F4)(_t||(_t=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),waveKeyframe=(0,emotion_react_browser_esm.F4)(_t2||(_t2=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),SkeletonRoot=(0,styled.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!1!==ownerState.animation&&styles[ownerState.animation],ownerState.hasChildren&&styles.withChildren,ownerState.hasChildren&&!ownerState.width&&styles.fitContent,ownerState.hasChildren&&!ownerState.height&&styles.heightAuto]}})((({theme,ownerState})=>{const radiusUnit=getUnit(theme.shape.borderRadius)||"px",radiusValue=toUnitless(theme.shape.borderRadius);return(0,esm_extends.Z)({display:"block",backgroundColor:theme.vars?theme.vars.palette.Skeleton.bg:(0,colorManipulator.Fq)(theme.palette.text.primary,"light"===theme.palette.mode?.11:.13),height:"1.2em"},"text"===ownerState.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${radiusValue}${radiusUnit}/${Math.round(radiusValue/.6*10)/10}${radiusUnit}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===ownerState.variant&&{borderRadius:"50%"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},ownerState.hasChildren&&{"& > *":{visibility:"hidden"}},ownerState.hasChildren&&!ownerState.width&&{maxWidth:"fit-content"},ownerState.hasChildren&&!ownerState.height&&{height:"auto"})}),(({ownerState})=>"pulse"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t3||(_t3=_`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),pulseKeyframe)),(({ownerState,theme})=>"wave"===ownerState.animation&&(0,emotion_react_browser_esm.iv)(_t4||(_t4=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),waveKeyframe,(theme.vars||theme).palette.action.hover))),Skeleton_Skeleton=react.forwardRef((function Skeleton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSkeleton"}),{animation="pulse",className,component="span",height,style,variant="text",width}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{animation,component,variant,hasChildren:Boolean(other.children)}),classes=(ownerState=>{const{classes,variant,animation,hasChildren,width,height}=ownerState,slots={root:["root",variant,animation,hasChildren&&"withChildren",hasChildren&&!width&&"fitContent",hasChildren&&!height&&"heightAuto"]};return(0,composeClasses.Z)(slots,getSkeletonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(SkeletonRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(classes.root,className),ownerState},other,{style:(0,esm_extends.Z)({width,height},style)}))}))},"./stories/Feedback/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,Rect:()=>Rect,Text:()=>Text,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Text$parameters,_Text$parameters2,_Circle$parameters,_Circle$parameters2,_Rect$parameters,_Rect$parameters2,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Skeleton.tsx"),_storybook_excludedParams__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/excludedParams.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Data Display/Skeleton",component:_src_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{docs:{description:{component:"Fill this in from zeroheight"}},controls:{exclude:(0,_storybook_excludedParams__WEBPACK_IMPORTED_MODULE_3__.u)(["height","width"])}},argTypes:{animation:{options:[!1,"wave","pulse"],description:"The animation. If false the animation effect is disabled."},height:{control:{type:"number"},description:"Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card."},width:{control:{type:"number"},description:"Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own."},variant:{description:"The type of content that will be rendered."}}};var Template=function Template(args){return __jsx(_src_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Text=Template.bind({});Text.args={variant:"text",width:400,height:50};var Circle=Template.bind({});Circle.args={variant:"circular",width:200,height:200};var Rect=Template.bind({});Rect.args={variant:"rectangular",width:300,height:300},Text.parameters=_objectSpread(_objectSpread({},Text.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Text$parameters=Text.parameters)||void 0===_Text$parameters?void 0:_Text$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Skeleton {...args} />"},null===(_Text$parameters2=Text.parameters)||void 0===_Text$parameters2||null===(_Text$parameters2=_Text$parameters2.docs)||void 0===_Text$parameters2?void 0:_Text$parameters2.source)})}),Circle.parameters=_objectSpread(_objectSpread({},Circle.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Circle$parameters=Circle.parameters)||void 0===_Circle$parameters?void 0:_Circle$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Skeleton {...args} />"},null===(_Circle$parameters2=Circle.parameters)||void 0===_Circle$parameters2||null===(_Circle$parameters2=_Circle$parameters2.docs)||void 0===_Circle$parameters2?void 0:_Circle$parameters2.source)})}),Rect.parameters=_objectSpread(_objectSpread({},Rect.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Rect$parameters=Rect.parameters)||void 0===_Rect$parameters?void 0:_Rect$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Skeleton {...args} />"},null===(_Rect$parameters2=Rect.parameters)||void 0===_Rect$parameters2||null===(_Rect$parameters2=_Rect$parameters2.docs)||void 0===_Rect$parameters2?void 0:_Rect$parameters2.source)})})},"./stories/Surfaces/Paper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_Paper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Paper.tsx"),_Feedback_Skeleton_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Feedback/Skeleton.stories.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Surfaces/Paper",component:_src_components_Paper__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{elevation:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:1}},description:"Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive."},variant:{control:{type:"select"},options:["elevation","outlined"],table:{type:{summary:"elevation | outlined"},defaultValue:{summary:"elevation"}},description:"The variant to use."}}};var Template=function Template(_ref){var args=(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},((0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref),_ref));return __jsx(_src_components_Paper__WEBPACK_IMPORTED_MODULE_2__.Z,args,__jsx(_Feedback_Skeleton_stories__WEBPACK_IMPORTED_MODULE_3__.Rect,_Feedback_Skeleton_stories__WEBPACK_IMPORTED_MODULE_3__.Rect.args))};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"({\n  ...args\n}) => <Paper {...args}>\n    <Rect {...Rect.args} />\n  </Paper>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/Paper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Paper=function Paper(props){return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Z,props)};Paper.displayName="Paper",Paper.__docgenInfo={description:"",methods:[],displayName:"Paper"};const __WEBPACK_DEFAULT_EXPORT__=Paper;try{Paper.displayName="Paper",Paper.__docgenInfo={description:"",displayName:"Paper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Paper.tsx#Paper"]={docgenInfo:Paper.__docgenInfo,name:"Paper",path:"src/components/Paper.tsx#Paper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Skeleton/Skeleton.js"),_excluded=["animation","variant","sx"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Skeleton=function Skeleton(_ref){var _ref$animation=_ref.animation,animation=void 0===_ref$animation?"wave":_ref$animation,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"text":_ref$variant,_ref$sx=_ref.sx,sx=void 0===_ref$sx?{}:_ref$sx,props=(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({animation,variant,sx:_objectSpread({backgroundColor:"action.hover"},sx)},props))};Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{animation:{defaultValue:{value:"'wave'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Surfaces-Paper-stories.3a400d40.iframe.bundle.js.map