import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-right_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="layout-right_svg__a" d="M15.5.497v22" />
  );

export default SvgLayoutRight;
