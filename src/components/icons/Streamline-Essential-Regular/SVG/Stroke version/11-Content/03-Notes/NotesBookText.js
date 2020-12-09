import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesBookText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-book-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-book-text_svg__a"
      d="M23.25 21.643a1.557 1.557 0 01-1.5 1.607H2.25a1.557 1.557 0 01-1.5-1.607V5.357a1.557 1.557 0 011.5-1.607h19.5a1.557 1.557 0 011.5 1.607zM5.25.75v4.5M9.75.75v4.5M14.25.75v4.5M18.75.75v4.5M6.75 9.75h10.5M6.75 14.25h10.5M6.75 18.75H12"
    />
  );

export default SvgNotesBookText;
