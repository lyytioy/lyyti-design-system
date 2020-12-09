import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardOption = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z" />,
    <path d="M13.5 11.247a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-4.5zM12 15.747a.75.75 0 01-.624-.334l-2.777-4.166H6a.75.75 0 010-1.5h3c.251 0 .485.125.624.334l2.777 4.166H18a.75.75 0 010 1.5h-6z" />
  );

export default SvgKeyboardOption;
