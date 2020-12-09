import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-clock_svg__a"
      d="M7.5 21.508v-9.5a3.5 3.5 0 017 0v9.5M17.174 9.975a6.511 6.511 0 01-.673 5.493M5.485 15.453A6.506 6.506 0 0111 5.508M16.498 3.008v1.5h1"
    />,
    <path
      className="gesture-tap-clock_svg__a"
      d="M12.5 12.008a1.5 1.5 0 00-3 0v1.5h3z"
    />,
    <circle className="gesture-tap-clock_svg__a" cx={16.498} cy={4.508} r={3} />
  );

export default SvgGestureTapClock;
