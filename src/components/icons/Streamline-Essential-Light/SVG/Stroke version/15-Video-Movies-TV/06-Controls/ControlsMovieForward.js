import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMovieForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-forward_svg__a"
      d="M2.5.5h19a2 2 0 012 2v3H.5v-3a2 2 0 012-2zM.5 4.5l4-4M4.5 5.5l5-5M9.5 5.5l5-5M14.5 5.5l5-5M19.5 5.5l3.823-3.823M23.5 12.5v-5H.5v12a2 2 0 002 2h8"
    />,
    <path
      className="controls-movie-forward_svg__a"
      d="M15.5 15.5v5.016l3-2.516-3-2.5z"
    />,
    <circle
      className="controls-movie-forward_svg__a"
      cx={18}
      cy={18}
      r={5.5}
    />,
    <path
      className="controls-movie-forward_svg__a"
      d="M19 15.5l2.5 2.508-2.5 2.508"
    />
  );

export default SvgControlsMovieForward;
