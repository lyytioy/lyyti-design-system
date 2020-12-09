import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphones1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="headphones-1_svg__a"
      x={3.75}
      y={12.75}
      width={4.5}
      height={10.5}
      rx={1}
      ry={1}
    />,
    <rect
      className="headphones-1_svg__a"
      x={15.75}
      y={12.75}
      width={4.5}
      height={10.5}
      rx={1}
      ry={1}
    />,
    <path
      className="headphones-1_svg__a"
      d="M.75 18v-6a11.25 11.25 0 0122.5 0v6"
    />
  );

export default SvgHeadphones1;
