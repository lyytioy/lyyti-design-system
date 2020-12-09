import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMovieStop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-stop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-stop_svg__a"
      d="M23.25 6.75H.75v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM.75 9.75v10.5a1.5 1.5 0 001.5 1.5h9M23.25 11.25v-1.5M8.25.75l-1.5 6M17.25.75l-1.5 6"
    />,
    <rect
      className="controls-movie-stop_svg__a"
      x={15.75}
      y={15.75}
      width={7.5}
      height={7.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgControlsMovieStop;
