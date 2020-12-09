import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-file-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1}
      ry={1}
    />,
    <path
      className="video-file-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375M10.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="video-file-lock_svg__a"
      d="M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224z"
    />
  );

export default SvgVideoFileLock;
