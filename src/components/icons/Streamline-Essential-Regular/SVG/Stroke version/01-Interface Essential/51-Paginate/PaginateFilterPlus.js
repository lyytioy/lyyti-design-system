import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterPlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-plus_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-plus_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18M14.25 5.246v9M9.75 9.746h9"
    />
  );

export default SvgPaginateFilterPlus;
