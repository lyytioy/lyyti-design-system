import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileM4V = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-m4v_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-m4v_svg__a"
      d="M2.25 23.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="video-file-m4v_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M9.75 23.25v-7.5L7.5 19.5l-2.25-3.75v7.5M17.231 23.235v-1.5M17.231 21.735V15.75a8.26 8.26 0 00-4.481 5.985h4.481M20.25 15.75v2.55a8.932 8.932 0 001.5 4.954 8.932 8.932 0 001.5-4.954v-2.55"
    />
  );

export default SvgVideoFileM4V;
