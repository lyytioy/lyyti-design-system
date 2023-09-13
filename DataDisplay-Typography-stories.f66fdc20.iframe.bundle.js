"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[5806],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx.Z)(classes.root,className)},other))}))},"./node_modules/@mui/material/utils/capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js").Z},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./stories/DataDisplay/Typography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NavigationLink:()=>NavigationLink,PStyledAsH1:()=>PStyledAsH1,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_PStyledAsH1$paramete,_PStyledAsH1$paramete2,_PStyledAsH1$paramete3,_NavigationLink$param,_NavigationLink$param2,_NavigationLink$param3,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_excludedParams__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/excludedParams.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Data Display/Typography",component:_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{controls:{exclude:(0,_storybook_excludedParams__WEBPACK_IMPORTED_MODULE_3__.u)(["color"])}},argTypes:{align:{description:"Set the text-align on the component.",table:{defaultValue:{summary:"inherit"}}},color:{description:"The color of the component. It supports those theme colors that make sense for this component.",table:{defaultValue:{summary:"initial"}}},component:{description:"The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the variantMapping prop.",control:{type:"text"}},display:{description:"Controls the display type.",table:{defaultValue:{summary:"initial"}}},noWrap:{description:"If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},paragraph:{description:"If true, the text will have a bottom margin.",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},variant:{description:"Applies the theme typography styles."}},args:{children:"Some text",noWrap:!1,paragraph:!1}};var Template=function Template(args){return __jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis turpis, bibendum et purus a, lacinia ornare nunc. In posuere sapien eu ultrices tristique. Etiam libero velit, egestas gravida diam at, maximus pulvinar felis. Praesent ut vestibulum velit. Duis sapien sapien, consequat ut luctus vitae, tincidunt quis purus. Pellentesque iaculis faucibus sapien vitae tincidunt. Praesent imperdiet libero et nisi ullamcorper convallis. Duis porta massa molestie tellus aliquet efficitur. In eu tristique turpis, eu convallis velit. Sed id lacus massa. Nullam sed mauris mattis, consequat odio eu, porttitor arcu. Praesent laoreet congue nisl, a hendrerit eros congue vel. Cras quis placerat lorem, ut iaculis quam. Phasellus sit amet ligula egestas, malesuada ante eu, bibendum mi. Phasellus porttitor lectus eget cursus rhoncus. Vivamus vitae odio a risus euismod rutrum sed id tortor."};var PStyledAsH1=Template.bind({});PStyledAsH1.args={variant:"h1",component:"p",color:"primary"};var NavigationLink=Template.bind({});NavigationLink.args={variant:"navigationLink",children:"Back to previous page"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Typography {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),PStyledAsH1.parameters=_objectSpread(_objectSpread({},PStyledAsH1.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PStyledAsH1$paramete=PStyledAsH1.parameters)||void 0===_PStyledAsH1$paramete?void 0:_PStyledAsH1$paramete.docs),{},{source:_objectSpread({originalSource:"args => <Typography {...args} />"},null===(_PStyledAsH1$paramete2=PStyledAsH1.parameters)||void 0===_PStyledAsH1$paramete2||null===(_PStyledAsH1$paramete3=_PStyledAsH1$paramete2.docs)||void 0===_PStyledAsH1$paramete3?void 0:_PStyledAsH1$paramete3.source)})}),NavigationLink.parameters=_objectSpread(_objectSpread({},NavigationLink.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NavigationLink$param=NavigationLink.parameters)||void 0===_NavigationLink$param?void 0:_NavigationLink$param.docs),{},{source:_objectSpread({originalSource:"args => <Typography {...args} />"},null===(_NavigationLink$param2=NavigationLink.parameters)||void 0===_NavigationLink$param2||null===(_NavigationLink$param3=_NavigationLink$param2.docs)||void 0===_NavigationLink$param3?void 0:_NavigationLink$param3.source)})})},"./src/components/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_excluded=["variant"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Typography=function Typography(_ref,ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"body1":_ref$variant,props=(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,(0,_home_runner_work_lyyti_design_system_lyyti_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({variant,ref},props))};Typography.displayName="Typography";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Typography)}}]);