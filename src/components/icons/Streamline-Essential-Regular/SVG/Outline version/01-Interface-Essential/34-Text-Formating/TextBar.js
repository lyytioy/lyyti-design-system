import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.5 23.998a5.238 5.238 0 01-4.5-2.546 5.238 5.238 0 01-4.5 2.546.75.75 0 010-1.5 3.754 3.754 0 003.75-3.75v-3.75H9a.75.75 0 010-1.5h2.25v-8.25a3.754 3.754 0 00-3.75-3.75.75.75 0 010-1.5c1.865 0 3.559.978 4.5 2.546a5.238 5.238 0 014.5-2.546.75.75 0 010 1.5 3.754 3.754 0 00-3.75 3.75v8.25H15a.75.75 0 010 1.5h-2.25v3.75a3.754 3.754 0 003.75 3.75.75.75 0 010 1.5z" />
  );

export default SvgTextBar;
