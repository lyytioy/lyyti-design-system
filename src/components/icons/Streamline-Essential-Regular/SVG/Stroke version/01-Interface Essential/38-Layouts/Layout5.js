import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-5_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-5_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="layout-5_svg__a"
      d="M1.5 7.497h21M7.5 7.497v15M22.5 14.997h-15"
    />
  );

export default SvgLayout5;
