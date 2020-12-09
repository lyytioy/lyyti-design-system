import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapTwoFingers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-two-fingers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-two-fingers_svg__a"
      d="M8.249 17.248h-1.5M3.749 23.248V16.5a3.75 3.75 0 017.5 0v6.75M15.749 12.748h-1.5"
    />,
    <path
      className="gesture-tap-two-fingers_svg__a"
      d="M11.249 23.248V12a3.75 3.75 0 117.5 0v11.25M7.5 8.248A6.75 6.75 0 00.749 15"
    />,
    <path
      className="gesture-tap-two-fingers_svg__a"
      d="M21.749 15.192a8.158 8.158 0 001.5-4.694 8.229 8.229 0 00-14.583-5.25"
    />
  );

export default SvgGestureTapTwoFingers;
