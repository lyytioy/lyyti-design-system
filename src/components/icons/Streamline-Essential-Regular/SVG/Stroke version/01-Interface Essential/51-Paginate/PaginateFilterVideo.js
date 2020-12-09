import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterVideo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-video_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-video_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-video_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />,
    <path
      className="paginate-filter-video_svg__a"
      d="M9.75 6.748v7.5a.75.75 0 001.136.643l6-3.749a.75.75 0 000-1.286l-6-3.749a.751.751 0 00-1.136.641z"
    />
  );

export default SvgPaginateFilterVideo;
