import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-music_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-music_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />,
    <circle
      className="paginate-filter-music_svg__a"
      cx={9.375}
      cy={14.621}
      r={1.875}
    />,
    <circle
      className="paginate-filter-music_svg__a"
      cx={16.875}
      cy={12.371}
      r={1.875}
    />,
    <path
      className="paginate-filter-music_svg__a"
      d="M11.25 14.621V7.828a1.5 1.5 0 011.026-1.423l4.5-1.251a1.5 1.5 0 011.974 1.423v5.794"
    />
  );

export default SvgPaginateFilterMusic;
