import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock8 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-8_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="lock-8_svg__a"
      x={3.5}
      y={9}
      width={17}
      height={14.5}
      rx={1}
      ry={1}
    />,
    <path
      className="lock-8_svg__a"
      d="M6.5 6a5.5 5.5 0 0111 0v3h-11zM15.5 16h4.996M20.5 13h-4a1 1 0 00-1 1v4a1 1 0 001 1h4"
    />
  );

export default SvgLock8;
