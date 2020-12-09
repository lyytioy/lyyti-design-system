import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-monitor_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-monitor_svg__cls-1"
      d="M12 18v4M4.5 22h15M17.5 15.5L14 14v-2s.866-.349.866-2.5c.684 0 .944-2-.007-2a2.627 2.627 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.429-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.151.945 2.5.945 2.5v2l-3.5 1.5"
    />
  );

export default SvgSingleManMonitor;
