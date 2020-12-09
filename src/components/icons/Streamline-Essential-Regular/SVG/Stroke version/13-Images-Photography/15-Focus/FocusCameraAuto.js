import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusCameraAuto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-camera-auto_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="focus-camera-auto_svg__a"
      d="M9.75 17.25V11.8A2.155 2.155 0 0112 9.75a2.155 2.155 0 012.25 2.05v5.45M9.75 14.25h4.5"
    />,
    <path
      className="focus-camera-auto_svg__a"
      d="M17.52 6l-1.477-2.309A1.5 1.5 0 0014.779 3H9.221a1.5 1.5 0 00-1.263.691L6.48 6H2.25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgFocusCameraAuto;
