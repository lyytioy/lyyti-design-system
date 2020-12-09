import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskChecklistWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-checklist-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="task-checklist-write_svg__a"
      d="M20.25 6.749v-1.5a1.5 1.5 0 00-1.5-1.5h-4M6.25 3.749h-4a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5H6"
    />,
    <path
      className="task-checklist-write_svg__a"
      d="M14.421 4.736a.751.751 0 01-.711.513H7.291a.751.751 0 01-.712-.513l-1-3a.749.749 0 01.712-.987h8.418a.749.749 0 01.712.987zM6.75 20.249H4.5a.75.75 0 01-.75-.75V6.749M15.752 7.499v2.25M6.75 9.749h4.5M6.75 14.249h1.5M13.045 22.719l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 013.182 3.182z"
    />
  );

export default SvgTaskChecklistWrite;
