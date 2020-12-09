import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouseRemote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mouse-remote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mouse-remote_svg__a"
      d="M16.714 1.928a8.495 8.495 0 00-9.428 0M15.605 3.592a6.5 6.5 0 00-7.21 0M14.5 5.256a4.5 4.5 0 00-4.992 0"
    />,
    <rect
      className="mouse-remote_svg__a"
      x={6.5}
      y={7.5}
      width={11}
      height={16}
      rx={5}
      ry={5}
    />,
    <path
      className="mouse-remote_svg__a"
      d="M11 13.5a1 1 0 002 0v-2a1 1 0 00-2 0z"
    />
  );

export default SvgMouseRemote;
