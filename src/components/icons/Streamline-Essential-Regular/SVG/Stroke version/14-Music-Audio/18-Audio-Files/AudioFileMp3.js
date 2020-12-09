import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileMp3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-mp3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-mp3_svg__a"
      d="M1.5 23.25v-21A1.5 1.5 0 013 .75h10.629a1.5 1.5 0 011.06.439l5.872 5.872A1.5 1.5 0 0121 8.121v4.629"
    />,
    <path
      className="audio-file-mp3_svg__a"
      d="M21 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M9 23.25v-7.5L6.75 19.5 4.5 15.75v7.5M12 23.25v-7.5M12 15.75h.75a2.25 2.25 0 010 4.5H12M18 17.25a1.5 1.5 0 011.5-1.5l1.135.005a1.873 1.873 0 01-.008 3.745 1.873 1.873 0 01.008 3.745H19.5a1.5 1.5 0 01-1.5-1.5"
    />
  );

export default SvgAudioFileMp3;
