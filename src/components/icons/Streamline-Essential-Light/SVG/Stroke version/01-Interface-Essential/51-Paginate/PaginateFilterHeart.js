import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-heart_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-heart_svg__a"
      d="M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />,
    <path
      className="paginate-filter-heart_svg__a"
      d="M13.5 16l-5.113-5.338a3.027 3.027 0 01-.567-3.493 3.027 3.027 0 014.846-.786l.834.836.835-.835a3.026 3.026 0 014.845.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgPaginateFilterHeart;
