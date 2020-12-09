import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsMoviePrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-movie-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-movie-previous_svg__a"
      d="M23.25 6.75H.75v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM.75 9.75v10.5a1.5 1.5 0 001.5 1.5h4.5M23.25 10.56v-.81M8.25.75l-1.5 6M17.25.75l-1.5 6M18.05 19.35l4 3a.75.75 0 001.2-.6v-6a.75.75 0 00-1.2-.6l-4 3a.75.75 0 000 1.2z"
    />,
    <rect
      className="controls-movie-previous_svg__a"
      x={11.75}
      y={14.25}
      width={3.001}
      height={9}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgControlsMoviePrevious;
