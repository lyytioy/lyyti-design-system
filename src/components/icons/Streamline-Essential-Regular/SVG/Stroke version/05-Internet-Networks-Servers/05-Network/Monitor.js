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
      d="M.75 21.75h9.75M13.5 21.75h9.75M12 17.25v3"
    />,
    <rect
      className="monitor_svg__a"
      x={4.5}
      y={0.75}
      width={15}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor_svg__a"
      d="M12 11.25v3M9.75 14.25h4.5M4.5 8.25h15"
    />,
    <circle className="monitor_svg__a" cx={12} cy={21.75} r={1.5} />
  );

export default SvgMonitor;
