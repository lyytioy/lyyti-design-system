import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusCameraAuto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-camera-auto_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus-camera-auto_svg__a"
      d="M21.5 6H18a1 1 0 01-.806-.408C15.905 3.834 15.431 3 14.5 3h-5c-.931 0-1.4.834-2.7 2.592A1 1 0 016 6H2.5C1 6 .5 6.679.5 7.723v11.388C.5 20.154 1 21 2.556 21h18.888C23 21 23.5 20.154 23.5 19.111V7.723C23.5 6.679 23 6 21.5 6z"
    />,
    <path
      className="focus-camera-auto_svg__a"
      d="M10.5 16v-4.5a1.5 1.5 0 013 0V16M10.5 13h3"
    />,
    <circle className="focus-camera-auto_svg__a" cx={12} cy={13} r={6} />
  );

export default SvgFocusCameraAuto;
