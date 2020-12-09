import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesSitDrink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-sit-drink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="movies-sit-drink_svg__a"
      d="M6.5 11.5h3l-.5 4H7l-.5-4zM8 11.5l.257-1.03A1.281 1.281 0 019.5 9.5h1"
    />,
    <circle className="movies-sit-drink_svg__a" cx={16} cy={8.25} r={2.75} />,
    <path
      className="movies-sit-drink_svg__a"
      d="M18.939 13.6a3.5 3.5 0 00-6.439 1.9M3.5 13.5h-2a1 1 0 01-1-1v-11a1 1 0 011-1h19a1 1 0 011 1v7M10.418 18.754L5.969 21.3a1.179 1.179 0 001.057 2.1l4.312-1.887"
    />,
    <path
      className="movies-sit-drink_svg__a"
      d="M10 17.221a1.736 1.736 0 00.088.544L12 23.5h8l3.419-10.744a1.732 1.732 0 00-1.65-2.256 2.051 2.051 0 00-1.836 1.135L18 15.5h-6.279A1.72 1.72 0 0010 17.221zM12 15.5H6"
    />
  );

export default SvgMoviesSitDrink;
