import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileMp3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-mp3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-mp3_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="audio-file-mp3_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M5.5 18.5v-6l1.5 3 1.5-3v6M13.5 14a1.5 1.5 0 01-1.5 1.5h-1.5v-3H12a1.5 1.5 0 011.5 1.5zM10.5 18.5v-3M15.5 13.7a1.114 1.114 0 011-1.2h.757A1.392 1.392 0 0118.5 14a1.391 1.391 0 01-1.248 1.5A1.391 1.391 0 0118.5 17a1.392 1.392 0 01-1.243 1.5H16.5a1.114 1.114 0 01-1-1.2"
    />
  );

export default SvgAudioFileMp3;
