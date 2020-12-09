import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-sound_svg__a"
      d="M12 1v22M8 4v18M4 8v10M1 12v2M16 4v18M20 8v10M23 12v2"
    />
  );

export default SvgMusicSound;
