import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFilePlayCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-play-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-play-circle_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <circle className="video-file-play-circle_svg__a" cx={12} cy={14} r={6} />,
    <path
      className="video-file-play-circle_svg__a"
      d="M10 11.948a.447.447 0 01.678-.384l4.1 2.052a.448.448 0 010 .768l-4.1 2.052a.447.447 0 01-.678-.384z"
    />
  );

export default SvgVideoFilePlayCircle;
