import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 23.249a2.252 2.252 0 01-2.25-2.25v-18A2.252 2.252 0 013 .749h18a2.252 2.252 0 012.25 2.25v18a2.252 2.252 0 01-2.25 2.25H3zm18-1.5a.75.75 0 00.75-.75v-8.25h-9v9H21zm-18.75-.75c0 .414.336.75.75.75h8.25v-9h-9v8.25zm19.5-9.75v-8.25a.75.75 0 00-.75-.75h-8.25v9h9zm-10.5 0v-9H3a.75.75 0 00-.75.75v8.25h9z" />
  );

export default SvgCellBorderFull;
