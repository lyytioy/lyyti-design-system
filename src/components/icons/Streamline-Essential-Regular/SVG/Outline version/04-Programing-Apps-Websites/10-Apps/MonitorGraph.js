import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.75 24.003a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 15.753v-12A3.754 3.754 0 013.75.003h16.5A3.754 3.754 0 0124 3.753v12a3.754 3.754 0 01-3.75 3.75h-5.115l.5 3h1.615a.75.75 0 010 1.5H6.75zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zm-10.365-21a2.252 2.252 0 00-2.25 2.25v12a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-12a2.252 2.252 0 00-2.25-2.25H3.75z" />,
    <path d="M5.25 15.003a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v5.25h3v-2.25a.75.75 0 01.75-.75h3.75v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H5.25zm12.75-1.5v-7.5h-3v7.5h3zm-4.5 0v-4.5h-3v4.5h3zm-4.5 0v-1.5H6v1.5h3z" />
  );

export default SvgMonitorGraph;
