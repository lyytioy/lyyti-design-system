import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterPlus1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-plus-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-plus-1_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-plus-1_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18M17.25 14.246V7.5a.751.751 0 00-1.2-.6l-1.8 1.35M15.75 14.246h3M6.75 11.246h6M9.75 8.246v6"
    />
  );

export default SvgPaginateFilterPlus1;
