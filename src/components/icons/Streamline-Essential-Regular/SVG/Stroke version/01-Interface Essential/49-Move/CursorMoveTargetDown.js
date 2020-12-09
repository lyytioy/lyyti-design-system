import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveTargetDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-target-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-target-down_svg__a"
      cx={12}
      cy={19.498}
      r={3.75}
    />,
    <path
      className="cursor-move-target-down_svg__a"
      d="M12 19.123a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.25 10.498L12 12.748l-2.25-2.25M12 5.248v7.5M18.75 19.29a10.5 10.5 0 10-13.5 0"
    />
  );

export default SvgCursorMoveTargetDown;
