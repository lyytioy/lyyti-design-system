import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-signal_svg__a"
      d="M23.5 19.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-12a1 1 0 011-1h21a1 1 0 011 1zM7 23.5h10M10.5 20.5v3M13.5 20.5v3M16.714 1.929a8.49 8.49 0 00-9.428 0M15 4.234a6.5 6.5 0 00-6 0"
    />
  );

export default SvgMonitorSignal;
