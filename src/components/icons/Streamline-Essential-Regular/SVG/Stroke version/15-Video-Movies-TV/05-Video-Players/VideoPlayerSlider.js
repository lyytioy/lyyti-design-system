import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-slider_svg__a"
      d="M10.341 9.092a.973.973 0 00-.9.039.863.863 0 00-.441.744v4.249a.864.864 0 00.44.745.975.975 0 00.9.039l3.987-1.883a1.118 1.118 0 000-2.05z"
    />,
    <rect
      className="video-player-slider_svg__a"
      x={4.5}
      y={3}
      width={15}
      height={18}
      rx={0.779}
      ry={0.779}
    />,
    <path
      className="video-player-slider_svg__a"
      d="M1.934 5.25A1.192 1.192 0 00.75 6.45v11.1a1.192 1.192 0 001.184 1.2M22.066 5.25a1.192 1.192 0 011.184 1.2v11.1a1.192 1.192 0 01-1.184 1.2"
    />
  );

export default SvgVideoPlayerSlider;
