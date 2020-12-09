import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="search-square_svg__a"
      cx={11.137}
      cy={11.137}
      r={5.137}
    />,
    <path className="search-square_svg__a" d="M14.769 14.769L18 18" />,
    <rect
      className="search-square_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />
  );

export default SvgSearchSquare;
