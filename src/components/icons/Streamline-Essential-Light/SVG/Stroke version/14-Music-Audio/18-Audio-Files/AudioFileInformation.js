import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-information_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-information_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.119-1.686 2.5-1.686 2.5.754 2.5 1.686z"
    />,
    <path
      className="audio-file-information_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5"
    />,
    <circle
      className="audio-file-information_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="audio-file-information_svg__a"
      d="M17.5 20.5V17a.5.5 0 00-.5-.5h-1M16.75 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 20.5h3"
    />
  );

export default SvgAudioFileInformation;
