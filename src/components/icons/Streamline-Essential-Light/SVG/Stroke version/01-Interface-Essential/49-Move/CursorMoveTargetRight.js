import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-right_svg__a"
      cx={18.5}
      cy={11.998}
      r={4}
    />,
    <circle
      className="cursor-move-target-right_svg__a"
      cx={18.5}
      cy={11.998}
      r={2}
    />,
    <path
      className="cursor-move-target-right_svg__a"
      d="M18.367 18a9.5 9.5 0 110-12M10.5 9.998l1.5 2-1.5 2M5.5 11.998H12"
    />
  );

export default SvgCursorMoveTargetRight;
