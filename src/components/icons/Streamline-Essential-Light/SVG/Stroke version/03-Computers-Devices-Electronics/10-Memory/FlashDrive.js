import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlashDrive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flash-drive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flash-drive_svg__a"
      d="M15.5 5.5h-7v-4a1 1 0 011-1h5a1 1 0 011 1zM10.5 2.5v1M13.5 2.5v1M16.5 5.5a1 1 0 011 1v13a4.012 4.012 0 01-4 4h-3a4.012 4.012 0 01-4-4v-13a1 1 0 011-1zM8.5 7.5h7"
    />
  );

export default SvgFlashDrive;
