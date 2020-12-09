import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="search-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle
      className="search-square_svg__a"
      cx={11.125}
      cy={11.125}
      r={4.375}
    />,
    <path className="search-square_svg__a" d="M14.219 14.218l3.031 3.032" />
  );

export default SvgSearchSquare;
