import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDoorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".door-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="door-lock_svg__a"
      x={0.75}
      y={9.75}
      width={10.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="door-lock_svg__a"
      d="M6 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M2.25 9.75V7.5a3.75 3.75 0 017.5 0v2.25M9.75 21.75a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5h-10.5a1.5 1.5 0 00-1.5 1.5"
    />
  );

export default SvgDoorLock;
