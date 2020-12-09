import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-down_svg__a"
      d="M7.494 18.79a9 9 0 119.018 0M15.563 13.047a.5.5 0 01.716.633l-3.826 8.52a.5.5 0 01-.911 0l-3.878-8.526a.5.5 0 01.712-.636L12 15.212z"
    />
  );

export default SvgCursorMoveDown;
