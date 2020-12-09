import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="read-email-monitor_svg__a"
      x={6.5}
      y={5.5}
      width={11}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="read-email-monitor_svg__a"
      d="M6.5 7L11 9.3a2 2 0 002 0L17.5 7M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.5h9M.5 16.5h23"
    />,
    <rect
      className="read-email-monitor_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />
  );

export default SvgReadEmailMonitor;
