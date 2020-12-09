import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTvWatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv-watch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-tv-watch_svg__a"
      x={1}
      y={6.5}
      width={21}
      height={15}
      rx={2}
      ry={2}
    />,
    <path
      className="vintage-tv-watch_svg__a"
      d="M3 21.5v2M20 21.5v2M5.5.5l6 6 6-6"
    />,
    <rect
      className="vintage-tv-watch_svg__a"
      x={4}
      y={8.5}
      width={15}
      height={11}
      rx={3}
      ry={3}
    />,
    <path
      className="vintage-tv-watch_svg__a"
      d="M14.03 14.671a.714.714 0 000-1.342l-4.56-1.658A.35.35 0 009 12v4a.35.35 0 00.47.329z"
    />
  );

export default SvgVintageTvWatch;
