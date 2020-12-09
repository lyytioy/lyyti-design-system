import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExe1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exe-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="exe-1_svg__a"
      x={0.749}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="exe-1_svg__a"
      d="M7.5 18H6a1.5 1.5 0 01-1.5-1.5V12A1.5 1.5 0 016 10.5h1.5M4.499 15.004h3M19.5 18H18a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h1.5M16.499 15.004h3M10.499 10.504l3 7.5M13.499 10.504l-3 7.5"
    />
  );

export default SvgExe1;
