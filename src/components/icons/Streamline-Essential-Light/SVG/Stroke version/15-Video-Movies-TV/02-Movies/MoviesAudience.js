import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesAudience = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-audience_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="movies-audience_svg__a"
      cx={12.086}
      cy={18.35}
      r={2.35}
    />,
    <circle
      className="movies-audience_svg__a"
      cx={4.694}
      cy={18.35}
      r={2.35}
    />,
    <circle
      className="movies-audience_svg__a"
      cx={19.314}
      cy={18.35}
      r={2.35}
    />,
    <path
      className="movies-audience_svg__a"
      d="M23 23.5a4.683 4.683 0 00-7.292 0A4.861 4.861 0 0012 21.76M1 23.5a4.683 4.683 0 017.292 0A4.861 4.861 0 0112 21.76"
    />,
    <circle
      className="movies-audience_svg__a"
      cx={15.586}
      cy={8.85}
      r={2.35}
    />,
    <circle className="movies-audience_svg__a" cx={8.194} cy={8.85} r={2.35} />,
    <path
      className="movies-audience_svg__a"
      d="M19.208 14a4.861 4.861 0 00-3.708-1.74M15.5 12.26a4.706 4.706 0 00-2.543.74M10.629 13A4.665 4.665 0 004.5 14"
    />,
    <path
      className="movies-audience_svg__a"
      d="M2 14.5h-.5a1 1 0 01-1-1v-12a1 1 0 011-1h21a1 1 0 011 1v12a1 1 0 01-1 1H22"
    />
  );

export default SvgMoviesAudience;
