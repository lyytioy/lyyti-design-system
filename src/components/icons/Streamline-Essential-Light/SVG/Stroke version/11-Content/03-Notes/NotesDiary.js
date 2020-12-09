import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesDiary = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-diary_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-diary_svg__a"
      d="M21 22.5a1 1 0 01-1 1H6V.5h14a1 1 0 011 1z"
    />,
    <path
      className="notes-diary_svg__a"
      d="M17 9a.5.5 0 01-.5.5h-5A.5.5 0 0111 9V6a.5.5 0 01.5-.5h5a.5.5 0 01.5.5zM6 .5H4a1 1 0 00-1 1v21a1 1 0 001 1h2"
    />
  );

export default SvgNotesDiary;
