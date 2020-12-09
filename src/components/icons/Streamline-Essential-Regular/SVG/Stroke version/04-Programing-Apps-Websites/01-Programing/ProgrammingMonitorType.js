import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingMonitorType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-monitor-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="programming-monitor-type_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="programming-monitor-type_svg__a"
      d="M9.75 12.75h4.5M.75 23.25s-.015-4.266 1.4-6.738A3 3 0 014.753 15h2.632a.751.751 0 01.743.856L7.5 20.25c3.75-2.25 3.75 0 1.5 3M23.25 23.25s.015-4.266-1.4-6.738A3 3 0 0019.247 15h-2.632a.751.751 0 00-.743.856l.628 4.394c-3.75-2.25-3.75 0-1.5 3M12 12.75v-3"
    />
  );

export default SvgProgrammingMonitorType;
