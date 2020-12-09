import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="lock-circle-1_svg__a"
      x={6.75}
      y={9.75}
      width={10.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-circle-1_svg__a"
      d="M12 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M8.25 9.75V7.5a3.75 3.75 0 017.5 0v2.25"
    />,
    <circle className="lock-circle-1_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgLockCircle1;
