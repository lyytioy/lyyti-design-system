import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-share_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-share_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.119-1.686 2.5-1.686 2.5.754 2.5 1.686z"
    />,
    <path
      className="audio-file-share_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5"
    />,
    <circle
      className="audio-file-share_svg__a"
      cx={13.75}
      cy={18.25}
      r={2.25}
    />,
    <circle
      className="audio-file-share_svg__a"
      cx={21.25}
      cy={21.25}
      r={2.25}
    />,
    <circle
      className="audio-file-share_svg__a"
      cx={21.25}
      cy={13.75}
      r={2.25}
    />,
    <path
      className="audio-file-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33"
    />
  );

export default SvgAudioFileShare;
