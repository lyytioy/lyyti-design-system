import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditFlipScreen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-flip-screen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M23.25 15.75v6a1.5 1.5 0 01-1.5 1.5H8.25a1.5 1.5 0 01-1.5-1.5v-6M18.75 15.75v7.5M23.25 19.5h-4.5M11.25 15.75v7.5M6.75 19.5h4.5M23.25 15.75H6.75M6.75 18.75H6a3 3 0 01-3-3v-4.5"
    />,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M.75 13.5L3 11.25l2.25 2.25M.75 8.25v-6a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v6M5.25 8.25V.75M.75 4.5h4.5M12.75 8.25V.75M17.25 4.5h-4.5M.75 8.25h16.5M17.25 5.25H18a3 3 0 013 3v4.5"
    />,
    <path
      className="video-edit-flip-screen_svg__a"
      d="M23.25 10.5L21 12.75l-2.25-2.25"
    />
  );

export default SvgVideoEditFlipScreen;
