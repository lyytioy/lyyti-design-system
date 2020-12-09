import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScreen1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screen-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="screen-1_svg__a"
      x={0.5}
      y={3}
      width={23}
      height={15}
      rx={1}
      ry={1}
    />,
    <path className="screen-1_svg__a" d="M6.489 21h11M10.5 18v3M13.5 18v3" />
  );

export default SvgScreen1;
