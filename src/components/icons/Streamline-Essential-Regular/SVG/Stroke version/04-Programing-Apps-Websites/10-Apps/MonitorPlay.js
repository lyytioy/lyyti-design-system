import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-play_svg__a"
      d="M15 23.253H9l.75-4.5h4.5l.75 4.5zM6.75 23.253h10.5"
    />,
    <rect
      className="monitor-play_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-play_svg__a"
      d="M8.25 12.929V6.578a.75.75 0 011.136-.643l5.292 3.175a.75.75 0 010 1.287l-5.292 3.175a.75.75 0 01-1.136-.643z"
    />
  );

export default SvgMonitorPlay;
