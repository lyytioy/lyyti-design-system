import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-clock_svg__a"
      d="M17.378 14.515a9.2 9.2 0 00.845-1.736"
    />,
    <circle
      className="gesture-tap-clock_svg__a"
      cx={18.75}
      cy={5.277}
      r={4.5}
    />,
    <path
      className="gesture-tap-clock_svg__a"
      d="M18.75 5.277v-1.5M12 1.093A8.94 8.94 0 009.75.777 8.978 8.978 0 002.44 15M11.25 12.748v1.5h-3v-1.5"
    />,
    <path
      className="gesture-tap-clock_svg__a"
      d="M5.25 23.248v-10.5a4.5 4.5 0 119 0v10.5"
    />
  );

export default SvgGestureTapClock;
