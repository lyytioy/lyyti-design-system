import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesList = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-list_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-list_svg__a"
      d="M10.629 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v8.379a1.5 1.5 0 01-.439 1.06l-8.122 8.122a1.5 1.5 0 01-1.06.439z"
    />,
    <path
      className="notes-list_svg__a"
      d="M11.25 20.115V12.75a1.5 1.5 0 011.5-1.5h7.365"
    />,
    <path
      className="notes-list_svg__a"
      d="M23.25 10.5v11.25a1.5 1.5 0 01-1.5 1.5h-15"
    />
  );

export default SvgNotesList;
