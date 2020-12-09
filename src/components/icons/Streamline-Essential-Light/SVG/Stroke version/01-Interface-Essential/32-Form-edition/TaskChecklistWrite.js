import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklistWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist-write_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-19a1 1 0 011-1h2M15.5 2.5h2a1 1 0 011 1v7M11.5 2.5a2 2 0 00-4 0h-2v3h8v-3z"
    />,
    <path
      className="task-checklist-write_svg__a"
      d="M16.5 10.5V5a.5.5 0 00-.5-.5h-2.5M5.5 4.5H3a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h6.5M5.5 8.499h8M5.5 11.499h8M5.5 14.499h4M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 13.02l3 3M12.7 19.299l3 3"
    />
  );

export default SvgTaskChecklistWrite;
