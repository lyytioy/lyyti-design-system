import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusE = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-e_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="focus-e_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={19.5}
      rx={3}
      ry={3}
    />,
    <path
      className="focus-e_svg__a"
      d="M14.25 17.25H12A2.25 2.25 0 019.75 15V9A2.25 2.25 0 0112 6.75h2.25M9.75 12.75h4.5"
    />
  );

export default SvgFocusE;
