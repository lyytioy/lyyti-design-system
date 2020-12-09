import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutColumn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-column_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-column_svg__a"
      x={0.75}
      y={0.747}
      width={4.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-column_svg__a"
      x={9.751}
      y={0.747}
      width={4.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-column_svg__a"
      x={18.75}
      y={0.747}
      width={4.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgLayoutColumn;
