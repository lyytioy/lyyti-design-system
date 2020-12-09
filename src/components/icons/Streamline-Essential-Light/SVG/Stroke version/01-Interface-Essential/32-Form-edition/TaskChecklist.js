import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist_svg__a"
      d="M18 2.5h2a1 1 0 011 1v19a1 1 0 01-1 1H4a1 1 0 01-1-1v-19a1 1 0 011-1h2"
    />,
    <path
      className="task-checklist_svg__a"
      d="M14 2.5a2 2 0 00-4 0H8v3h8v-3z"
    />,
    <path
      className="task-checklist_svg__a"
      d="M8 4.5H5.5A.5.5 0 005 5v16a.5.5 0 00.5.5H15V18a.5.5 0 01.5-.5H19V5a.5.5 0 00-.5-.5H16M18.998 17.499l-4 4M8 8.499h8M8 11.499h8M8 14.499h4.5"
    />
  );

export default SvgTaskChecklist;
