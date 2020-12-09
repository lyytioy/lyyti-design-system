import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist_svg__a"
      d="M7.75 3.749h-4a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5v-16.5a1.5 1.5 0 00-1.5-1.5h-4"
    />,
    <path
      className="task-checklist_svg__a"
      d="M15.921 4.736a.751.751 0 01-.712.513H8.791a.751.751 0 01-.712-.513l-1-3a.749.749 0 01.712-.987h8.418a.749.749 0 01.712.987zM18.75 6.749v9.878a1.5 1.5 0 01-.439 1.061l-2.122 2.121a1.5 1.5 0 01-1.06.44H6a.75.75 0 01-.75-.75V6.749"
    />,
    <path
      className="task-checklist_svg__a"
      d="M14.25 20.249v-3a1.5 1.5 0 011.5-1.5h3"
    />
  );

export default SvgTaskChecklist;
