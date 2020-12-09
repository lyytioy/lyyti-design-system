import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicMetronome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-metronome_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-metronome_svg__a"
      d="M15.557 5.189l-1.138-3.413A1.5 1.5 0 0013 .75H9.075a1.5 1.5 0 00-1.4.968l-6.825 18a1.5 1.5 0 001.4 2.032H19a1.5 1.5 0 001.423-1.974l-2.831-8.493M3.75 21.75v1.5M17.25 21.75v1.5M2.352 15.75h16.725M6.902 3.75h2.175M5.765 6.75h3.312M4.627 9.75h4.375M3.49 12.75h5.512"
    />,
    <circle className="music-metronome_svg__a" cx={21} cy={3} r={2.25} />,
    <path className="music-metronome_svg__a" d="M19.416 4.598L10.5 15.75" />
  );

export default SvgMusicMetronome;
