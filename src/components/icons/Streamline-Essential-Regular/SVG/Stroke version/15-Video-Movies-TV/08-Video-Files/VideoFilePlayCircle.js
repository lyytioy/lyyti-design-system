import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFilePlayCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-play-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-play-circle_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <path
      className="video-file-play-circle_svg__a"
      d="M10.549 16.046a.746.746 0 01-1.08-.667v-5.258a.746.746 0 011.08-.667l4.414 2.629a.746.746 0 010 1.334z"
    />,
    <circle
      className="video-file-play-circle_svg__a"
      cx={12}
      cy={12.75}
      r={6.75}
    />
  );

export default SvgVideoFilePlayCircle;
