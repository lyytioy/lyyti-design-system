import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerCloud = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-cloud_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-cloud_svg__a"
      x={4.5}
      y={10.5}
      width={12.75}
      height={12.75}
      rx={0.639}
      ry={0.639}
    />,
    <path
      className="video-player-cloud_svg__a"
      d="M1.454 12a4.646 4.646 0 01-.7-2.574 4.85 4.85 0 015.063-4.81A6.858 6.858 0 0118.827 7.1a3.655 3.655 0 014.423 3.539 3.35 3.35 0 01-2.79 3.47M9.424 14.331a.853.853 0 00-.789.033.759.759 0 00-.385.652v3.718a.76.76 0 00.385.652.853.853 0 00.789.033l3.489-1.647a.979.979 0 000-1.794z"
    />
  );

export default SvgVideoPlayerCloud;
