import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklistRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist-remove_svg__a"
      d="M20.25 9V5.249a1.5 1.5 0 00-1.5-1.5h-4M6.25 3.749h-4a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h8.25"
    />,
    <path
      className="task-checklist-remove_svg__a"
      d="M14.421 4.736a.751.751 0 01-.711.513H7.291a.751.751 0 01-.712-.513l-1-3a.749.749 0 01.712-.987h8.418a.749.749 0 01.712.987zM8.25 20.249H4.5a.75.75 0 01-.75-.75V6.749M17.25 6.749v1.5M6.75 9.749h4.5M6.75 14.249h1.5"
    />,
    <circle
      className="task-checklist-remove_svg__a"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path className="task-checklist-remove_svg__a" d="M14.25 17.249h6" />
  );

export default SvgTaskChecklistRemove;
