import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design_svg__a"
      d="M16.5 23.25h-6l.75-4.5h4.5l.75 4.5zM8.25 23.25h10.5M11.25 5.25h10.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-1.5M3.75 15.75h19.5"
    />,
    <rect
      className="responsive-design_svg__a"
      x={0.75}
      y={0.75}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path className="responsive-design_svg__a" d="M.75 9.75h7.5" />
  );

export default SvgResponsiveDesign;
