import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor_svg__a"
      d="M9 22.5a6.979 6.979 0 001.5-4M15 22.5a6.979 6.979 0 01-1.5-4M7.499 22.5h9M.5 15.5h23"
    />,
    <rect
      className="monitor_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />
  );

export default SvgMonitor;
