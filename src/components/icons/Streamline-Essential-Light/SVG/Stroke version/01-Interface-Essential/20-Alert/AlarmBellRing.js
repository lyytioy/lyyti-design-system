import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-ring_svg__a"
      d="M18.5 19.5V15a6.5 6.5 0 00-4-6 2.5 2.5 0 00-5 0 6.5 6.5 0 00-4 6v4.5a2 2 0 01-2 2h17a2 2 0 01-2-2zM14 21.5a2 2 0 11-4 0M3.5 9A5.5 5.5 0 019 3.5M.5 9A8.5 8.5 0 019 .5M20.5 9A5.5 5.5 0 0015 3.5M23.5 9A8.5 8.5 0 0015 .5"
    />
  );

export default SvgAlarmBellRing;
