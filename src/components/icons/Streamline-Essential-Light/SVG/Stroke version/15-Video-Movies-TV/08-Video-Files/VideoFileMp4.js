import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileMp4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-mp4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-mp4_svg__a"
      d="M20.5 23.486a1 1 0 001-1V6.461A5.975 5.975 0 0015.525.486H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="video-file-mp4_svg__a"
      d="M16.5.566v3.92a1 1 0 001 1h3.92M5.513 18.486v-6l1.5 3 1.5-3v6M13.513 13.986a1.5 1.5 0 01-1.5 1.5h-1.5v-3h1.5a1.5 1.5 0 011.5 1.5zM10.513 18.486v-3M18.5 18.486v-2M18.5 16.486V12.5a5.5 5.5 0 00-2.987 3.99H18.5"
    />
  );

export default SvgVideoFileMp4;
