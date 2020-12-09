import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-bar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="search-bar_svg__a" cx={16.925} cy={11.425} r={3.425} />,
    <path className="search-bar_svg__a" d="M19.346 13.846L21.5 16" />,
    <rect
      className="search-bar_svg__a"
      x={0.5}
      y={6}
      width={23}
      height={12}
      rx={1}
      ry={1}
    />
  );

export default SvgSearchBar;
