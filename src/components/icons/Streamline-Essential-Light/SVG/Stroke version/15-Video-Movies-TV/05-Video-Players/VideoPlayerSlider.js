import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-slider_svg__a"
      d="M10.894 9.947A.618.618 0 0010 10.5v3a.618.618 0 00.895.553l2.658-1.329a.81.81 0 000-1.448z"
    />,
    <rect
      className="video-player-slider_svg__a"
      x={5.5}
      y={2.5}
      width={13}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="video-player-slider_svg__a"
      d="M3.5 4.5a1 1 0 00-1 1v13a1 1 0 001 1M2.5 6.5h-1a1 1 0 00-1 1v9a1 1 0 001 1h1M20.5 4.5a1 1 0 011 1v13a1 1 0 01-1 1M21.5 6.5h1a1 1 0 011 1v9a1 1 0 01-1 1h-1M7.5 19.5h1M11.5 19.5h1M15.5 19.5h1M7.5 4.5h1M11.5 4.5h1M15.5 4.5h1"
    />
  );

export default SvgVideoPlayerSlider;
