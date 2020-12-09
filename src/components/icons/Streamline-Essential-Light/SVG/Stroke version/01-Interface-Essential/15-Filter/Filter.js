import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".filter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse className="filter_svg__a" cx={12} cy={4.001} rx={9.5} ry={3.5} />,
    <path
      className="filter_svg__a"
      d="M2.5 4v2.5a5.562 5.562 0 001.415 3.415L10.5 16.5M21.5 4v2.5a5.561 5.561 0 01-1.414 3.414L13.5 16.5M13.5 16.5v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-6M13.5 18.607a5.5 5.5 0 006.627-8.733"
    />
  );

export default SvgFilter;
