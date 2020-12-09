import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCPlusPlus1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".c-plus-plus-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="c-plus-plus-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="c-plus-plus-1_svg__a"
      d="M11.5 13.504v4M13.5 15.504h-4M17.5 13.504v4M19.5 15.504h-4M7.5 19.5a4 4 0 010-8"
    />
  );

export default SvgCPlusPlus1;
