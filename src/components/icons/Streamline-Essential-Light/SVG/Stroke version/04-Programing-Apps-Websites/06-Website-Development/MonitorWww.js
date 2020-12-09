import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorWww = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-www_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="monitor-www_svg__a" d="M5 22h14M11.5 20v2M.5 16h23" />,
    <rect
      className="monitor-www_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-www_svg__a"
      d="M4.5 7.5v1.345a6.01 6.01 0 00.429 2.228L5.5 12.5l1-3.5 1 3.5.571-1.427A5.99 5.99 0 008.5 8.845V7.5M10.5 7.5v1.345a6.01 6.01 0 00.429 2.228L11.5 12.5l1-3.5 1 3.5.571-1.427a5.99 5.99 0 00.429-2.228V7.5M16.5 7.5v1.345a6.01 6.01 0 00.429 2.228L17.5 12.5l1-3.5 1 3.5.571-1.427a5.99 5.99 0 00.429-2.228V7.5"
    />
  );

export default SvgMonitorWww;
