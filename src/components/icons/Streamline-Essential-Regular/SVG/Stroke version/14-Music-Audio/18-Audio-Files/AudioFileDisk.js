import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileDisk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-disk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-disk_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15.045a1.5 1.5 0 011.048.426l2.954 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <circle className="audio-file-disk_svg__a" cx={12} cy={12} r={6.75} />,
    <circle className="audio-file-disk_svg__a" cx={12} cy={12} r={2.25} />
  );

export default SvgAudioFileDisk;
