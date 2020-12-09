import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-monitor_svg__a"
      d="M5 22h14M11.5 20v2M.5 16h23M7.5 4H8a.5.5 0 01.5.5V8M7.499 8h2M11.5 10h.5a.5.5 0 01.5.5V14M11.499 14h2M19.5 10h.5a.5.5 0 01.5.5V14M19.499 14h2M3.5 10H4a.5.5 0 01.5.5V14M3.499 14h2M15.5 4h.5a.5.5 0 01.5.5V8M15.499 8h2M19.5 4h.5a.5.5 0 01.5.5V8M19.499 8h2M5.5 7a1 1 0 01-2 0V5a1 1 0 112 0zM9.5 13a1 1 0 11-2 0v-2a1 1 0 012 0zM17.5 13a1 1 0 11-2 0v-2a1 1 0 112 0zM13.5 7a1 1 0 11-2 0V5a1 1 0 012 0z"
    />,
    <rect
      className="programming-monitor_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgProgrammingMonitor;
