import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchBar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-bar-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="search-bar-1_svg__a"
      cx={16.569}
      cy={11.569}
      r={2.569}
    />,
    <path className="search-bar-1_svg__a" d="M18.385 13.385L20 15" />,
    <rect
      className="search-bar-1_svg__a"
      x={0.5}
      y={7}
      width={23}
      height={10}
      rx={5}
      ry={5}
    />
  );

export default SvgSearchBar1;
