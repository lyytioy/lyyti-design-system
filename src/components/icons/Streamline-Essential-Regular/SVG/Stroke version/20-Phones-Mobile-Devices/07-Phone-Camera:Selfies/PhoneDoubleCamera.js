import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneDoubleCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-double-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-double-camera_svg__a"
      d="M2.25 23.25V3.75a3 3 0 013-3h13.5a3 3 0 013 3v19.5"
    />,
    <path
      className="phone-double-camera_svg__a"
      d="M2.25 6.75h7.5a3 3 0 003-3v-3M5.25 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M9 3.375"
    />,
    <path
      className="phone-double-camera_svg__a"
      d="M9 3.375a.375.375 0 10.375.375A.375.375 0 009 3.375"
    />
  );

export default SvgPhoneDoubleCamera;
