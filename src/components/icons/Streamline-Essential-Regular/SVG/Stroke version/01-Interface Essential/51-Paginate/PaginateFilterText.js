import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-text_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-text_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18M8.25 6.746h10.5M8.25 9.746h10.5M8.25 12.746h7.5"
    />
  );

export default SvgPaginateFilterText;
