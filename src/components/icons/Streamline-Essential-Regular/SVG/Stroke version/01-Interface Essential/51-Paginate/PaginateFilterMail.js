import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-mail_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-mail_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />,
    <path
      className="paginate-filter-mail_svg__a"
      d="M18.75 8.246v6a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="paginate-filter-mail_svg__a"
      d="M18.75 8.246a1.5 1.5 0 00-1.5-1.5h-7.5a1.5 1.5 0 00-1.5 1.5l4.455 2.773a1.5 1.5 0 001.59 0z"
    />
  );

export default SvgPaginateFilterMail;
