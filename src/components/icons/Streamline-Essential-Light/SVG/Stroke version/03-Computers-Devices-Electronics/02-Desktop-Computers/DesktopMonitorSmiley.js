import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorSmiley = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-smiley_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-smiley_svg__a"
      d="M9 22.5a6.979 6.979 0 001.5-4M15 22.5a6.979 6.979 0 01-1.5-4M7.499 22.5h9M.5 15.5h23"
    />,
    <rect
      className="desktop-monitor-smiley_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="desktop-monitor-smiley_svg__a"
      d="M9.499 6.5v2M14.499 6.5v2M16 11a6.083 6.083 0 01-8 0"
    />
  );

export default SvgDesktopMonitorSmiley;
