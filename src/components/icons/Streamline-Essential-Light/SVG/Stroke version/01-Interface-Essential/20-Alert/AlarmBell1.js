import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBell1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-1_svg__a"
      d="M4 11.5a8 8 0 0116 0V18a1.5 1.5 0 001.5 1.5h-19A1.5 1.5 0 004 18zM12 .501v3M14.45 21.5a2.5 2.5 0 01-4.9 0M14.5 6.969A4.5 4.5 0 0117 11"
    />
  );

export default SvgAlarmBell1;
