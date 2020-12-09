import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileEqualizer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-equalizer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-equalizer_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074zM5.25 18.75H7.5M10.5 18.75h2.25M5.25 15.75H7.5M5.25 12.75H7.5M5.25 9.75H7.5M10.5 15.75h2.25M15.75 18.75H18M15.75 15.75H18M15.75 12.75H18"
    />
  );

export default SvgAudioFileEqualizer;
