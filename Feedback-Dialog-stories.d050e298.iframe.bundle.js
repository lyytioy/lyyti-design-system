"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[1435],{"./node_modules/@mui/lab/LoadingButton/LoadingButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>LoadingButton_LoadingButton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useId=__webpack_require__("./node_modules/@mui/material/utils/useId.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLoadingButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiLoadingButton",slot)}const LoadingButton_loadingButtonClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],LoadingButtonRoot=(0,styled.ZP)(Button.Z,{shouldForwardProp:prop=>(prop=>"ownerState"!==prop&&"theme"!==prop&&"sx"!==prop&&"as"!==prop&&"classes"!==prop)(prop)||"classes"===prop,name:"MuiLoadingButton",slot:"Root",overridesResolver:(props,styles)=>[styles.root,styles.startIconLoadingStart&&{[`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]:styles.startIconLoadingStart},styles.endIconLoadingEnd&&{[`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]:styles.endIconLoadingEnd}]})((({ownerState,theme})=>(0,esm_extends.Z)({[`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]:{transition:theme.transitions.create(["opacity"],{duration:theme.transitions.duration.short}),opacity:0}},"center"===ownerState.loadingPosition&&{transition:theme.transitions.create(["background-color","box-shadow","border-color"],{duration:theme.transitions.duration.short}),[`&.${LoadingButton_loadingButtonClasses.loading}`]:{color:"transparent"}},"start"===ownerState.loadingPosition&&ownerState.fullWidth&&{[`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]:{transition:theme.transitions.create(["opacity"],{duration:theme.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===ownerState.loadingPosition&&ownerState.fullWidth&&{[`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]:{transition:theme.transitions.create(["opacity"],{duration:theme.transitions.duration.short}),opacity:0,marginLeft:-8}}))),LoadingButtonLoadingIndicator=(0,styled.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.loadingIndicator,styles[`loadingIndicator${(0,capitalize.Z)(ownerState.loadingPosition)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===ownerState.loadingPosition&&("outlined"===ownerState.variant||"contained"===ownerState.variant)&&{left:"small"===ownerState.size?10:14},"start"===ownerState.loadingPosition&&"text"===ownerState.variant&&{left:6},"center"===ownerState.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(theme.vars||theme).palette.action.disabled},"end"===ownerState.loadingPosition&&("outlined"===ownerState.variant||"contained"===ownerState.variant)&&{right:"small"===ownerState.size?10:14},"end"===ownerState.loadingPosition&&"text"===ownerState.variant&&{right:6},"start"===ownerState.loadingPosition&&ownerState.fullWidth&&{position:"relative",left:-10},"end"===ownerState.loadingPosition&&ownerState.fullWidth&&{position:"relative",right:-10}))),LoadingButton_LoadingButton=react.forwardRef((function LoadingButton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiLoadingButton"}),{children,disabled=!1,id:idProp,loading=!1,loadingIndicator:loadingIndicatorProp,loadingPosition="center",variant="text"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),id=(0,useId.Z)(idProp),loadingIndicator=null!=loadingIndicatorProp?loadingIndicatorProp:(0,jsx_runtime.jsx)(CircularProgress.Z,{"aria-labelledby":id,color:"inherit",size:16}),ownerState=(0,esm_extends.Z)({},props,{disabled,loading,loadingIndicator,loadingPosition,variant}),classes=(ownerState=>{const{loading,loadingPosition,classes}=ownerState,slots={root:["root",loading&&"loading"],startIcon:[loading&&`startIconLoading${(0,capitalize.Z)(loadingPosition)}`],endIcon:[loading&&`endIconLoading${(0,capitalize.Z)(loadingPosition)}`],loadingIndicator:["loadingIndicator",loading&&`loadingIndicator${(0,capitalize.Z)(loadingPosition)}`]},composedClasses=(0,composeClasses.Z)(slots,getLoadingButtonUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState),loadingButtonLoadingIndicator=loading?(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator,{className:classes.loadingIndicator,ownerState,children:loadingIndicator}):null;return(0,jsx_runtime.jsxs)(LoadingButtonRoot,(0,esm_extends.Z)({disabled:disabled||loading,id,ref},other,{variant,classes,ownerState,children:["end"===ownerState.loadingPosition?children:loadingButtonLoadingIndicator,"end"===ownerState.loadingPosition?loadingButtonLoadingIndicator:children]}))}))},"./node_modules/@mui/material/Fab/Fab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Fab_Fab});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getFabUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiFab",slot)}const Fab_fabClasses=(0,generateUtilityClasses.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],FabRoot=(0,styled.ZP)(ButtonBase.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`size${(0,capitalize.Z)(ownerState.size)}`],"inherit"===ownerState.color&&styles.colorInherit,styles[(0,capitalize.Z)(ownerState.size)],styles[ownerState.color]]}})((({theme,ownerState})=>{var _theme$palette$getCon,_theme$palette;return(0,esm_extends.Z)({},theme.typography.button,{minHeight:36,transition:theme.transitions.create(["background-color","box-shadow","border-color"],{duration:theme.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(theme.vars||theme).zIndex.fab,boxShadow:(theme.vars||theme).shadows[6],"&:active":{boxShadow:(theme.vars||theme).shadows[12]},color:theme.vars?theme.vars.palette.text.primary:null==(_theme$palette$getCon=(_theme$palette=theme.palette).getContrastText)?void 0:_theme$palette$getCon.call(_theme$palette,theme.palette.grey[300]),backgroundColor:(theme.vars||theme).palette.grey[300],"&:hover":{backgroundColor:(theme.vars||theme).palette.grey.A100,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette.grey[300]},textDecoration:"none"},[`&.${Fab_fabClasses.focusVisible}`]:{boxShadow:(theme.vars||theme).shadows[6]}},"small"===ownerState.size&&{width:40,height:40},"medium"===ownerState.size&&{width:48,height:48},"extended"===ownerState.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===ownerState.variant&&"small"===ownerState.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===ownerState.variant&&"medium"===ownerState.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===ownerState.color&&{color:"inherit"})}),(({theme,ownerState})=>(0,esm_extends.Z)({},"inherit"!==ownerState.color&&"default"!==ownerState.color&&null!=(theme.vars||theme).palette[ownerState.color]&&{color:(theme.vars||theme).palette[ownerState.color].contrastText,backgroundColor:(theme.vars||theme).palette[ownerState.color].main,"&:hover":{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette[ownerState.color].main}}})),(({theme})=>({[`&.${Fab_fabClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled,boxShadow:(theme.vars||theme).shadows[0],backgroundColor:(theme.vars||theme).palette.action.disabledBackground}}))),Fab_Fab=react.forwardRef((function Fab(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiFab"}),{children,className,color="default",component="button",disabled=!1,disableFocusRipple=!1,focusVisibleClassName,size="large",variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,disabled,disableFocusRipple,size,variant}),classes=(ownerState=>{const{color,variant,classes,size}=ownerState,slots={root:["root",variant,`size${(0,capitalize.Z)(size)}`,"inherit"===color?"colorInherit":color]},composedClasses=(0,composeClasses.Z)(slots,getFabUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState);return(0,jsx_runtime.jsx)(FabRoot,(0,esm_extends.Z)({className:(0,clsx.Z)(classes.root,className),component,disabled,focusRipple:!disableFocusRipple,focusVisibleClassName:(0,clsx.Z)(classes.focusVisible,focusVisibleClassName),ownerState,ref},other,{classes,children}))}))},"./stories/Feedback/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ImageDialog:()=>ImageDialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dialog.tsx"),_src_components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Feedback/Dialog",component:_src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{docs:{description:{component:"Use dialogs to inform users about a task, or to display critical information, or to require decisions."}}},argTypes:{children:{description:"The content of the component."},dialogActions:{description:"Use to add one or more elements as actions. Needs to be wrapped to one element, like a React Fragment.",control:!1},dialogTitle:{description:"Use to give a title to the Dialog.",control:!1},BackdropComponent:{table:{disable:!0}},BackdropProps:{table:{disable:!0}},closeAfterTransition:{table:{disable:!0}},components:{table:{disable:!0}},componentsProps:{table:{disable:!0}},container:{table:{disable:!0}},disableAutoFocus:{table:{disable:!0}},disableEnforceFocus:{table:{disable:!0}},disablePortal:{table:{disable:!0}},disableRestoreFocus:{table:{disable:!0}},disableScrollLock:{table:{disable:!0}},hideBackdrop:{table:{disable:!0}},keepMounted:{table:{disable:!0}}},args:{children:"This is the dialog content",dialogActions:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_2__.Z,null,"Cancel"),__jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_2__.Z,null,"Delete")),dialogTitle:"This is the dialog title",fullWidth:!0}};var Template=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),dialogOpen=_useState[0],setDialogOpen=_useState[1];return args.open=dialogOpen,args.onClose=function(){return setDialogOpen(!1)},__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"contained",color:"primary",onClick:function onClick(){return setDialogOpen(!0)}},"Open Dialog"),__jsx(_src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__.Z,args))},Default=Template.bind({});Default.args={};var ImageDialog=Template.bind({});ImageDialog.args={children:__jsx("img",{src:"/steve-basic.png",alt:"Steve"})},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [dialogOpen, setDialogOpen] = useState(false);\n  args.open = dialogOpen;\n  args.onClose = () => setDialogOpen(false);\n  return <>\n      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>\n        {\'Open Dialog\'}\n      </Button>\n      <Dialog {...args} />\n    </>;\n}',...Default.parameters?.docs?.source}}},ImageDialog.parameters={...ImageDialog.parameters,docs:{...ImageDialog.parameters?.docs,source:{originalSource:'args => {\n  const [dialogOpen, setDialogOpen] = useState(false);\n  args.open = dialogOpen;\n  args.onClose = () => setDialogOpen(false);\n  return <>\n      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>\n        {\'Open Dialog\'}\n      </Button>\n      <Dialog {...args} />\n    </>;\n}',...ImageDialog.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ImageDialog"]},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Fab/Fab.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),_mui_lab__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/lab/LoadingButton/LoadingButton.js"),_excluded=["children","variant","color","loading","disabled","sx"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Button=function Button(_ref,ref){var children=_ref.children,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"contained":_ref$variant,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$sx=_ref.sx,sx=void 0===_ref$sx?{}:_ref$sx,props=(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),theme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Z)();if("icon"===variant)return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ref,color,disabled,size:"large",sx:_objectSpread({"&.MuiIconButton-root:hover":{backgroundColor:(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.Fq)(theme.palette.white.main,.5)},"&.MuiIconButton-colorPrimary":{"&::before":{backgroundColor:"primary.dark"},"&:hover":{backgroundColor:"primaryStates.hover"},"&:active":{backgroundColor:"primaryStates.activeContained"}},"&.MuiIconButton-colorSecondary":{"&::before":{backgroundColor:"secondary.dark"},"&:hover":{backgroundColor:"secondaryStates.hover"},"&:active":{backgroundColor:"secondaryStates.activeContained"}},"&.MuiIconButton-colorError":{"&::before":{backgroundColor:"error.dark"},"&:hover":{backgroundColor:"errorStates.hover"},"&:active":{backgroundColor:"errorStates.activeContained"}}},sx)},props),children);if("fab"===variant)return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ref,color,disabled,size:"large",sx:_objectSpread({},sx)},props),children);var buttonProps=_objectSpread({ref,variant,disabled,sx:_objectSpread({"&.MuiButton-outlined":{backgroundColor:"white.main"},"&.MuiButton-outlinedPrimary":{"&:hover":{backgroundColor:"primaryStates.hover"}},"&.MuiButton-outlinedSecondary":{"&:hover":{backgroundColor:"secondaryStates.hover"}},"&.MuiButton-outlinedError":{"&:hover":{backgroundColor:"errorStates.hover"}},"&.MuiButton-outlinedInfo":{"&:hover":{backgroundColor:"infoStates.hover"}},"&.MuiButton-outlinedSuccess":{"&:hover":{backgroundColor:"successStates.hover"}},"&.MuiButton-outlinedWarning":{"&:hover":{backgroundColor:"warningStates.hover"}}},sx)},props);return loading?__jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_8__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({color,loading},buttonProps),children):__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({color},buttonProps),children)};Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Button)},"./src/components/Dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogActions/DialogActions.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button.tsx"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/icons/index.ts"),_excluded=["children","dialogActions","dialogTitle","fullScreen","onClose","open"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Dialog=function Dialog(_ref,ref){var children=_ref.children,dialogActions=_ref.dialogActions,dialogTitle=_ref.dialogTitle,_ref$fullScreen=_ref.fullScreen,fullScreen=void 0!==_ref$fullScreen&&_ref$fullScreen,onClose=_ref.onClose,open=_ref.open,props=(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ref,fullScreen,open,onClose},props),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{sx:{pr:8}},dialogTitle,__jsx(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"icon",onClick:onClose,sx:{borderRadius:"50%",position:"absolute",top:10,right:8},"data-testid":"mui-dialog-close-button"},__jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.x8,{fontSize:"small"}))),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,null,children),dialogActions&&__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,null,dialogActions))};Dialog.displayName="Dialog";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Dialog)}}]);