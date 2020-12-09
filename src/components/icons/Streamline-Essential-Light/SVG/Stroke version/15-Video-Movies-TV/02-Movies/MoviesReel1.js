import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesReel1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-reel-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="movies-reel-1_svg__a" cx={9.5} cy={9.5} r={9} />,
    <path
      className="movies-reel-1_svg__a"
      d="M17.5 13.625V20.5a3 3 0 006 0v-2"
    />,
    <circle className="movies-reel-1_svg__a" cx={9.5} cy={9.5} r={2} />,
    <path
      className="movies-reel-1_svg__a"
      d="M9.5 3v2M3.871 6.25l1.732 1M3.87 12.749l1.733-.999M9.499 16l.001-2M15.129 12.751l-1.732-1.001M15.13 6.25l-1.733.999"
    />
  );

export default SvgMoviesReel1;
