import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock7 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-7_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="lock-7_svg__a"
      x={0.75}
      y={17.25}
      width={18}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-7_svg__a"
      d="M23.25 20.25a1.5 1.5 0 01-1.5 1.5h-3v-3h3a1.5 1.5 0 011.5 1.5zM3.75 14.25v-7.5a6 6 0 0112 0v7.5"
    />
  );

export default SvgLock7;
