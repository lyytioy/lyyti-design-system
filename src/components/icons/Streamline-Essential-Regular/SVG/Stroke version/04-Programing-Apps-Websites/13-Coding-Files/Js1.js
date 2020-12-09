import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgJs1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".js-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="js-1_svg__a"
      x={0.749}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="js-1_svg__a"
      d="M10.5 10.5v6A1.5 1.5 0 019 18H7.5M16.5 10.5H15a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5A1.5 1.5 0 0115 18h-1.5"
    />
  );

export default SvgJs1;
