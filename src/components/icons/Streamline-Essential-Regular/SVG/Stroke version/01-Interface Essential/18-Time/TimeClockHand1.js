import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockHand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-hand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-hand-1_svg__a"
      d="M.75 14.25v9M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M7.684 12.816A8.25 8.25 0 1117.021 17"
    />,
    <path className="time-clock-hand-1_svg__a" d="M14.25 3.75v6H18" />
  );

export default SvgTimeClockHand1;
