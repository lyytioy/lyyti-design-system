import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesPaperText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-paper-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-paper-text_svg__a"
      d="M13.629 23.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v11.379a1.5 1.5 0 01-.439 1.06l-8.122 8.122a1.5 1.5 0 01-1.06.439z"
    />,
    <path
      className="notes-paper-text_svg__a"
      d="M14.25 23.115V15.75a1.5 1.5 0 011.5-1.5h7.365M6.75 6.75h12M6.75 11.25H12"
    />
  );

export default SvgNotesPaperText;
