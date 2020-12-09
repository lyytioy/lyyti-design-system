import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileWav = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-wav_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-wav_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="audio-file-wav_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M9.5 12.5v1.764a9.468 9.468 0 01-1 4.236l-1-4-1 4a9.468 9.468 0 01-1-4.236V12.5M11.5 18.5V14a1.5 1.5 0 013 0v4.5M11.5 15.5h3M19.5 12.5V14a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5v-1.5"
    />
  );

export default SvgAudioFileWav;
