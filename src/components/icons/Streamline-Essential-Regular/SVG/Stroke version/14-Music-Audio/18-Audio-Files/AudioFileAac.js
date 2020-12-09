import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileAac = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-aac_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-aac_svg__a"
      d="M5.25 23.25h-3a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="audio-file-aac_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M23.25 15.75a3 3 0 00-3 3v1.5a3 3 0 003 3M8.25 23.25v-6a1.5 1.5 0 013 0v6M8.25 20.25h3M14.25 23.25v-6a1.5 1.5 0 013 0v6M14.25 20.25h3"
    />
  );

export default SvgAudioFileAac;
