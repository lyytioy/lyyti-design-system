import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-clock_svg__a"
      d="M15.5 9.5v-8a1 1 0 00-1-1h-13a1 1 0 00-1 1v18a1 1 0 001 1h8"
    />,
    <path
      className="video-edit-clock_svg__a"
      d="M12.5.5v8h-9v-8M3.5 4.5h-3M3.5 8.5h-3M15.5 4.5h-3M15.5 8.5h-3M3.5 20.5v-8h7M3.5 12.5h-3M3.5 16.5h-3"
    />,
    <circle className="video-edit-clock_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="video-edit-clock_svg__a" d="M19.5 17.5h-2v-3" />
  );

export default SvgVideoEditClock;
