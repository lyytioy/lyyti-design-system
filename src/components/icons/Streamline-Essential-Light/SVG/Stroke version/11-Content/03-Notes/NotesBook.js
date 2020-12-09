import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-book_svg__a"
      d="M18.5 21.5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-19a1 1 0 011-1h13a1 1 0 011 1z"
    />,
    <path
      className="notes-book_svg__a"
      d="M14.5 9a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h5a.5.5 0 01.5.5zM2.5 4.5h3M2.5 9.5h3M2.5 14.5h3M2.5 19.5h3M21.5 7.5h-3v-4h2a1 1 0 011 1zM18.5 7.5h3v4h-3zM18.5 11.5h3v4h-3zM21.5 18.5a1 1 0 01-1 1h-2v-4h3z"
    />
  );

export default SvgNotesBook;
