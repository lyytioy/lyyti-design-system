import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellSleep = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-sleep_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-sleep_svg__a"
      d="M18.5 19.5V15a6.5 6.5 0 00-4-6 2.5 2.5 0 00-5 0 6.5 6.5 0 00-4 6v4.5a2 2 0 01-2 2h17a2 2 0 01-2-2zM14 21.5a2 2 0 11-4 0M1.5 4.501h3l-3 3h3M18.5.501h5l-5 5h5"
    />
  );

export default SvgAlarmBellSleep;
