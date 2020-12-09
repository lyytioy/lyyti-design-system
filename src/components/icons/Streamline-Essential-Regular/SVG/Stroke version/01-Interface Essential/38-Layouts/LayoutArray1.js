import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutArray1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-array-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-array-1_svg__a"
      x={6.75}
      y={0.747}
      width={10.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-array-1_svg__a"
      x={0.75}
      y={3.747}
      width={3}
      height={16.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="layout-array-1_svg__a"
      x={20.25}
      y={3.747}
      width={3}
      height={16.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgLayoutArray1;
