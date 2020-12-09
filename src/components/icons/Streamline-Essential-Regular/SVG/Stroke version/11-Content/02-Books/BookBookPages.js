import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookBookPages = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-book-pages_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-book-pages_svg__a"
      d="M16.5 21.513a1.5 1.5 0 01-1.9 1.446L4.1 20.042A1.5 1.5 0 013 18.6V2.487a1.5 1.5 0 011.9-1.446l10.5 3.391a1.5 1.5 0 011.1 1.445z"
    />,
    <path
      className="book-book-pages_svg__a"
      d="M4.5.987h15a1.5 1.5 0 011.5 1.5v15.75a1.5 1.5 0 01-1.5 1.5h-3"
    />
  );

export default SvgBookBookPages;
