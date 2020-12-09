import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesTasks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-tasks_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-tasks_svg__a"
      d="M15.75 4.5h3.75A1.5 1.5 0 0121 6v15.75a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h3.75a3.75 3.75 0 017.5 0z"
    />,
    <path
      className="notes-tasks_svg__a"
      d="M12 3.75a.375.375 0 11-.375.375A.375.375 0 0112 3.75M6.75 10.5H12M15 10.5h2.25M17.25 14.25H12M9 14.25H6.75M6.75 18H12M15 18h2.25"
    />
  );

export default SvgNotesTasks;
