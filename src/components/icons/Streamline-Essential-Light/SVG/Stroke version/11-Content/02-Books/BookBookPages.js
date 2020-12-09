import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookBookPages = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-book-pages_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-book-pages_svg__a"
      d="M4.435.913l8.936 3.573a1 1 0 01.629.928v16.848a1 1 0 01-1.371.927l-8-3.2A1 1 0 014 19.062V1.739a1 1 0 011-1h14a1 1 0 011 1v17a1 1 0 01-1 1h-2"
    />,
    <path
      className="book-book-pages_svg__a"
      d="M4.552.845l11.636 2.237a1 1 0 01.812.982v16.675a1 1 0 01-1 1h-2"
    />
  );

export default SvgBookBookPages;
