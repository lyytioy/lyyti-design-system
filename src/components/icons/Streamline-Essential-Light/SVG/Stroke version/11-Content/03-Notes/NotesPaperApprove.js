import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesPaperApprove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-paper-approve_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-paper-approve_svg__a"
      d="M16.5 15.5a1 1 0 00-1 1v7h-14a1 1 0 01-1-1v-21a1 1 0 011-1h21a1 1 0 011 1v14zM23.5 15.5l-8 8"
    />,
    <path
      className="notes-paper-approve_svg__a"
      d="M17.5 6l-6.8 8.617a1 1 0 01-1.492.088L5.5 11"
    />
  );

export default SvgNotesPaperApprove;
