import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExe1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exe-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="exe-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="exe-1_svg__a"
      d="M20.5 19.5H18a1.5 1.5 0 01-1.5-1.5v-5a1.5 1.5 0 011.5-1.5h2.5M16.5 15.504H19M8.5 19.5H6A1.5 1.5 0 014.5 18v-5A1.5 1.5 0 016 11.5h2.5M4.5 15.504H7M10.5 19.504l4-8M14.5 19.504l-4-8"
    />
  );

export default SvgExe1;
