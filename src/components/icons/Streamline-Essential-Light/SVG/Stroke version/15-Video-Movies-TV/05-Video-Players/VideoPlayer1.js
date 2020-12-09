import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-1_svg__a"
      d="M22.879 5.006a1.026 1.026 0 00-.872-.839 75.429 75.429 0 00-20.014 0 1.025 1.025 0 00-.872.839 39.7 39.7 0 000 13.988 1.026 1.026 0 00.872.839 75.429 75.429 0 0020.014 0 1.025 1.025 0 00.872-.839 39.7 39.7 0 000-13.988z"
    />,
    <path
      className="video-player-1_svg__a"
      d="M9.307 8.148a.54.54 0 00-.807.468v6.768a.54.54 0 00.807.468l5.921-3.384a.539.539 0 000-.936z"
    />
  );

export default SvgVideoPlayer1;
