import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-down_svg__a"
      d="M11.48 22.9l-3.44-9.25a.537.537 0 01.766-.63L12 14.516l3.194-1.494a.537.537 0 01.766.63L12.52 22.9a.564.564 0 01-1.04 0zM17.249 18.716a9.75 9.75 0 10-10.5 0"
    />
  );

export default SvgCursorMoveDown;
