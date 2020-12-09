import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesReel1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-reel-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="movies-reel-1_svg__a" cx={9.75} cy={9.75} r={9} />,
    <path
      className="movies-reel-1_svg__a"
      d="M17.25 14.727v5.523a3 3 0 003 3 3 3 0 003-3v-1.5"
    />,
    <circle className="movies-reel-1_svg__a" cx={9.75} cy={9.75} r={2.25} />,
    <path
      className="movies-reel-1_svg__a"
      d="M9.75 3.75v.75M9.75 15v.75M14.801 12.988l-.631-.405M5.33 6.917l-.631-.405M4.699 12.988l.631-.405M14.17 6.917l.631-.405"
    />
  );

export default SvgMoviesReel1;
