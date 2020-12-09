import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodLockHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-lock-head_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-lock-head_svg__a"
      d="M4.5 23.25v-6.265A9.365 9.365 0 0110.875.75c7.5 0 8.823 6.5 11.625 13.5h-3v3a3 3 0 01-3 3H15v3"
    />,
    <rect
      className="mood-lock-head_svg__a"
      x={7.5}
      y={9.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="mood-lock-head_svg__a"
      d="M12 5.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM12 13.154a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgMoodLockHead;
