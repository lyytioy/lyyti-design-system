import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-up_svg__a"
      cx={12.001}
      cy={5.498}
      r={4}
    />,
    <circle
      className="cursor-move-target-up_svg__a"
      cx={12.001}
      cy={5.498}
      r={2}
    />,
    <path
      className="cursor-move-target-up_svg__a"
      d="M18 5.631a9.5 9.5 0 11-12 0M10.001 13.498l2-1.5 2 1.5M12.001 18.498v-6.5"
    />
  );

export default SvgCursorMoveTargetUp;
