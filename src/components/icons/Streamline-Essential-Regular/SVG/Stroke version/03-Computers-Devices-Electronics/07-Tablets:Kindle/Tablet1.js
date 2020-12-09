import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTablet1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tablet-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="tablet-1_svg__a" d="M3.744 18.75h16.5" />,
    <rect
      className="tablet-1_svg__a"
      x={3.747}
      y={0.75}
      width={16.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgTablet1;
