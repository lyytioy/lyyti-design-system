import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-lock_svg__a"
      d="M12 1.753A7.5 7.5 0 00.75 8.25M15.75 8.25a7.478 7.478 0 00-.624-3M8.25 23.25a7.563 7.563 0 001.5-.15M.75 12.75v3a7.5 7.5 0 004.5 6.876"
    />,
    <path
      className="touch-id-lock_svg__a"
      d="M12.75 12.75v-4.5A4.5 4.5 0 006 4.352M3.75 8.25v7.5a4.5 4.5 0 006 4.244"
    />,
    <path
      className="touch-id-lock_svg__a"
      d="M6.75 15.75a1.5 1.5 0 003 0v-7.5a1.5 1.5 0 00-3 0v3"
    />,
    <rect
      className="touch-id-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="touch-id-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgTouchIdLock;
