import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-unlock-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="lock-unlock-4_svg__a"
      d="M.75 9.75V6a5.25 5.25 0 0110.5 0v3.75"
    />,
    <rect
      className="lock-unlock-4_svg__a"
      x={6.75}
      y={9.75}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="lock-unlock-4_svg__a" cx={15} cy={16.5} r={2.25} />
  );

export default SvgLockUnlock4;
