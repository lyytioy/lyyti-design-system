import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 17.25a.75.75 0 01-.75-.75v-3.75H7.5a.75.75 0 010-1.5h3.75V7.5a.75.75 0 011.5 0v3.75h3.75a.75.75 0 010 1.5h-3.75v3.75a.75.75 0 01-.75.75z" />,
    <path d="M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z" />
  );

export default SvgAddSquare;
