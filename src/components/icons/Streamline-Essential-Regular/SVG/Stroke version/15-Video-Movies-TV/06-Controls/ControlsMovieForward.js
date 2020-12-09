import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMovieForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-forward_svg__a"
      d="M16.45 18.15l-4-3a.75.75 0 00-1.2.6v6a.75.75 0 001.2.6l4-3a.75.75 0 000-1.2z"
    />,
    <path
      className="controls-movie-forward_svg__a"
      d="M16.5 23.25l5.2-3.9a.75.75 0 000-1.2l-5.2-3.9M23.25 6.75H.75v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM.75 9.75v10.5a1.5 1.5 0 001.5 1.5H7.5M23.25 12.75v-3M8.25.75l-1.5 6M17.25.75l-1.5 6"
    />
  );

export default SvgControlsMovieForward;
