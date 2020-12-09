import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-monitor_svg__a"
      d="M15 23.25H9l.75-4.5h4.5l.75 4.5zM6.75 23.25h10.5"
    />,
    <rect
      className="programming-monitor_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="programming-monitor_svg__a"
      d="M5.25 5.25v3M14.25 5.25v3M18.75 5.25v3M18.75 11.25v3M9.75 11.25v3M5.25 11.25v3"
    />,
    <circle
      className="programming-monitor_svg__a"
      cx={9.75}
      cy={6.75}
      r={1.5}
    />,
    <circle
      className="programming-monitor_svg__a"
      cx={14.25}
      cy={12.75}
      r={1.5}
    />
  );

export default SvgProgrammingMonitor;
