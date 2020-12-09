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
      d="M.75 21.75h9.75M13.5 21.75h9.75M12 17.25v3M14.25.75H6a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h7.5M12 11.25v3M9.75 14.25h4.5M4.5 8.25h8.25"
    />,
    <circle className="monitor-lock_svg__a" cx={12} cy={21.75} r={1.5} />,
    <rect
      className="monitor-lock_svg__a"
      x={15.75}
      y={3.75}
      width={7.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-lock_svg__a"
      d="M19.5 6.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 3.75V3a2.25 2.25 0 014.5 0v.75"
    />
  );

export default SvgMonitorLock;
