import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMovieRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-record_svg__a"
      d="M23.25 5.25H.75v-3a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM23.25 11.25v-3H.75v12a1.5 1.5 0 001.5 1.5h8.25M8.25.75l-1.5 4.5M17.25.75l-1.5 4.5"
    />,
    <circle
      className="controls-movie-record_svg__a"
      cx={18.75}
      cy={18.75}
      r={4.5}
    />,
    <path
      className="controls-movie-record_svg__a"
      d="M18.75 18.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgControlsMovieRecord;
