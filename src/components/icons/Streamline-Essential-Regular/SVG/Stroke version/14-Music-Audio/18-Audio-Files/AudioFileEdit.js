import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-edit_svg__a"
      d="M22.63 14.87L15 22.5l-3.75.75.75-3.75 7.63-7.63a2.116 2.116 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <ellipse
      className="audio-file-edit_svg__a"
      cx={6}
      cy={12.75}
      rx={2.25}
      ry={1.5}
    />,
    <path
      className="audio-file-edit_svg__a"
      d="M8.25 12.75l-.295-5.929 1.062-.113A2.685 2.685 0 0111.6 7.99"
    />
  );

export default SvgAudioFileEdit;
