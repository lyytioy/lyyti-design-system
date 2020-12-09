import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-warning_svg__a"
      d="M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 18v-3"
    />,
    <path
      className="video-file-warning_svg__a"
      d="M23.063 20.683a1.774 1.774 0 01-1.587 2.567h-8.452a1.774 1.774 0 01-1.587-2.567l4.226-8.452a1.774 1.774 0 013.174 0zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="video-file-warning_svg__a"
      d="M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224z"
    />
  );

export default SvgVideoFileWarning;
