import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchWrist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-wrist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-wrist_svg__a"
      d="M11.25 2.342a7.155 7.155 0 00-9 0M4.125 5.136a4.177 4.177 0 015.25 0M9.75 11.25h-6l.75-3H9l.75 3zM9 23.25H4.5l-.75-3h6l-.75 3z"
    />,
    <rect
      className="smart-watch-wrist_svg__a"
      x={2.25}
      y={11.25}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smart-watch-wrist_svg__a"
      d="M4.125 9.75H.75M4.125 21.75H.75M9.375 9.75h3.375l1.733-.867a6.007 6.007 0 012.683-.633h3.084a3 3 0 013 3v6a3 3 0 01-3 3h-3M9.375 21.75h3.375l1.733.867a6.007 6.007 0 002.683.633h.084a3 3 0 003-3"
    />
  );

export default SvgSmartWatchWrist;
