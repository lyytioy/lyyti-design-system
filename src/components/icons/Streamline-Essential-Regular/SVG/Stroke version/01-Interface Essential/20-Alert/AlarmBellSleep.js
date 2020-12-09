import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellSleep = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-sleep_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-sleep_svg__a"
      d="M20.25.75h3l-3 3.75h3M14.25 6.75H18l-3.75 4.5H18M7.748 21.75a2.087 2.087 0 004.005 0M9.75 3V.75"
    />,
    <path
      className="alarm-bell-sleep_svg__a"
      d="M12.965 3.75A7.424 7.424 0 009.75 3a7.5 7.5 0 00-7.5 7.5c0 5.888-1.5 8.25-1.5 8.25h18a10.017 10.017 0 01-1.25-3.663"
    />
  );

export default SvgAlarmBellSleep;
