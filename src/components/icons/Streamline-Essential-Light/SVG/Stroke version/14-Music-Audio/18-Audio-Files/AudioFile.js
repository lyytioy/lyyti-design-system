import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <circle className="audio-file_svg__a" cx={15} cy={15} r={1.5} />,
    <circle className="audio-file_svg__a" cx={8} cy={16} r={1.5} />,
    <path
      className="audio-file_svg__a"
      d="M9.5 16v-5.746a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V15"
    />
  );

export default SvgAudioFile;
