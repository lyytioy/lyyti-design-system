import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterPlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-plus_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-plus_svg__a"
      d="M20.5 9.5a1 1 0 00-1-1h-4v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4h-4a1 1 0 00-1 1v2a1 1 0 001 1h4v4a1 1 0 001 1h2a1 1 0 001-1v-4h4a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-plus_svg__a"
      d="M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />
  );

export default SvgPaginateFilterPlus;
