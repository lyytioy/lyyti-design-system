import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-edit_svg__a"
      d="M9.009 20.494h-7.5a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v7.5M4.509 4.494v-4M8.509 4.494v-4M12.509 4.494v-4M22.889 15.114l-7.63 7.63-3.75.75.75-3.75 7.63-7.63a2.115 2.115 0 012.991 0l.009.008a2.116 2.116 0 010 2.992z"
    />
  );

export default SvgNotesEdit;
