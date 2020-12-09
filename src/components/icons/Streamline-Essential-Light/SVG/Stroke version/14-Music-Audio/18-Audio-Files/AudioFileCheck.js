import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-check_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-check_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.119-1.687 2.5-1.687 2.5.755 2.5 1.687z"
    />,
    <path
      className="audio-file-check_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5"
    />,
    <circle className="audio-file-check_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="audio-file-check_svg__a"
      d="M20.174 15.756l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5"
    />
  );

export default SvgAudioFileCheck;
