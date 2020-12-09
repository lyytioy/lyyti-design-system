import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="time-clock-hand_svg__a" cx={16.501} cy={7.501} r={7} />,
    <path
      className="time-clock-hand_svg__a"
      d="M16.501 3.5v4.001L19.5 7.5M.5 23.5v-10M.5 15.5h7a3 3 0 013 3h6a3 3 0 013 3H.5zM10.5 18.5h-3"
    />
  );

export default SvgTimeClockHand;
