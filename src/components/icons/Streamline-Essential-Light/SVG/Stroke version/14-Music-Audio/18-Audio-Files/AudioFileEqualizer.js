import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileEqualizer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-equalizer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-equalizer_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293zM5.5 19.5h3M5.5 17.5h3M5.5 15.5h3M5.5 13.5h3M5.5 11.5h3M5.5 9.5h3M5.5 7.5h3M15.5 19.5h3M15.5 17.5h3M15.5 15.5h3M15.5 13.5h3M15.5 11.5h3M10.5 19.5h3M10.5 17.5h3M10.5 15.5h3"
    />
  );

export default SvgAudioFileEqualizer;
