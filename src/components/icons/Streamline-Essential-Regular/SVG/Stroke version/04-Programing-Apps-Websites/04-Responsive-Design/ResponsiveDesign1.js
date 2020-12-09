import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesign1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-1_svg__a"
      d="M15.75 14.25l.75 4.5M15 18.75h3.75M15.75 11.25h7.5M15.75 14.25h6a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5"
    />,
    <rect
      className="responsive-design-1_svg__a"
      x={0.75}
      y={11.25}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="responsive-design-1_svg__a"
      d="M.75 20.25h7.5M3.75 8.25v-1.5a1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5M11.25 14.25h1.5M3.75 8.25h9"
    />
  );

export default SvgResponsiveDesign1;
