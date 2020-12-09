import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="movies-home_svg__a"
      x={2}
      y={0.5}
      width={20}
      height={12}
      rx={1}
      ry={1}
    />,
    <path className="movies-home_svg__a" d="M12 14.5v4" />,
    <rect
      className="movies-home_svg__a"
      x={1}
      y={14.5}
      width={22}
      height={4}
      rx={1}
      ry={1}
    />,
    <path
      className="movies-home_svg__a"
      d="M3 18.5h18V23a.5.5 0 01-.5.5h-17A.5.5 0 013 23v-4.5zM6.5 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 16.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M14 14.5h-4l1-2h2l1 2z"
    />,
    <path
      className="movies-home_svg__a"
      d="M6 21.5h5a1 1 0 011 1v1H5v-1a1 1 0 011-1zM12 14.5v4"
    />
  );

export default SvgMoviesHome;
