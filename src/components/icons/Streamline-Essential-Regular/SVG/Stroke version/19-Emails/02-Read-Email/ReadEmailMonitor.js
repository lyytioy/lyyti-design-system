import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="read-email-monitor_svg__a"
      d="M15 22.5H9l.75-4.5h4.5l.75 4.5zM6.75 22.5h10.5"
    />,
    <rect
      className="read-email-monitor_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <rect
      className="read-email-monitor_svg__a"
      x={6.75}
      y={6}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="read-email-monitor_svg__a"
      d="M7.13 6.503L12 10.5l4.869-3.996"
    />
  );

export default SvgReadEmailMonitor;
