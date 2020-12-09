import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="audio-file_svg__a" cx={7.5} cy={16.079} r={1.5} />,
    <circle className="audio-file_svg__a" cx={15} cy={14.579} r={1.5} />,
    <path
      className="audio-file_svg__a"
      d="M16.5 14.579V9a1.5 1.5 0 00-1.864-1.455l-4.5.75A1.5 1.5 0 009 9.75v6.329"
    />,
    <path
      className="audio-file_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074z"
    />
  );

export default SvgAudioFile;
