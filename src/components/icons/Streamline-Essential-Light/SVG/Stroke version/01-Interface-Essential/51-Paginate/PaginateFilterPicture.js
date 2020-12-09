import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterPicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-picture_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-picture_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-picture_svg__a"
      d="M21 16.5l-2.657-7.089a.5.5 0 00-.884-.1L14 14.5l-2.049-2.459a.5.5 0 00-.813.063L8.5 16.5"
    />,
    <circle
      className="paginate-filter-picture_svg__a"
      cx={10}
      cy={5.997}
      r={1.5}
    />,
    <path
      className="paginate-filter-picture_svg__a"
      d="M23.5 16.497h-20M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />
  );

export default SvgPaginateFilterPicture;
