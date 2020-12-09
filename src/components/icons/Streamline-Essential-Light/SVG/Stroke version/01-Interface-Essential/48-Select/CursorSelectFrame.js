import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-frame_svg__a"
      d="M4 9V5a1 1 0 011-1h3.98M20 9V5a1 1 0 00-1-1h-3.98M4 15v4a1 1 0 001 1h3.98M20 15v4a1 1 0 01-1 1h-3.98"
    />
  );

export default SvgCursorSelectFrame;
