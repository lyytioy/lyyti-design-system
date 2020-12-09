import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilter3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-3_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-3_svg__a"
      d="M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />,
    <path
      className="paginate-filter-3_svg__a"
      d="M10.5 6.5h3a2 2 0 110 4 2 2 0 110 4h-3"
    />
  );

export default SvgPaginateFilter3;
