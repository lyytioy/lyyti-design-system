import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="time-clock-hand_svg__a" cx={16.5} cy={6.75} r={6} />,
    <path
      className="time-clock-hand_svg__a"
      d="M16.5 5.016v2.062L18.422 9M1.5 14.25v9M1.5 21.75H18a3 3 0 00-3-3h-3.75a3 3 0 00-3-3H1.5M7.5 18.75h3.75"
    />
  );

export default SvgTimeClockHand;
