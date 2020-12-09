import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerTapClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-tap-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-tap-clock_svg__a"
      d="M17.378 14.486a9.2 9.2 0 00.845-1.736"
    />,
    <circle
      className="gesture-two-finger-tap-clock_svg__a"
      cx={18.75}
      cy={5.248}
      r={4.5}
    />,
    <path
      className="gesture-two-finger-tap-clock_svg__a"
      d="M18.75 5.248v-1.5M12 1.065A8.9 8.9 0 009.75.748 8.979 8.979 0 002.44 14.97M14.249 23.248l.816-2.856a3 3 0 00-1.543-3.507l-.773-.387v-3.75a1.5 1.5 0 00-3 0v-1.5a1.5 1.5 0 00-3 0V18l-1.174-.587a1.638 1.638 0 00-1.755 2.742l3.789 3.093M9.749 12.748v4.5"
    />
  );

export default SvgGestureTwoFingerTapClock;
