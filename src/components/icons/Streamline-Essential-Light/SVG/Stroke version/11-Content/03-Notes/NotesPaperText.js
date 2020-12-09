import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesPaperText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-paper-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-paper-text_svg__a"
      d="M16.5 15.5a1 1 0 00-1 1v7h-14a1 1 0 01-1-1v-21a1 1 0 011-1h21a1 1 0 011 1v14zM23.5 15.5l-8 8"
    />,
    <path
      className="notes-paper-text_svg__a"
      d="M5 10l1-1a1.415 1.415 0 012 0 1.415 1.415 0 002 0 1.415 1.415 0 012 0 1.415 1.415 0 002 0 1.415 1.415 0 012 0 1.415 1.415 0 002 0l1-1M5 15l1-1a1.415 1.415 0 012 0 1.415 1.415 0 002 0"
    />
  );

export default SvgNotesPaperText;
