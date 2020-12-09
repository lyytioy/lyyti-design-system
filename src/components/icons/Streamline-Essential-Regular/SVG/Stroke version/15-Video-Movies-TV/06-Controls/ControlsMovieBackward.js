import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMovieBackward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-backward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-backward_svg__a"
      d="M16.55 19.35l4 3a.75.75 0 001.2-.6v-6a.75.75 0 00-1.2-.6l-4 3a.75.75 0 000 1.2z"
    />,
    <path
      className="controls-movie-backward_svg__a"
      d="M16.5 14.25l-6 4.5 6 4.5M23.25 6.75H.75v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM.75 9.75v10.5a1.5 1.5 0 001.5 1.5H7.5M23.25 11.25v-1.5M8.25.75l-1.5 6M17.25.75l-1.5 6"
    />
  );

export default SvgControlsMovieBackward;
