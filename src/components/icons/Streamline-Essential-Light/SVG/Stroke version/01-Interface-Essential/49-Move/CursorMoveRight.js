import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-right_svg__a"
      d="M18.792 16.5a9 9 0 110-9.018M13.049 8.435a.5.5 0 01.633-.716l8.523 3.826a.5.5 0 010 .911l-8.531 3.878a.5.5 0 01-.636-.712L15.214 12z"
    />
  );

export default SvgCursorMoveRight;
