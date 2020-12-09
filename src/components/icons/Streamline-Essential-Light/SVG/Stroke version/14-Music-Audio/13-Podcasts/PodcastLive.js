import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPodcastLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".podcast-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="podcast-live_svg__a"
      x={0.5}
      y={7}
      width={23}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="podcast-live_svg__a"
      d="M4.5 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M12.5 14.5v-5M14.5 9.5v1.7a5.954 5.954 0 001 3.3 5.954 5.954 0 001-3.3V9.5M8.5 9.5v4a1 1 0 001 1h1M20.5 14.5h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M18.5 12h2"
    />
  );

export default SvgPodcastLive;
