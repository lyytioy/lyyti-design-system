import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesPaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-paper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-paper_svg__a"
      d="M16.5 23.5h-15a1 1 0 01-1-1v-21a1 1 0 011-1h21a1 1 0 011 1v15z"
    />,
    <path className="notes-paper_svg__a" d="M16.5 23.5v-6a1 1 0 011-1h6" />
  );

export default SvgNotesPaper;
