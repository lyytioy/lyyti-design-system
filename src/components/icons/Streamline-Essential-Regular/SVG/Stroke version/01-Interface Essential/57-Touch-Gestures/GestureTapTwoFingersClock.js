import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapTwoFingersClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-two-fingers-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M8.249 20.248h-1.5M3.749 23.248V19.5a3.75 3.75 0 017.5 0v3.75M15.749 17.248h-1.5"
    />,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M11.249 23.248V16.5a3.75 3.75 0 117.5 0v6.75M7.5 11.248A6.75 6.75 0 00.749 18M11.249 6.161a8.344 8.344 0 00-2.583 2.087"
    />,
    <circle
      className="gesture-tap-two-fingers-clock_svg__a"
      cx={18.749}
      cy={5.248}
      r={4.5}
    />,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M18.749 5.248v-1.5M21.749 18.192a7.891 7.891 0 001.151-6.944"
    />
  );

export default SvgGestureTapTwoFingersClock;
