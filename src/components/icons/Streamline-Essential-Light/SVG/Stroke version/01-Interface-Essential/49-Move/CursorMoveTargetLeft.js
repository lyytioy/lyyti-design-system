import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-left_svg__a"
      cx={5.5}
      cy={11.998}
      r={4}
    />,
    <circle
      className="cursor-move-target-left_svg__a"
      cx={5.5}
      cy={11.998}
      r={2}
    />,
    <path
      className="cursor-move-target-left_svg__a"
      d="M5.633 6a9.5 9.5 0 110 12M13.5 13.998l-1.5-2 1.5-2M18.5 11.998H12"
    />
  );

export default SvgCursorMoveTargetLeft;
