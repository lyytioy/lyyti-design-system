import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-monitor_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="single-neutral-monitor_svg__cls-1"
      d="M12 18v4M4.5 22h15M17.5 15.72s-2.02-.893-3.432-1.415c-.926-.345-.794-1.907-.258-2.494a4.285 4.285 0 001.259-3.532A3 3 0 0012 5a3 3 0 00-3.069 3.279 4.285 4.285 0 001.259 3.532c.536.587.668 2.149-.258 2.494C8.52 14.827 6.5 15.72 6.5 15.72"
    />
  );

export default SvgSingleNeutralMonitor;
