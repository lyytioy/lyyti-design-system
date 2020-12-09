import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesign1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-1_svg__a"
      d="M5.579 4A1.469 1.469 0 017 3h15a1.546 1.546 0 011.5 1.588v11.824A1.546 1.546 0 0122 18H8.5M10 20h9M14.5 18v2M13.5 14h10"
    />,
    <path
      className="responsive-design-1_svg__a"
      d="M3.5 9V7a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1h-2M8.5 14h3"
    />,
    <rect
      className="responsive-design-1_svg__a"
      x={0.5}
      y={11}
      width={6}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design-1_svg__a"
      d="M.5 18h6M.5 13h6M3.499 8.001h8"
    />
  );

export default SvgResponsiveDesign1;
