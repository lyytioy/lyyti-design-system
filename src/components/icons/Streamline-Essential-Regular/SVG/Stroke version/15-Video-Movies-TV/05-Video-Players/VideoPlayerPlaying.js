import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerPlaying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-playing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-playing_svg__a"
      d="M2.483 6A11.287 11.287 0 016.75 2.048M2.048 17.251A11.2 11.2 0 01.75 12M12 23.25a11.188 11.188 0 01-6.006-1.736M21.518 18a11.31 11.31 0 01-4.268 3.953M21.953 6.751A11.2 11.2 0 0123.25 12M12 .75a11.2 11.2 0 015.257 1.3M9.488 15.66a.856.856 0 01-1.238-.766V9.106a.856.856 0 011.238-.766l5.789 2.895a.855.855 0 010 1.53z"
    />
  );

export default SvgVideoPlayerPlaying;
