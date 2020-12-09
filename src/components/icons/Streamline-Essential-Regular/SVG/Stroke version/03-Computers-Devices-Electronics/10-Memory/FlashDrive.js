import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlashDrive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flash-drive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flash-drive_svg__a"
      d="M15.75 6.75h-7.5a1.5 1.5 0 00-1.5 1.5V18a5.25 5.25 0 0010.5 0V8.25a1.5 1.5 0 00-1.5-1.5zM8.25.75h7.5v6h-7.5zM11.25 3.75h1.5"
    />
  );

export default SvgFlashDrive;
