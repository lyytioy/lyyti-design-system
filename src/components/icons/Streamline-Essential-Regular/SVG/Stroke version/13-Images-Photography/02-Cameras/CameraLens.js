import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraLens = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-lens_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-lens_svg__a"
      d="M17.25 23.25h-9V15a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75zM8.25 23.25h-4.5a3 3 0 01-3-3v-1.5a3 3 0 013-3h4.5zM20.25 23.25h-3v-7.5h3a3 3 0 013 3v1.5a3 3 0 01-3 3zM15.979 9.75H9.521a1.5 1.5 0 01-1.48-1.25l-1-6A1.5 1.5 0 018.521.75h8.458a1.5 1.5 0 011.48 1.75l-1 6a1.5 1.5 0 01-1.48 1.25z"
    />,
    <path
      className="camera-lens_svg__a"
      d="M9.75 9.75h6v4.5h-6zM11.25 3.75v3M14.25 3.75v3M4.5 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M11.25 18.75h3"
    />
  );

export default SvgCameraLens;
