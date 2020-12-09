import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMoviePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-play_svg__a"
      d="M23.25 6.873H.75v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM.75 9.873v10.5a1.5 1.5 0 001.5 1.5H12M23.25 12.123v-2.25M8.25.873l-1.5 6M17.25.873l-1.5 6M22.886 18.107l-6.042-3.625a.75.75 0 00-1.136.643v7.25a.75.75 0 001.136.643l6.042-3.625a.75.75 0 000-1.286z"
    />
  );

export default SvgControlsMoviePlay;
