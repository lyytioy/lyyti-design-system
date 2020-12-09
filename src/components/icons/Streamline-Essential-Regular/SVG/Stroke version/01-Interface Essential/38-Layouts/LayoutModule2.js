import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutModule2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-module-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-module-2_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path className="layout-module-2_svg__a" d="M12 1.497v21M1.5 11.997h21" />
  );

export default SvgLayoutModule2;
