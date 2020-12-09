import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-up_svg__a"
      cx={12}
      cy={4.498}
      r={3.75}
    />,
    <path
      className="cursor-move-target-up_svg__a"
      d="M12 4.873a.375.375 0 11.375-.375.375.375 0 01-.375.375M9.75 13.498l2.25-2.25 2.25 2.25M12 18.748v-7.5M5.249 4.705a10.5 10.5 0 1013.5 0"
    />
  );

export default SvgCursorMoveTargetUp;
