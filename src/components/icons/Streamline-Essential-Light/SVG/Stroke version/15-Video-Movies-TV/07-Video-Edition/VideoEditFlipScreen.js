import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditFlipScreen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-flip-screen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M8.5 15.5v7a1 1 0 001 1h13a1 1 0 001-1v-7M15.5 8.5v-7a1 1 0 00-1-1h-13a1 1 0 00-1 1v7z"
    />,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M12.5.5v8h-9v-8M3.5 4.5h-3M15.5 4.5h-3M11.5 23.5v-8h9v8M11.5 15.5h-3M11.5 19.5h-3M20.5 15.5h3M20.5 19.5h3M.5 13.5l3-3 3 3"
    />,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M3.5 10.5v4a4 4 0 004 4h1M23.5 10.5l-3 3-3-3"
    />,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M20.5 13.5v-4a4 4 0 00-4-4h-1"
    />
  );

export default SvgVideoEditFlipScreen;
