import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cell-border-full_svg__a"
      x={1}
      y={0.999}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="cell-border-full_svg__a" d="M12 .999v22M23 11.999H1" />
  );

export default SvgCellBorderFull;
