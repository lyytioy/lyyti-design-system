import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="audio-file-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-file-lock_svg__a"
      d="M21.75 15.75v-1.5a3 3 0 00-3-3 3 3 0 00-3 3v1.5M18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375M11.25 20.25h-9a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <ellipse
      className="audio-file-lock_svg__a"
      cx={6}
      cy={12.75}
      rx={2.25}
      ry={1.5}
    />,
    <path
      className="audio-file-lock_svg__a"
      d="M8.25 12.75l-.295-5.929 1.062-.113A2.685 2.685 0 0111.6 7.99"
    />
  );

export default SvgAudioFileLock;
