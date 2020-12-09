import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileFlv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-flv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-flv_svg__a"
      d="M4.5 23.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="video-file-flv_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M8.25 23.25v-6a1.5 1.5 0 011.5-1.5h1.5M8.25 20.25h2.25M14.25 15.75v6a1.5 1.5 0 001.5 1.5h1.5M20.25 15.75v2.55a8.932 8.932 0 001.5 4.954 8.932 8.932 0 001.5-4.954v-2.55"
    />
  );

export default SvgVideoFileFlv;
