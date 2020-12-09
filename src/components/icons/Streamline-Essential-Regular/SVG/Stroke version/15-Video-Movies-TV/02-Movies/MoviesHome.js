import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="movies-home_svg__a"
      x={2.25}
      y={0.75}
      width={19.5}
      height={12}
      rx={0.639}
      ry={0.639}
    />,
    <path
      className="movies-home_svg__a"
      d="M14.25 15.75h-4.5l1.125-3h2.25l1.125 3zM9 18.375a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <rect
      className="movies-home_svg__a"
      x={0.75}
      y={15.75}
      width={22.5}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="movies-home_svg__a"
      d="M3.75 21.75v1.5M20.25 21.75v1.5M12 15.75h10.25a1 1 0 011 1v2H12v-3zM12 18.75h11.25v2a1 1 0 01-1 1H12v-3z"
    />
  );

export default SvgMoviesHome;
