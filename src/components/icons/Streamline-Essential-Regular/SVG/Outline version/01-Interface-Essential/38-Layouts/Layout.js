import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 23.247a2.252 2.252 0 01-2.25-2.25v-18A2.252 2.252 0 013 .747h18a2.252 2.252 0 012.25 2.25v18a2.252 2.252 0 01-2.25 2.25H3zm18-1.5a.75.75 0 00.75-.75v-8.25H8.25v9H21zM3 2.247a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h3.75v-19.5H3zm18.75 9v-8.25a.75.75 0 00-.75-.75H8.25v9h13.5z" />
  );

export default SvgLayout;
