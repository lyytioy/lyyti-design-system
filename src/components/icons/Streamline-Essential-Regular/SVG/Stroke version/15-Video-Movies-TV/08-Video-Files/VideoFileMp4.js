import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileMp4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-mp4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-mp4_svg__a"
      d="M2.259 23.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.439l5.871 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="video-file-mp4_svg__a"
      d="M20.259 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M9.759 23.25v-7.5l-2.25 3.75-2.25-3.75v7.5M12.759 23.25v-7.5M12.759 15.75h.75a2.25 2.25 0 010 4.5h-.75M23.241 23.25v-1.5M23.241 21.75v-5.985a8.259 8.259 0 00-4.482 5.985h4.482"
    />
  );

export default SvgVideoFileMp4;
