import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterAudio = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-audio_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-audio_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-audio_svg__a"
      d="M13.5 15.247a2.329 2.329 0 01-2.25 2.25 2.514 2.514 0 010-5h2.25zM13.5 12.5l.021-9.328c0 2.73 5.122 1.661 2.765 8.328l-.43 1.125"
    />,
    <path
      className="paginate-filter-audio_svg__a"
      d="M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />
  );

export default SvgPaginateFilterAudio;
