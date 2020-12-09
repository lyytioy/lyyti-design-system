import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-up_svg__a"
      d="M11.48 1.094l-3.44 9.249a.537.537 0 00.766.63L12 9.479l3.194 1.494a.537.537 0 00.766-.63l-3.44-9.249a.563.563 0 00-1.04 0zM17.249 5.28a9.75 9.75 0 11-10.5 0"
    />
  );

export default SvgCursorMoveUp;
