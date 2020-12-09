import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="alarm-clock_svg__a" cx={12} cy={12.75} r={9} />,
    <path
      className="alarm-clock_svg__a"
      d="M6 23.25l1.386-2.771M12 12.75H8.609M12 7.5v5.25M1.5 3.75l3.75-3M18 23.25l-1.386-2.772M22.5 3.75l-3.75-3"
    />
  );

export default SvgAlarmClock;
