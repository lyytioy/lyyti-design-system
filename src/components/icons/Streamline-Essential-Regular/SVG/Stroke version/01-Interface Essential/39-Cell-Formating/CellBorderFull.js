import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cell-border-full_svg__a"
      x={1.5}
      y={1.499}
      width={21}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path className="cell-border-full_svg__a" d="M12 1.499v21M1.5 11.999h21" />
  );

export default SvgCellBorderFull;
