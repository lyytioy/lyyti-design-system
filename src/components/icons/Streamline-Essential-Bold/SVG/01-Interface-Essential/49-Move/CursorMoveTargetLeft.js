import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M13.375 21.5A9.5 9.5 0 105.5 6.7a.25.25 0 00.168.387 4.971 4.971 0 010 9.824.251.251 0 00-.168.389 9.478 9.478 0 007.875 4.2zm2.75-7a.5.5 0 01-.854.354l-2.5-2.5a.5.5 0 010-.707l2.5-2.5a.5.5 0 01.854.353v1a.5.5 0 00.5.5h2.75a1 1 0 010 2h-2.75a.5.5 0 00-.5.5z" />,
    <path d="M8.625 12a3.75 3.75 0 10-3.75 3.75A3.755 3.755 0 008.625 12zm-6 0a2.25 2.25 0 112.25 2.25A2.253 2.253 0 012.625 12z" />,
    <circle cx={4.875} cy={11.998} r={1} />
  );

export default SvgCursorMoveTargetLeft;
