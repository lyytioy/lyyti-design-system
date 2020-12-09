import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-film_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="movies-film_svg__a"
      x={2.5}
      y={0.5}
      width={19}
      height={23}
      rx={1}
      ry={1}
    />,
    <rect
      className="movies-film_svg__a"
      x={7.5}
      y={3.51}
      width={9}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="movies-film_svg__a"
      x={7.5}
      y={13.51}
      width={9}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="movies-film_svg__a"
      d="M5.25 4A.25.25 0 115 3.75a.25.25 0 01.25.25M5.25 8A.25.25 0 115 7.75a.25.25 0 01.25.25M5.25 12a.25.25 0 11-.25-.25.25.25 0 01.25.25M5.25 16a.25.25 0 11-.25-.25.25.25 0 01.25.25M5.25 20a.25.25 0 11-.25-.25.25.25 0 01.25.25M19.25 4a.25.25 0 11-.25-.25.25.25 0 01.25.25M19.25 8a.25.25 0 11-.25-.25.25.25 0 01.25.25M19.25 12a.25.25 0 11-.25-.25.25.25 0 01.25.25M19.25 16a.25.25 0 11-.25-.25.25.25 0 01.25.25M19.25 20a.25.25 0 11-.25-.25.25.25 0 01.25.25"
    />
  );

export default SvgMoviesFilm;
