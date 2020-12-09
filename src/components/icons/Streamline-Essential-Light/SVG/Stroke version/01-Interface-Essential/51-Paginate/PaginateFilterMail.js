import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-mail_svg__a"
      d="M23.5 17.486a1.5 1.5 0 01-1.5 1.5H5a1.5 1.5 0 01-1.5-1.5v-14a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="paginate-filter-mail_svg__a"
      d="M23 2.486l-9.5 9-9.5-9M3.5 6.008h-2a1 1 0 00-1 1v14a1 1 0 001 1h17a1 1 0 001-1v-2"
    />
  );

export default SvgPaginateFilterMail;
