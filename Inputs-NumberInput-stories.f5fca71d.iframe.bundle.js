"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[8975],{"./stories/Inputs/NumberInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,HelperText:()=>HelperText,Large:()=>Large,StartAdornment:()=>StartAdornment,White:()=>White,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NumberInput_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),excludedParams=__webpack_require__("./.storybook/excludedParams.ts"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),useNumberInput=__webpack_require__("./node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js"),icons=__webpack_require__("./src/icons/index.ts"),_excluded=["fullWidth","size","startAdornment","color","error","helperText","sx","InputLabelProps"],__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var NumberInput=function NumberInput(_ref,ref){var _props$InputProps,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0===_ref$fullWidth||_ref$fullWidth,_ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,_ref$color=(_ref.startAdornment,_ref.color),color=void 0===_ref$color?"primary":_ref$color,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,_ref$helperText=_ref.helperText,helperText=void 0===_ref$helperText?"":_ref$helperText,_ref$sx=_ref.sx,sx=void 0===_ref$sx?{}:_ref$sx,_ref$InputLabelProps=_ref.InputLabelProps,InputLabelProps=void 0===_ref$InputLabelProps?{}:_ref$InputLabelProps,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_useNumberInput=(0,useNumberInput.M)(props),getRootProps=_useNumberInput.getRootProps,getInputProps=_useNumberInput.getInputProps,getIncrementButtonProps=_useNumberInput.getIncrementButtonProps,getDecrementButtonProps=_useNumberInput.getDecrementButtonProps,muiTextField=(0,react.useRef)(null),overrideColor="white"===color?"common.white":void 0;return __jsx(TextField.Z,(0,esm_extends.Z)({},getRootProps(),{variant:"outlined",fullWidth,size,error,helperText,onClick:function onClick(){var _muiTextField$current;return null===(_muiTextField$current=muiTextField.current)||void 0===_muiTextField$current?void 0:_muiTextField$current.focus()},inputRef:muiTextField,InputProps:_objectSpread(_objectSpread(_objectSpread({},null!==(_props$InputProps=props.InputProps)&&void 0!==_props$InputProps?_props$InputProps:{}),{},{notched:!1},getInputProps()),{},{endAdornment:__jsx(Box.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"}},__jsx(Box.Z,(0,esm_extends.Z)({component:"button"},getIncrementButtonProps(),{sx:{bgcolor:"white"===color?void 0:"grey.100",background:"white"===color?"none":void 0,display:"flex",m:"4px",mb:0,p:"1px",cursor:"pointer",border:0,"&:hover":{bgcolor:"grey.200"}}}),__jsx(icons.Kh,{sx:{fontSize:"12px",bgcolor:null}})),__jsx(Box.Z,(0,esm_extends.Z)({component:"button"},getDecrementButtonProps(),{sx:{bgcolor:"white"===color?void 0:"grey.100",background:"white"===color?"none":void 0,display:"flex",m:"4px",mt:0,p:"1px",cursor:"pointer",border:0,"&:hover":{bgcolor:"grey.200"}}}),__jsx(icons._M,{sx:{fontSize:"12px",bgcolor:null}})))}),InputLabelProps:_objectSpread({shrink:!0},InputLabelProps),sx:_objectSpread({"& label":{color:null!=overrideColor?overrideColor:"grey.400",letterSpacing:"0.15px",lineHeight:"26px"},"& .MuiFormLabel-root.Mui-disabled":{color:null!=overrideColor?overrideColor:"grey.400"},"& .MuiInputLabel-shrink":{transform:"translate(0, 0) scale(1)"},"& .MuiInputLabel-formControl":{position:"relative"},"& .MuiInputBase-root.Mui-disabled":{backgroundColor:null!=overrideColor?overrideColor:"action.selected"},"& .MuiFormHelperText-root":{letterSpacing:"0.15px"},"& .MuiFormHelperText-contained":{marginLeft:0},"& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{borderColor:overrideColor},"& .MuiSvgIcon-root, .MuiSelect-icon, .MuiInputBase-input, .MuiInputBase-input::placeholder, .MuiFormLabel-root.Mui-focused":{color:overrideColor}},sx),ref},props))};NumberInput.displayName="NumberInput";const components_NumberInput=(0,react.forwardRef)(NumberInput);var NumberInput_stories_jsx=react.createElement;const NumberInput_stories={title:"Components/Inputs/NumberInput",component:components_NumberInput,parameters:{docs:{description:{component:"NumberInput lets users enter and edit a number value without special characters."}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#045b56"}]},controls:{exclude:(0,excludedParams.u)(["color"])}},argTypes:{placeholder:{description:"The short hint displayed in the input before the user enters a value."},label:{description:"The label content."},startAdornment:{description:"This can be used to add a prefix or an action to the start of an input."},endAdornment:{description:"This can be used to add a suffix or an action to the end of an input."}},args:{label:"Label"}};var Template=function Template(args){return NumberInput_stories_jsx(components_NumberInput,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={placeholder:"Placeholder"};var Large=Template.bind({});Large.args={size:"medium"};var HelperText=Template.bind({});HelperText.args={helperText:"Helper text"};var Error=Template.bind({});Error.args={helperText:"Helper text",error:!0};var StartAdornment=Template.bind({});StartAdornment.args={helperText:"Helper text",startAdornment:"Kg"};var Disabled=Template.bind({});Disabled.args={disabled:!0};var White=Template.bind({});White.args={color:"white"},White.parameters={backgrounds:{default:"dark"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...Default.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...Large.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...HelperText.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...Error.parameters?.docs?.source}}},StartAdornment.parameters={...StartAdornment.parameters,docs:{...StartAdornment.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...StartAdornment.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...Disabled.parameters?.docs?.source}}},White.parameters={...White.parameters,docs:{...White.parameters?.docs,source:{originalSource:"args => <NumberInput {...args} />",...White.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Large","HelperText","Error","StartAdornment","Disabled","White"]}}]);