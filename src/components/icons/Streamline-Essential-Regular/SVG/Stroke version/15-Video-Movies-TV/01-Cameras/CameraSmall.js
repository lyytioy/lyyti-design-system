import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSmall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-small_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-small_svg__a"
      d="M8.25.75h-4.5a3 3 0 00-3 3v16.5a3 3 0 003 3H7.5a.75.75 0 00.75-.75v-9.75h2.25a.75.75 0 00.75-.75V3.75a3 3 0 00-3-3zM14.25 9.75h6a3 3 0 003-3v-1.5a3 3 0 00-3-3h-6z"
    />,
    <circle className="camera-small_svg__a" cx={6} cy={6} r={2.25} />,
    <path className="camera-small_svg__a" d="M5.25 18.75V12M14.25 6.75h-3" />
  );

export default SvgCameraSmall;
