import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilter2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-2_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-2_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />,
    <path
      className="paginate-filter-2_svg__a"
      d="M11.5 8.236a2.181 2.181 0 012.068-1.49 2.18 2.18 0 012.179 2.18 1.985 1.985 0 01-.58 1.4l-3.92 3.919h4.5"
    />
  );

export default SvgPaginateFilter2;
