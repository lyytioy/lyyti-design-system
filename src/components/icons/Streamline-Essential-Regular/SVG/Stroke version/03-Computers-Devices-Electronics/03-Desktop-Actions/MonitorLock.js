import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-lock_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h5.25M.75 12.75h12M11.25 15.75h-7.5a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v6"
    />,
    <rect
      className="monitor-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgMonitorLock;
