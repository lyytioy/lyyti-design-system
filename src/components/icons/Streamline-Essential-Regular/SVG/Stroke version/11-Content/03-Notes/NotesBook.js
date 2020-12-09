import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="notes-book_svg__a" d="M.75 4.5h3M.75 12h3M.75 18h3" />,
    <rect
      className="notes-book_svg__a"
      x={2.25}
      y={0.75}
      width={17.25}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="notes-book_svg__a"
      x={7.501}
      y={5.25}
      width={8.249}
      height={5.25}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="notes-book_svg__a"
      d="M19.5 2.25v13.5h2.25a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM19.5 6.75h3.75M19.5 11.25h3.75"
    />
  );

export default SvgNotesBook;
