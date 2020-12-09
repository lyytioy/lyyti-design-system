import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor_svg__a"
      d="M15.75 23.25h-7.5l.75-4.5h6l.75 4.5zM6 23.25h12M.75 15.75h22.5"
    />,
    <rect
      className="monitor_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />
  );

export default SvgMonitor;
