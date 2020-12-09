import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFire = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-fire_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="time-clock-fire_svg__a" cx={12} cy={16.501} r={7} />,
    <path
      className="time-clock-fire_svg__a"
      d="M18.55 14.027A5 5 0 0021.057 9.6a7.052 7.052 0 00-2.1-4.9 2.422 2.422 0 01-2.8 2.1 5.312 5.312 0 01-1.4-6.3c-4.375 0-7.175 2.581-7.7 6.3a2.574 2.574 0 01-2.8-2.1C1.16 7.334 1 12.662 5.251 14.637"
    />,
    <path className="time-clock-fire_svg__a" d="M15.5 16.501H12v-4.5" />
  );

export default SvgTimeClockFire;
