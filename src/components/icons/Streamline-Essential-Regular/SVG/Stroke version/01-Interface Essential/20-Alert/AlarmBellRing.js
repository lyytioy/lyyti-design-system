import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-ring_svg__a"
      d="M6.814 4.266a6.35 6.35 0 00-2.47 2.471M5.975 1.5A6.5 6.5 0 001.5 5.976M4.5 18h15M19.5 18S18 16.694 18 12c0-3.75-2.562-7.068-6-7.068S6 8.25 6 12c0 4.719-1.5 6-1.5 6M13.5 21a1.5 1.5 0 01-3 0M12 4.932V3M17.186 4.266a6.456 6.456 0 011.408 1.062 6.391 6.391 0 011.062 1.409M18.025 1.5A6.5 6.5 0 0122.5 5.976"
    />
  );

export default SvgAlarmBellRing;
