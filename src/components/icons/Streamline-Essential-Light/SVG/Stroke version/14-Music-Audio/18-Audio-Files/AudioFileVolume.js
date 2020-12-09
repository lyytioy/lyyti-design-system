import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileVolume = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-volume_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-volume_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <path
      className="audio-file-volume_svg__a"
      d="M6.5 11.5a1 1 0 00-1 1v2a1 1 0 001 1H8l3.014 2.374A1 1 0 0012.5 17v-7a1 1 0 00-1.486-.874L8 11.5zM15.561 12.243a1.5 1.5 0 010 2.121M17.182 10.121a4.5 4.5 0 010 6.364"
    />
  );

export default SvgAudioFileVolume;
