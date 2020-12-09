import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-home_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.3a1 1 0 01.7.293L19.209 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-home_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.121-1.686 2.5-1.686 2.5.754 2.5 1.686z"
    />,
    <path
      className="audio-file-home_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5M12.5 16.308V22.5a1 1 0 001 1h7a1 1 0 001-1v-6.192"
    />,
    <path
      className="audio-file-home_svg__a"
      d="M10.5 18l5.854-4.953a1 1 0 011.292 0L23.5 18M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgAudioFileHome;
