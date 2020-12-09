import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesTasks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-tasks_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-tasks_svg__a"
      d="M18 2.5h2a1 1 0 011 1v19a1 1 0 01-1 1H4a1 1 0 01-1-1v-19a1 1 0 011-1h2"
    />,
    <path className="notes-tasks_svg__a" d="M14 2.5a2 2 0 00-4 0H8v3h8v-3z" />,
    <path
      className="notes-tasks_svg__a"
      d="M8 4.5H5.5A.5.5 0 005 5v16a.5.5 0 00.5.5H15V18a.5.5 0 01.5-.5H19V5a.5.5 0 00-.5-.5H16M19 17.5l-4 4"
    />,
    <path
      className="notes-tasks_svg__a"
      d="M8 11l.793-.793a1 1 0 011.414 0l.086.086a1 1 0 001.414 0l.086-.086a1 1 0 011.414 0l.086.086a1 1 0 001.414 0L15.5 9.5M8 15l.793-.793a1 1 0 011.414 0l.086.086a1 1 0 001.414 0l.086-.086a1 1 0 011.414 0l.086.086a1 1 0 001.414 0l.793-.793"
    />
  );

export default SvgNotesTasks;
