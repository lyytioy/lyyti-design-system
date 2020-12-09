import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-up_svg__a"
      d="M16.506 5.206a9 9 0 11-9.018 0M8.437 10.949a.5.5 0 01-.716-.633l3.826-8.523a.5.5 0 01.911 0l3.878 8.531a.5.5 0 01-.712.636L12 8.784z"
    />
  );

export default SvgCursorMoveUp;
