import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="focus-frame_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={19.5}
      rx={3}
      ry={3}
    />,
    <path
      className="focus-frame_svg__a"
      d="M9.75 6.75h-3a1.5 1.5 0 00-1.5 1.5v3M18.75 12.75v3a1.5 1.5 0 01-1.5 1.5h-3"
    />
  );

export default SvgFocusFrame;
