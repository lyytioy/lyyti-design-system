import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-search_svg__a"
      d="M11.25 23.25h-7.5A2.25 2.25 0 011.5 21M19.5 8.25V1.5a.75.75 0 00-.75-.75H4.5a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H7.5"
    />,
    <circle className="book-search_svg__a" cx={15} cy={15.75} r={5.25} />,
    <path className="book-search_svg__a" d="M22.5 23.25l-3.788-3.788" />
  );

export default SvgBookSearch;
