import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileMid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-mid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-mid_svg__a"
      d="M6 23.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="audio-file-mid_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M14.25 23.25v-7.5L12 19.5l-2.25-3.75v7.5M17.25 23.25v-7.5M20.25 23.25a3 3 0 003-3v-1.5a3 3 0 00-3-3z"
    />
  );

export default SvgAudioFileMid;
