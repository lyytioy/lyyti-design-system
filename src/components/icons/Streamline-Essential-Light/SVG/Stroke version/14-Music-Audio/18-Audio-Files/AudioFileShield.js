import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-shield_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-shield_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.119-1.686 2.5-1.686 2.5.754 2.5 1.686z"
    />,
    <path
      className="audio-file-shield_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5M17.5 13.5v6M20.5 16.5h-6M18.035 23.4l.553-.21c2.63-1 4.912-3.524 4.912-6.338v-3.396a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.521 15.521 0 00-5.35 1 1.044 1.044 0 00-.628.958v3.393c0 2.814 2.238 5.336 4.868 6.338l.553.21a1.561 1.561 0 001.114.003z"
    />
  );

export default SvgAudioFileShield;
