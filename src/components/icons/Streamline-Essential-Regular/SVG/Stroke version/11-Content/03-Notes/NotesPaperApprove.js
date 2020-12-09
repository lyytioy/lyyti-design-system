import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesPaperApprove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-paper-approve_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-paper-approve_svg__a"
      d="M13.629 23.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v11.379a1.5 1.5 0 01-.439 1.06l-8.122 8.122a1.5 1.5 0 01-1.06.439z"
    />,
    <path
      className="notes-paper-approve_svg__a"
      d="M14.25 23.115V15.75a1.5 1.5 0 011.5-1.5h7.365M15 5.25l-5.309 7.078a1.5 1.5 0 01-2.211.208L5.25 10.5"
    />
  );

export default SvgNotesPaperApprove;
