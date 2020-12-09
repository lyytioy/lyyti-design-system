import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="alarm-clock_svg__a" cx={12} cy={13.002} r={9.5} />,
    <path
      className="alarm-clock_svg__a"
      d="M6.653 20.849L4 23.501M17.345 20.847L20 23.501M8.5 13.502h4v-6M7.832 2.292a3.993 3.993 0 10-5.939 5.22M16.168 2.292a3.993 3.993 0 115.939 5.22"
    />
  );

export default SvgAlarmClock;
