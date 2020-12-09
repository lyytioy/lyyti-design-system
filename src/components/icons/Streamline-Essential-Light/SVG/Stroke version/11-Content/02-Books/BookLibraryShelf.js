import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookLibraryShelf = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-library-shelf_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="book-library-shelf_svg__a" d="M19 5v16.5a2 2 0 004 0V5" />,
    <path
      className="book-library-shelf_svg__a"
      d="M19 .5v5a2 2 0 004 0v-5M21 5.5v-4M13 5v16.5a2 2 0 004 0V5"
    />,
    <path
      className="book-library-shelf_svg__a"
      d="M13 .5v5a2 2 0 004 0v-5M15 5.5v-4M7 5v16.5a2 2 0 004 0V5"
    />,
    <path
      className="book-library-shelf_svg__a"
      d="M7 .5v5a2 2 0 004 0v-5M9 5.5v-4M1 5v16.5a2 2 0 004 0V5"
    />,
    <path
      className="book-library-shelf_svg__a"
      d="M1 .5v5a2 2 0 004 0v-5M3 5.5v-4M17 18.5h-4M17 16.5h-4M23 18.5h-4M23 16.5h-4M11 18.5H7M11 16.5H7M5 18.5H1M5 16.5H1"
    />
  );

export default SvgBookLibraryShelf;
