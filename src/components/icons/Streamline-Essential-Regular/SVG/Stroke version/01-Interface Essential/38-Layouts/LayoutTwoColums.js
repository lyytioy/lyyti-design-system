import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutTwoColums = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-two-colums_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-two-colums_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path className="layout-two-colums_svg__a" d="M12 1.497v21" />
  );

export default SvgLayoutTwoColums;
