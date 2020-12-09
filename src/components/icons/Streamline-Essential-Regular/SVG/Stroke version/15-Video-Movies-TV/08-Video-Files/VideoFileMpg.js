import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileMpg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-mpg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-mpg_svg__a"
      d="M3 23.25h-.75a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="video-file-mpg_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M11.25 23.25v-7.5L9 19.5l-2.25-3.75v7.5M14.25 23.25v-7.5M14.25 15.75H15a2.25 2.25 0 010 4.5h-.75M22.5 20.25h.75v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5h1.5"
    />
  );

export default SvgVideoFileMpg;
