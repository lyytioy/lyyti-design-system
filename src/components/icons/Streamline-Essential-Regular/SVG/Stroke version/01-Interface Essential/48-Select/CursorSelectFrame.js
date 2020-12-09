import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-frame_svg__a"
      d="M23.255 7.5V2.247a1.5 1.5 0 00-1.5-1.5h-5.25M16.505 23.247h5.25a1.5 1.5 0 001.5-1.5V16.5M.755 16.5v5.25a1.5 1.5 0 001.5 1.5h5.25M7.505.747h-5.25a1.5 1.5 0 00-1.5 1.5V7.5"
    />
  );

export default SvgCursorSelectFrame;
