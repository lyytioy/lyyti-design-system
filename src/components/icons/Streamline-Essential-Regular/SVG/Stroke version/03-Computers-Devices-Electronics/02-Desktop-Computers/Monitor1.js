import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="monitor-1_svg__a"
      x={0.752}
      y={1.5}
      width={22.5}
      height={15}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-1_svg__a"
      d="M6 22.5c0-1.657 2.687-3 6-3s6 1.343 6 3zM12.002 16.5v3"
    />
  );

export default SvgMonitor1;
