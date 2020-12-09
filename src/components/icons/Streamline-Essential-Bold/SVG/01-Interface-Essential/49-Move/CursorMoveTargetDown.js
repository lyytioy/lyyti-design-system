import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.7 18.5a.251.251 0 00.387-.167 4.971 4.971 0 019.824 0 .251.251 0 00.387.167 9.5 9.5 0 10-10.6 0zm3.8-10.627a.5.5 0 00.5-.5v-2.75a1 1 0 012 0v2.75a.5.5 0 00.5.5h1a.5.5 0 01.354.854l-2.5 2.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 01.354-.854z" />,
    <path d="M8.25 19.123a3.75 3.75 0 103.75-3.75 3.755 3.755 0 00-3.75 3.75zm1.5 0a2.25 2.25 0 112.25 2.25 2.253 2.253 0 01-2.25-2.25z" />,
    <circle cx={12} cy={19.123} r={1} />
  );

export default SvgCursorMoveTargetDown;
