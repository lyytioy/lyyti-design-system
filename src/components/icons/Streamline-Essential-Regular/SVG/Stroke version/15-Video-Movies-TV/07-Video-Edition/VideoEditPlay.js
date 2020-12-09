import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-edit-play_svg__a"
      x={12}
      y={12}
      width={11.25}
      height={11.25}
      rx={1.406}
      ry={1.406}
    />,
    <path
      className="video-edit-play_svg__a"
      d="M.75 5.25h4.5M18.75 5.25h-4.5M5.25 23.25v-9M14.25 8.25V.75M5.25 9.75v-9M.75 18.75h4.5M.75 14.25H9M18.75 8.25v-6a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5H9M.75 9.75h9M15.75 17.65v-2.1a.5.5 0 01.752-.426l3.506 2.1a.5.5 0 010 .852l-3.506 2.1a.5.5 0 01-.752-.426z"
    />
  );

export default SvgVideoEditPlay;
