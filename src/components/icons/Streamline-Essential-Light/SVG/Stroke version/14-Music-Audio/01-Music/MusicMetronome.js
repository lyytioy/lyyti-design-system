import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicMetronome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-metronome_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-metronome_svg__a"
      d="M17.3 10.992l3.064 9.192a1 1 0 01-.949 1.316H3.194a1 1 0 01-.949-1.316l6.333-19A1 1 0 019.527.5h3.559a1 1 0 01.948.684l1.435 4.305M3.806 15.5h15M3.806 21.5v2M18.806 21.5v2M4.806 12.5h5M5.806 9.5h4M6.806 6.5h3M7.806 3.5h2"
    />,
    <circle className="music-metronome_svg__a" cx={19.806} cy={3.5} r={2} />,
    <path className="music-metronome_svg__a" d="M11.306 15.5l7.346-10.369" />
  );

export default SvgMusicMetronome;
