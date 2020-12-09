import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-play_svg__a"
      d="M15.5 9.5v-8a1 1 0 00-1-1h-13a1 1 0 00-1 1v18a1 1 0 001 1h8"
    />,
    <path
      className="video-edit-play_svg__a"
      d="M12.5.5v8h-9v-8M3.5 4.5h-3M3.5 8.5h-3M15.5 4.5h-3M15.5 8.5h-3M3.5 20.5v-8h6M3.5 12.5h-3M3.5 16.5h-3"
    />,
    <rect
      className="video-edit-play_svg__a"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="video-edit-play_svg__a"
      d="M15.5 17.5v-1.82a.43.43 0 01.651-.369l3.034 1.82a.43.43 0 010 .738l-3.034 1.82a.43.43 0 01-.651-.369z"
    />
  );

export default SvgVideoEditPlay;
