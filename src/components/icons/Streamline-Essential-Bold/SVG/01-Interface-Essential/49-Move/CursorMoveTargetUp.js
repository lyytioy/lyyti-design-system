import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 13.373A9.5 9.5 0 1017.3 5.5a.251.251 0 00-.387.168 4.971 4.971 0 01-9.824 0A.251.251 0 006.7 5.5a9.478 9.478 0 00-4.2 7.873zm7 2.75a.5.5 0 01-.354-.853l2.5-2.5a.5.5 0 01.708 0l2.5 2.5a.5.5 0 01-.354.853h-1a.5.5 0 00-.5.5v2.75a1 1 0 01-2 0v-2.75a.5.5 0 00-.5-.5z" />,
    <path d="M12 8.623a3.75 3.75 0 10-3.75-3.75A3.755 3.755 0 0012 8.623zm0-6a2.25 2.25 0 11-2.25 2.25A2.253 2.253 0 0112 2.623z" />,
    <circle cx={12} cy={4.873} r={1} />
  );

export default SvgCursorMoveTargetUp;
