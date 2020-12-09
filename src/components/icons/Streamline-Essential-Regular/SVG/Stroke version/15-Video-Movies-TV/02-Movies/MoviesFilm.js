import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-film_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="movies-film_svg__a" d="M.75 23.25V.75M23.25.75v22.5" />,
    <rect
      className="movies-film_svg__a"
      x={6.75}
      y={0.75}
      width={10.5}
      height={9}
      rx={1}
      ry={1}
    />,
    <rect
      className="movies-film_svg__a"
      x={6.75}
      y={14.25}
      width={10.5}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="movies-film_svg__a"
      d="M4.125 3a.375.375 0 11-.375-.375.375.375 0 01.375.375M4.125 9a.375.375 0 11-.375-.375.375.375 0 01.375.375M4.125 15a.375.375 0 11-.375-.375.375.375 0 01.375.375M4.125 21a.375.375 0 11-.375-.375.375.375 0 01.375.375M20.625 3a.375.375 0 11-.375-.375.375.375 0 01.375.375M20.625 9a.375.375 0 11-.375-.375.375.375 0 01.375.375M20.625 15a.375.375 0 11-.375-.375.375.375 0 01.375.375M20.625 21a.375.375 0 11-.375-.375.375.375 0 01.375.375"
    />
  );

export default SvgMoviesFilm;
