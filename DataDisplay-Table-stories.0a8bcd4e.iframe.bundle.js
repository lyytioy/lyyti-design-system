"use strict";(self.webpackChunk_lyyti_design_system=self.webpackChunk_lyyti_design_system||[]).push([[9117],{"./stories/DataDisplay/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_src_components_Table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Table.tsx"),_storybook_excludedParams__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/excludedParams.ts"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Data Display/Table",component:_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{docs:{description:{component:"Use this component to present data in a clean and simple way"}},controls:{exclude:(0,_storybook_excludedParams__WEBPACK_IMPORTED_MODULE_3__.u)(["height","color"])}},argTypes:{stickyHeader:{description:"If `true`, header row will stick to the top of container",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},size:{description:"Controls size of table",control:{type:"radio"},options:["small","medium"],table:{defaultValue:{summary:"medium"}}},height:{description:"Sets height of table container",control:{type:"text"},table:{defaultValue:{summary:"100%"}}},color:{description:"Sets color of the table",control:{type:"text"},table:{defaultValue:{summary:"balticSea.50"}}}},args:{stickyHeader:!1,size:"medium",height:"250px",color:"balticSea.50"}};var rows=[{id:"0",firstname:"John",lastname:"Brown",email:"john.brown@example.com"},{id:"1",firstname:"Roger",lastname:"Smith",email:"roger.smith@example.com"},{id:"2",firstname:"Alice",lastname:"Tyler",email:"alice.tyler@example.com"},{id:"3",firstname:"Colin",lastname:"Robinson",email:"colin.robinson@example.com"},{id:"4",firstname:"Melisa",lastname:"Taylor",email:"melisa.taylor@example.com"}],Template=function Template(args){return __jsx(_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.Z,args,__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.ss,null,__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.SC,null,__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.pj,null,"First name"),__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.pj,null,"Last name"),__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.pj,null,"Email"))),__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.RM,null,rows.map((function(row){return __jsx(_src__WEBPACK_IMPORTED_MODULE_2__.SC,{key:row.id},__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.pj,null,row.firstname),__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.pj,null,row.lastname),__jsx(_src__WEBPACK_IMPORTED_MODULE_2__.pj,null,row.email))}))))};Template.displayName="Template";var Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Table {...args}>\n    <TableHead>\n      <TableRow>\n        <TableCell>First name</TableCell>\n        <TableCell>Last name</TableCell>\n        <TableCell>Email</TableCell>\n      </TableRow>\n    </TableHead>\n    <TableBody>\n      {rows.map(row => <TableRow key={row.id}>\n          <TableCell>{row.firstname}</TableCell>\n          <TableCell>{row.lastname}</TableCell>\n          <TableCell>{row.email}</TableCell>\n        </TableRow>)}\n    </TableBody>\n  </Table>",...Default.parameters?.docs?.source}}}}}]);