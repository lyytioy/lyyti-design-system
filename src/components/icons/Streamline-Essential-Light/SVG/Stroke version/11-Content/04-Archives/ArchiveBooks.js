import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveBooks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-books_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="archive-books_svg__a"
      d="M8 22.5a1 1 0 01-1 1H1.5a1 1 0 01-1-1v-21a1 1 0 011-1H7a1 1 0 011 1z"
    />,
    <path
      className="archive-books_svg__a"
      d="M5.5 14a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5zM2.5 5.5h3M16 22.5a1 1 0 01-1 1H9a1 1 0 01-1-1v-21a1 1 0 011-1h6a1 1 0 011 1z"
    />,
    <path
      className="archive-books_svg__a"
      d="M13.5 14a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5zM10.5 5.5h3M23.5 22.5a1 1 0 01-1 1H17a1 1 0 01-1-1v-21a1 1 0 011-1h5.5a1 1 0 011 1z"
    />,
    <path
      className="archive-books_svg__a"
      d="M21.5 14a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5zM18.5 5.5h3"
    />,
    <circle className="archive-books_svg__a" cx={4} cy={19} r={1.5} />,
    <circle className="archive-books_svg__a" cx={12} cy={19} r={1.5} />,
    <circle className="archive-books_svg__a" cx={20} cy={19} r={1.5} />
  );

export default SvgArchiveBooks;
