import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5zM17.25 13.249a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h9a.75.75 0 00.75-.75zM10 6.5h4a1 1 0 001-1V3A3.007 3.007 0 0011.192.107 3.045 3.045 0 009 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.75.75.75.75 0 01-.75-.751z" />,
    <path d="M19.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H19a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H5a.5.5 0 01-.5-.5V5.5A.5.5 0 015 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 007.25 3H4.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z" />,
    <path d="M7.5 16a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5z" />
  );

export default SvgTaskChecklist;
