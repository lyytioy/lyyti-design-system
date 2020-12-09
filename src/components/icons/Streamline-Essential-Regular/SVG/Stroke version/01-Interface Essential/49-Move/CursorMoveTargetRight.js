import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-right_svg__a"
      cx={19.5}
      cy={11.998}
      r={3.75}
    />,
    <path
      className="cursor-move-target-right_svg__a"
      d="M19.5 11.623a.375.375 0 11-.375.375.375.375 0 01.375-.375M10.5 9.748l2.25 2.25-2.25 2.25M5.25 11.998h7.5M19.293 5.247a10.5 10.5 0 100 13.5"
    />
  );

export default SvgCursorMoveTargetRight;
