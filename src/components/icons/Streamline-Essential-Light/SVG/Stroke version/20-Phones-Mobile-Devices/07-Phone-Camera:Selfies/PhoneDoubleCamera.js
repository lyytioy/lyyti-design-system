import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneDoubleCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-double-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-double-camera_svg__a"
      d="M21.5 23.5v-20a3 3 0 00-3-3h-13a3 3 0 00-3 3v20"
    />,
    <circle className="phone-double-camera_svg__a" cx={6} cy={4} r={1.5} />,
    <circle className="phone-double-camera_svg__a" cx={11} cy={4} r={1.5} />,
    <path
      className="phone-double-camera_svg__a"
      d="M5.5.5h9v4a3 3 0 01-3 3h-9v-4a3 3 0 013-3z"
    />
  );

export default SvgPhoneDoubleCamera;
