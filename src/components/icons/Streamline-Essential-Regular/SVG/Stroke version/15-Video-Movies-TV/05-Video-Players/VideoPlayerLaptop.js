import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-laptop_svg__a"
      d="M2.25 16.125V4.875a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v11.25M14.584 16.125a2.976 2.976 0 01-5.168 0H.75v1.5a3 3 0 003 3h16.5a3 3 0 003-3v-1.5z"
    />,
    <path
      className="video-player-laptop_svg__a"
      d="M10.924 7.206a.853.853 0 00-.789.033.759.759 0 00-.385.652v3.718a.76.76 0 00.385.652.853.853 0 00.789.033l3.489-1.647a.979.979 0 000-1.794z"
    />
  );

export default SvgVideoPlayerLaptop;
