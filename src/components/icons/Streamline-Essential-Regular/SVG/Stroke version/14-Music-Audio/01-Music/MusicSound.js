import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-sound_svg__a"
      d="M3 9.75v4.673M7.5 5.25v13.5M21 9.75v4.673M16.5 5.25v13.5M12 .75v22.5"
    />
  );

export default SvgMusicSound;
