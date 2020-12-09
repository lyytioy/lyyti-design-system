import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-search_svg__a"
      d="M12.081 23.5H3.5a2 2 0 01-2-2v-19"
    />,
    <path
      className="book-search_svg__a"
      d="M20.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v6.526M3.5 2.5h16"
    />,
    <circle className="book-search_svg__a" cx={16.029} cy={17.029} r={4.529} />,
    <path className="book-search_svg__a" d="M22.5 23.5l-3.248-3.248" />
  );

export default SvgBookSearch;
