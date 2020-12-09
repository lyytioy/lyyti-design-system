import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-1_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="layout-1_svg__a" d="M.5 6.497h22M7.5 6.539v15.958" />
  );

export default SvgLayout1;
