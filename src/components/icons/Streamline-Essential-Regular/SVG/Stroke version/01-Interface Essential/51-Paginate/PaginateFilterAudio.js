import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterAudio = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-audio_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-audio_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-audio_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />,
    <circle
      className="paginate-filter-audio_svg__a"
      cx={11.625}
      cy={14.621}
      r={1.875}
    />,
    <path
      className="paginate-filter-audio_svg__a"
      d="M13.5 14.621V4.5l2.878 2.879a4.651 4.651 0 01.872 5.371"
    />
  );

export default SvgPaginateFilterAudio;
