import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreBrain = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-brain_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-brain_svg__a"
      d="M8.324 14.942a2.8 2.8 0 00-2.184-1.937M11.25 6.75V15M8.324 6.058A2.8 2.8 0 016.14 8M14.176 6.058A2.8 2.8 0 0016.36 8"
    />,
    <circle
      className="music-genre-brain_svg__a"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-brain_svg__a"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-genre-brain_svg__a"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.025-1.423l4.5-1.25a1.5 1.5 0 011.975 1.423v5.794M20.686 8.431a3.441 3.441 0 00-.8-.559 3.339 3.339 0 00.364-1.5A3.375 3.375 0 0016.875 3a3.33 3.33 0 00-1.141.212 2.614 2.614 0 00-4.484-1.67 2.613 2.613 0 00-4.483 1.67A3.331 3.331 0 005.625 3 3.375 3.375 0 002.25 6.375a3.339 3.339 0 00.365 1.5 3.35 3.35 0 000 6.006 3.336 3.336 0 00-.365 1.5 3.344 3.344 0 003.98 3.314 2.621 2.621 0 002.395 1.555"
    />
  );

export default SvgMusicGenreBrain;
