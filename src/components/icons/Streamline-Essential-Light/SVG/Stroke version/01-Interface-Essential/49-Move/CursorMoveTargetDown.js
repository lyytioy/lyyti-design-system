import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-down_svg__a"
      cx={12}
      cy={18.498}
      r={4}
    />,
    <circle
      className="cursor-move-target-down_svg__a"
      cx={12}
      cy={18.498}
      r={2}
    />,
    <path
      className="cursor-move-target-down_svg__a"
      d="M6 18.365a9.5 9.5 0 1112 0M14 10.498l-2 1.5-2-1.5M12 5.498v6.5"
    />
  );

export default SvgCursorMoveTargetDown;
