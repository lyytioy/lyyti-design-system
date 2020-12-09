import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="monitor-antenna_svg__a"
      x={12.75}
      y={12.75}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-antenna_svg__a"
      d="M18 20.25v3M15.75 23.25h4.5M8.614 7.114A4.5 4.5 0 012.25.75zM5.432 3.932l1.5-1.5"
    />,
    <path
      className="monitor-antenna_svg__a"
      d="M.75 10.5l1.682-3.214L4.5 10.5M12 3.75h4.5a1.5 1.5 0 011.5 1.5v4.5M9 18.75H4.5a1.5 1.5 0 01-1.5-1.5V13.5"
    />
  );

export default SvgMonitorAntenna;
