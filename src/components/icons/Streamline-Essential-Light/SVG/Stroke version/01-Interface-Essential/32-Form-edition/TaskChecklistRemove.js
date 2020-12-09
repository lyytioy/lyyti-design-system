import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklistRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist-remove_svg__a"
      d="M10 23.5H1.5a1 1 0 01-1-1v-19a1 1 0 011-1h2M15.5 2.5h2a1 1 0 011 1v6M11.5 2.5a2 2 0 00-4 0h-2v3h8v-3z"
    />,
    <path
      className="task-checklist-remove_svg__a"
      d="M16.5 9.5V5a.5.5 0 00-.5-.5h-2.5M5.5 4.5H3a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h7M5.5 8.499h8M5.5 11.499h6M5.5 14.499h4"
    />,
    <circle
      className="task-checklist-remove_svg__a"
      cx={17.5}
      cy={17.499}
      r={6}
    />,
    <path className="task-checklist-remove_svg__a" d="M20.5 17.499h-6" />
  );

export default SvgTaskChecklistRemove;
