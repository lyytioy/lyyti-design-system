import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-music_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-music_svg__a"
      d="M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />,
    <circle
      className="paginate-filter-music_svg__a"
      cx={9.496}
      cy={14.293}
      r={2}
    />,
    <circle
      className="paginate-filter-music_svg__a"
      cx={17.496}
      cy={12.293}
      r={2}
    />,
    <path
      className="paginate-filter-music_svg__a"
      d="M19.5 12.293V5.5a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.982v7.67"
    />
  );

export default SvgPaginateFilterMusic;
