import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklistCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist-check_svg__a"
      d="M20.252 9V5.249a1.5 1.5 0 00-1.5-1.5h-4M6.252 3.749h-4a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5H10.5"
    />,
    <path
      className="task-checklist-check_svg__a"
      d="M14.423 4.736a.751.751 0 01-.711.513H7.293a.751.751 0 01-.712-.513l-1-3a.749.749 0 01.712-.987h8.419a.749.749 0 01.711.987zM8.252 20.249H4.5a.75.75 0 01-.75-.75V6.749M17.252 6.749v1.5"
    />,
    <circle
      className="task-checklist-check_svg__a"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="task-checklist-check_svg__a"
      d="M19.924 15.5l-2.905 3.874a.751.751 0 01-1.131.08l-1.5-1.5M6.752 9.749h4.5M6.752 14.249h1.5"
    />
  );

export default SvgTaskChecklistCheck;
