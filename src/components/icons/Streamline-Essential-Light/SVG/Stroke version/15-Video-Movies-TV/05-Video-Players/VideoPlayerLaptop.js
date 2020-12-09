import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-laptop_svg__a"
      d="M7.741 16.5a1 1 0 01.894.552C9.054 17.888 10.4 18.5 12 18.5s2.945-.612 3.365-1.448a1 1 0 01.894-.552H20.5V5.167A1.667 1.667 0 0018.833 3.5H5.166A1.666 1.666 0 003.5 5.167V16.5z"
    />,
    <path
      className="video-player-laptop_svg__a"
      d="M16.259 16.5a1 1 0 00-.894.552C14.945 17.888 13.6 18.5 12 18.5s-2.946-.612-3.365-1.448a1 1 0 00-.895-.552H2a1 1 0 00-.847 1.532 5.282 5.282 0 004.47 2.468h12.754a5.283 5.283 0 004.47-2.468A1 1 0 0022 16.5zM14.53 11.171a.714.714 0 000-1.342L9.97 8.171a.35.35 0 00-.47.329v4a.35.35 0 00.47.329z"
    />
  );

export default SvgVideoPlayerLaptop;
