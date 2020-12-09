import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-left_svg__a"
      cx={4.5}
      cy={11.998}
      r={3.75}
    />,
    <path
      className="cursor-move-target-left_svg__a"
      d="M4.5 11.623a.375.375 0 11-.375.377.375.375 0 01.375-.375M13.5 14.248l-2.25-2.25 2.25-2.25M18.75 11.998h-7.5M4.707 18.748a10.5 10.5 0 100-13.5"
    />
  );

export default SvgCursorMoveTargetLeft;
