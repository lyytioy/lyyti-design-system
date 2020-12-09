import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileDisk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-disk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-disk_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <circle className="audio-file-disk_svg__a" cx={12} cy={13} r={6.5} />,
    <circle className="audio-file-disk_svg__a" cx={12} cy={13} r={1.773} />
  );

export default SvgAudioFileDisk;
